import { useState } from "react";
import { Calendar } from "react-big-calendar";
import { localizer, getMessagesES } from "../../helpers";
import { EventCalendar, Navbar, CalendarModal } from "../";
import {useCalendarStore,useUiStore} from "../../hooks"
import "react-big-calendar/lib/css/react-big-calendar.css";




export const CalendarPage = () => {
  const { openModal } = useUiStore();

  const [lastView, setLastView] = useState(
    localStorage.getItem("lastview") || "agenda"
  );

const {events} = useCalendarStore()

  const eventStyleGetter = ({ event, start, end, isSelected }) => {
    const style = {
      backgroundColor: "#347CF7",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };

    return {
      style,
    };
  };

  const onDoubleClick = (event) => {
    openModal();
  };
  const onSelect = (event) => {
    console.log({ click: event });
  };
  const onViewChange = (event) => {
    localStorage.setItem("lastview", event);
    setLastView(event);
  };

  return (
    <>
      <Navbar />

      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: EventCalendar,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChange}
      />
      <CalendarModal />
    </>
  );
};
