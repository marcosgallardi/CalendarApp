import React from "react";

export const EventCalendar = ({event}) => {
  const { user, title } = event;
  return (
    <>
      <strong>{title}</strong>
      <span> - {user.name}</span>
    </>
  );
};
