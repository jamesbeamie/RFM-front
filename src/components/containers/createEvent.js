import React, { Component } from "react";
import { connect } from "react-redux";
import "../../assets/styles/blogModal.css";
import "../../assets/styles/blog.css";
import MyModal from "../common/modal";
import Backdrop from "../common/backdrop";
import EventList from "./events/eventList";
import axios from "axios";
import uploadEventAction from "../actions/uploadEvent";
import { storage } from "../../firebase";
import Spinner from "../common/Spinner";

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creating: false,
      eventArray: [],
      isLoading: false,
      specificEvent: null,
      image: "",
      progress: 0
    };

    this.handleUpload = this.handleUpload.bind(this);
  }

  onChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    this.fetchEvent();
  }

  handleCreateEvent = () => {
    this.setState({
      creating: true
    });
  };

  handleImage = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState({
        image
      });
    }
  };

  handleUpload = e => {
    e.preventDefault();
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // shows progress %
        const progressBar = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({
          progress: progressBar
        });
      },
      error => {
        return error;
      },
      () => {
        // returns completion of upload
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({
              image: url
            });
          });
      }
    );
  };
  handleCancel = () => {
    this.setState({
      creating: false,
      specificEvent: null
    });
  };

  handleDelete = slug => {
    axios
      .delete(
        `https://royalframesmedia-api.herokuapp.com/photography/royalframesmedia/events/${slug}`
      )
      .then(() => {
        this.fetchEvent();
      })
      .catch(err => {
        throw err;
      });
  };

  showEventDetails = eventId => {
    this.setState(prevState => {
      const selectedEvent = prevState.eventArray.find(
        event => event._id === eventId
      );
      return { specificEvent: selectedEvent };
    });
  };

  handleConfirm = event => {
    event.preventDefault();
    const { title, image } = this.state;
    const bumpData = { title, image };

    // eslint-disable-next-line react/prop-types
    this.props.uploadFamilyAction(bumpData);
    this.setState({
      creating: false
    });
  };

  fetchEvent = () => {
    this.setState({ isLoading: true });

    // acces api
    axios
      .get(
        "https://royalframesmedia-api.herokuapp.com/photography/royalframesmedia/events"
      )
      .then(response => {
        const events = response.data.results;
        this.setState({
          eventArray: events,
          isLoading: false
        });
      })
      .catch(err => {
        return err;
      });
  };
  render() {
    const {
      creating,
      eventArray,
      isLoading,
      specificEvent,
      progress
    } = this.state;
    const userToken = localStorage.getItem("token");
    return (
      <React.Fragment>
        {(creating || specificEvent) && <Backdrop />}
        {creating && (
          <MyModal
            title='Event'
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
        {specificEvent && (
          <MyModal
            title={specificEvent.title}
            canCancel
            canConfirm
            onCancel={this.handleCancel}
            onConfirm={this.handleConfirm}
            confirmText=''
          >
            <h4>title: {specificEvent.title}</h4>
            <p>Description: {specificEvent.description}</p>
            <h4>tag: {specificEvent.tag}</h4>
          </MyModal>
        )}
        {userToken && (
          <div className='hom-ctrl'>
            <h4>Upload Event</h4>
            <button className='btn' onClick={this.handleCreateEvent}>
              {" "}
              Click to Upload
            </button>
          </div>
        )}
        <div className=''>
          {isLoading ? (
            <Spinner />
          ) : (
            <EventList
              maevent={eventArray}
              eventDetails={this.showEventDetails}
              deleteEvent={this.handleDelete}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  event: state.eventReducer.newEvent
});
export default connect(mapStateToProps, { uploadEventAction })(CreateEvent);
