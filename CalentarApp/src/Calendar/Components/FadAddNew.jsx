import React from "react";
import { useCalendarStore, useUiStore } from "../../hooks";
import { addHours } from "date-fns";

export const FadAddNew = () => {
  const { openModal } = useUiStore();
  const { setActiveEvent } = useCalendarStore();

  const onHandleClickNew = () => {
    setActiveEvent({
      _id: new Date().getTime(),
      title: "",
      notes: "",
      start: new Date(),
      end: addHours(new Date(), 1),
      bgColor: "#fafafa",
      user: {
        _id: 123,
        name: "Marcos Gallardi",
      },
    });

    openModal();
  };

  return (
    <button className="btn btn-primary fab" onClick={onHandleClickNew}>
      <i className="fas fa-plus"></i>
    </button>
  );
};
