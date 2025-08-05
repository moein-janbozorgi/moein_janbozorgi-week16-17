import axios from "axios";
import styles from "./DeleteModal.module.css";
import { useContext } from "react";
import { ContContext } from "../Context/ContactContext";
import api, { deleteContact } from "../services/config";

function DeleteModal({ setShow, setStyle, id }) {
  const { dispatch } = useContext(ContContext);

  const cansleHandler = () => {
    setShow((s) => !s);
    setStyle((s) => !s);
  };

  const deleteHandler = async () => {
    deleteContact(id, dispatch, setShow, setStyle);
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <p>
          You want to delete a contact ! <br /> Are you sure ?
        </p>
        <div className={styles.buttons}>
          <button onClick={deleteHandler}>Delete</button>
          <button onClick={cansleHandler}>Cansle</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
