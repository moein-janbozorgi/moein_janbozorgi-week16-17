import styles from "./ContactChoose.module.css";
import { useContext } from "react";
import { ContContext } from "../Context/ContactContext";
import { deleteSelected } from "../services/config";
function ContactChoose({ setchoseDelete, selectedContacts }) {
  const { dispatch } = useContext(ContContext);

  const deleteHandler = async () => {
    deleteSelected(selectedContacts, dispatch, setchoseDelete);
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <p>
          You want to delete choosen contacts ! <br /> Are you sure ?
        </p>
        <div className={styles.buttons}>
          <button onClick={deleteHandler}>Delete</button>
          <button onClick={() => setchoseDelete((s) => !s)}>Cansle</button>
        </div>
      </div>
    </div>
  );
}

export default ContactChoose;
