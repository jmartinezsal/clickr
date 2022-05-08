import React, {useState} from "react";
import { Modal } from '../../context/Modal';
import DeleteImageForm from "./DeleteImageForm";


function DeleteImageModal({imageId}){
  const [ showModal, setShowModal ] = useState(false);

  return(
  <>
     <i onClick={() => setShowModal(true)} className="fa-solid fa-trash  fa-xl"></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteImageForm showModal={setShowModal} imageId={imageId} />
        </Modal>
      )}
  </>

  )

}

export default DeleteImageModal;
