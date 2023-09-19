import { useCalendarStore } from "../../hooks";

export const FadDelete = () => {
  const { onDeleteEvent, hasEventSelected } = useCalendarStore();

  const onHandleDelete = () => {
    onDeleteEvent();
  };

  return (
    <button
      className="btn btn-danger fab-danger"
      onClick={onHandleDelete}
      style={{ display: hasEventSelected ? "" : "none" }}>
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};
