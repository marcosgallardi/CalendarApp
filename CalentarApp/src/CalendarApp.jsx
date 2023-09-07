import { AppRouter } from "./router";
import { Provider } from "react-redux";
import { store } from "./store";

export const CalendarApp = () => {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
};
