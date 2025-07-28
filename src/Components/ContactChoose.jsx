import styles from "./ContactChoose.module.css";
import { useContext } from "react";
import { ContContext } from "../Context/ContactContext";
function ContactChoose({ setchoseDelete, selectedContacts }) {
  const { dispatch } = useContext(ContContext);

  const deleteHandler = async () => {
    try {
      await Promise.all(
        selectedContacts.map((id) =>
          fetch(`http://localhost:4000/contacts/${id}`, {
            method: "DELETE",
          })
        )
      );

      dispatch({ type: "REMOVE_CONTACTS", payload: selectedContacts });

      setchoseDelete(false);
    } catch (err) {
      console.error("خطا در حذف مخاطبین:", err);
    }
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
