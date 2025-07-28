import axios from "axios";
import styles from "./DeleteModal.module.css";
import { useContext } from "react";
import { ContContext } from "../Context/ContactContext";

function DeleteModal({ setShow, setStyle, id }) {

  const { dispatch } = useContext(ContContext);

  const cansleHandler = () => {
    setShow((s) => !s);
    setStyle((s) => !s);
  };

  const deleteHandler = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/contacts/${id}`
      );
      dispatch({ type: "DELETECONTACT", payload: id });
      setShow((s) => !s);
      setStyle((s) => !s);
    } catch (error) {
      console.error("Error while deleting:", error);
    }
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
