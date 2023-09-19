import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const evento = {
  _id: new Date().getTime(),
  title: "All Day Event very long title",
  notes: "This is the note of the event",
  start: new Date(),
  end: addHours(new Date(), 1),
  bgColor: "#fafafa",
  user: {
    _id: 123,
    name: "Marcos Gallardi",
  },
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    events: [evento],
    activeEvents: null,
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvents = payload;
    },
    addNewEvent: (state, { payload }) => {
      console.log("payload", payload);
      state.events.push(payload);
      //limpieza del modal
      state.activeEvents = null;
      //limpieza del modal
    },
    updateEvent: (state, { payload }) => {
      state.events = state.events.map((event) => {
        if (event._id === payload._id) {
          return payload;
        }
        return event;
      });
    },
    deleteEvent: (state) => {
      if (state.activeEvents) {
        state.events = state.events.filter((event) => {
          event._id !== state.activeEvents._id;
          state.activeEvents = null;
          //return  event._id !== payload
        });
      }
    },
  },
});

export const { onSetActiveEvent, addNewEvent, updateEvent, deleteEvent } =
  calendarSlice.actions;
