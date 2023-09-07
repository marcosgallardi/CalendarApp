import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const evento = {
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
  reducers: {},
});

export const {} = calendarSlice.actions;
