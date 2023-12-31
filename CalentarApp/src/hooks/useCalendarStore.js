import { useDispatch, useSelector } from "react-redux";
import {
  addNewEvent,
  deleteEvent,
  onSetActiveEvent,
  updateEvent,
} from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
  const { events, activeEvents } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    const finder = events.find((event) => {
      return event._id === calendarEvent._id;
    });
    if (finder) {
      dispatch(updateEvent({ ...calendarEvent }));
    } else {
      dispatch(addNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };

  const onDeleteEvent = () => {
    dispatch(deleteEvent());
  };

  return {
    events,
    activeEvents,
    hasEventSelected:!!activeEvents,
    setActiveEvent,
    startSavingEvent,
    onDeleteEvent,
  };
};
