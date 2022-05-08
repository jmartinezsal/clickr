import React, {useState} from "react";
import { Modal } from '../../context/Modal';
import DeleteCommentForm from "./DeleteCommentModal";


function DeleteCommentModal({commentId}){
  const [ showModal, setShowModal ] = useState(false);


  return(
  <>
     <i onClick={() => setShowModal(true)} className="fa-solid fa-trash  fa-xl"></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteCommentForm showModal={setShowModal} commentId={commentId} />
        </Modal>
      )}
  </>

  )

}

export default DeleteCommentModal;
