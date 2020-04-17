import React, { Component } from "react";
import { connect } from "react-redux";
import "../../assets/styles/blogModal.css";
import "../../assets/styles/blog.css";
import MyModal from "../common/modal";
import Backdrop from "../common/backdrop";
import ChildrenList from "./children/ChildrenList";
import axios from "axios";
import uploadChildrenAction from "../actions/uploadChildren";
import { storage } from "../../firebase";
import Spinner from "../common/Spinner";
import Header from "../common/header";

class CreateChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creating: false,
      childrenArray: [],
      isLoading: false,
      specificBlog: null,
      image: "",
      progress: 0,
    };

    this.handleUpload = this.handleUpload.bind(this);
  }

  onChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {
    this.fetchChildren();
  }

  handleCreateChild = () => {
    this.setState({
      creating: true,
    });
  };

  handleImage = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState({
        image,
      });
    }
  };

  handleUpload = (e) => {
    e.preventDefault();
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // shows progress %
        const progressBar = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({
          progress: progressBar,
        });
      },
      (error) => {
        throw error;
      },
      () => {
        // returns completion of upload
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            this.setState({
              image: url,
            });
          });
      }
    );
  };
  handleCancel = () => {
    this.setState({
      creating: false,
      specificBlog: null,
    });
  };

  showBlogDetails = (blogId) => {
    this.setState((prevState) => {
      const selectedBlog = prevState.childrenArray.find(
        (blog) => blog._id === blogId
      );
      return { specificBlog: selectedBlog };
    });
  };

  handleDelete = (slug) => {
    axios
      .delete(
        `https://royalframesmedia-api.herokuapp.com/photography/royalframesmedia/children/${slug}`
      )
      .then(() => {
        this.fetchChildren();
      })
      .catch((err) => {
        throw err;
      });
  };

  handleConfirm = (event) => {
    event.preventDefault();
    const { title, image } = this.state;
    const childData = { title, image };

    // eslint-disable-next-line react/prop-types
    this.props.uploadChildrenAction(childData);
    this.setState({
      creating: false,
    });
  };

  fetchChildren = () => {
    this.setState({ isLoading: true });

    // acces api
    axios
      .get(
        "https://royalframesmedia-api.herokuapp.com/photography/royalframesmedia/children"
      )
      .then((response) => {
        const blogs = response.data.results;
        this.setState({
          childrenArray: blogs,
          isLoading: false,
        });
      })
      .catch((err) => {
        throw err;
      });
  };
  render() {
    const {
      creating,
      childrenArray,
      isLoading,
      specificBlog,
      progress,
    } = this.state;
    const userToken = localStorage.getItem("token");
    return (
      <React.Fragment>
        <Header />
        {(creating || specificBlog) && <Backdrop />}
        {creating && (
          <MyModal
            title='Litle ones'
            canCancel
            canConfirm
            onCancel={this.handleCancel}
            onConfirm={this.handleConfirm}
            confirmText='Upload'
          >
            <form>
              <progress value={progress} max='100' />
              <div className='form-ctrl'>
                <label htmlFor='title'>Blog tag</label>
                <input
                  placeholder='Enter blog tag'
                  type='text'
                  name='title'
                  onChange={this.onChange}
                  value={this.state.title}
                />
              </div>
              <div className='form-ctrl'>
                <label htmlFor='image'>Image</label>
                <input type='file' onChange={this.handleImage} />
                <button className='btn' onClick={this.handleUpload}>
                  Upload
                </button>
              </div>
            </form>
          </MyModal>
        )}
        {specificBlog && (
          <MyModal
            title={specificBlog.title}
            canCancel
            canConfirm
            onCancel={this.handleCancel}
            onConfirm={this.handleConfirm}
            confirmText=''
          >
            <h4>title: {specificBlog.title}</h4>
            <p>Description: {specificBlog.description}</p>
            <h4>tag: {specificBlog.tag}</h4>
          </MyModal>
        )}
        {userToken && (
          <div className='hom-ctrl'>
            <h4>Upload Child</h4>
            <button className='btn' onClick={this.handleCreateChild}>
              {" "}
              Click to Upload
            </button>
          </div>
        )}
        <div className=''>
          {isLoading ? (
            <Spinner />
          ) : (
            <ChildrenList
              childrens={childrenArray}
              blogDetails={this.showBlogDetails}
              removeChild={this.handleDelete}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  newChild: state.childrenReducer.newChild,
});
export default connect(mapStateToProps, { uploadChildrenAction })(CreateChild);
