import React from "react";

export default function Events({ eventList }: any) {
  console.log(eventList, "eventList");
  return (
    <div>
      <h2>Events</h2>
      {eventList.map((event: any) => {
        return (
          <div key={event.id}>
            <h2>title: {event.title}</h2>
            <h2>category: {event.category}</h2>
            <h2>description: {event.description}</h2>
            <h2>date: {event.date}</h2>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3001/events");
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
}
