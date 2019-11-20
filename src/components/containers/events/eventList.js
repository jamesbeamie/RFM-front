/* eslint-disable react/prop-types */
import React from "react";
import EventItem from "./eventItem";
import "../../../assets/styles/blogList.css";

const EventList = props => {
  // can also use () then call this.props
  const eraseFunction = props.deleteEvent;
  const fetchedEvents = props.maevent.map(kaevent => {
    return (
      <EventItem
        key={kaevent.id}
        eventId={kaevent.id}
        slug={kaevent.slug}
        deleteEvent={eraseFunction}
        image_path={kaevent.image_path}
      />
    );
  });
  return <div className='row'>{fetchedEvents}</div>;
};

export default EventList;
