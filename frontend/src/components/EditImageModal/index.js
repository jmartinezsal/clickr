import React, {useState} from "react";
import { Modal } from '../../context/Modal';
import EditImageForm from "./EditImageForm";


function EditImageModal({image}){
  const [ showModal, setShowModal ] = useState(false);

return(
  <>
     <i onClick={() => setShowModal(true)} className="fa-solid fa-pen-to-square fa-xl"></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditImageForm showModal={setShowModal} image={image} />
        </Modal>
      )}
  </>

  )

}

export default EditImageModal;
