
import { useCalendarStore, useUiStore } from "../../hooks";

export const FadDelete = () => {
  
  const {  } = useCalendarStore();

  const onHandleClickNew = () => {
   

  };

  return (
    <button className="btn btn-danger fab-danger" onClick={onHandleClickNew}>
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};
