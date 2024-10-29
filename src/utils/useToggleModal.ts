import { useState } from "react";

const useToggleModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleToggleModal = () => {
    setOpenModal(!openModal);
  };

  return { openModal, handleToggleModal };
};

export default useToggleModal;
