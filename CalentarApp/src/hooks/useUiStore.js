import { useDispatch, useSelector } from "react-redux";
import { onOpenDateModal,onCloseDateModal } from "../store";

export const useUiStore = () => {
  const dispatch = useDispatch();
  const { isDateModalOpen } = useSelector((state) => state.ui);

  const openModal = () => {
    dispatch(onOpenDateModal());
  };

  const closeModal = () => {
    dispatch(onCloseDateModal())
  };

  return { isDateModalOpen, openModal,closeModal };
};
