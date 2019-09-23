/* eslint-disable react/prop-types */
import React from 'react';
import '../../assets/styles/index.css';
import '../../assets/styles/modal.css';

const MyModal = (props) => {
	return (
		<div className="MyModal">
			<header className="MyModal_header">
				<h1>{props.title}</h1>
				<p className="tagi">tag:{props.tag}</p>
			</header>
			<section className="MyModal_content">{props.children}</section>
			<section className="MyModal_actions">
				{props.canCancel && (
					<button className="btn" onClick={props.onCancel}>
						close
					</button>
				)}
				{props.canConfirm && (
					<button className="btn" onClick={props.onConfirm}>
						{props.confirmText}
					</button>
				)}
			</section>
		</div>
	);
};

export default MyModal;
