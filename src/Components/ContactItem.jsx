import { useState } from "react";
import styles from "./ContactItem.module.css";
import DeleteModal from "./DeleteModal";
import EditContact from "./EditContact";
import ContactChoose from "./ContactChoose";

function ContactItem({
  contact,
  selectDelete,
  setchoseDelete,
  choseDelete,
  selectedContacts,
  setSelectedContacts,
}) {
  const [show, setShow] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [style, setStyle] = useState(false);
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected((s) => !s);

    setSelectedContacts((s) => {
      if (!selected) {
        return [...s, contact.id];
      } else {
        return s.filter((id) => id !== contact.id);
      }
    });
  };

  return (
    <>
      <li className={styles.item}>
        <p>
          {contact.name} {contact.lastName}
        </p>
        <p>
          <span>📬</span>
          {contact.email}
        </p>
        <p>
          <span>📞</span>
          {contact.phone}
        </p>
        {selectDelete ? (
          <div className={styles.circlecontainer} onClick={handleClick}>
            <div className={selected ? styles.circle : ""} />
          </div>
        ) : null}
        {!style ? (
          <button className={styles.edit} onClick={() => setStyle((s) => !s)}>
            ...
          </button>
        ) : (
          <div>
            <button
              className={styles.deletebutton}
              onClick={() => setShow((s) => !s)}
            >
              Delete
            </button>
            <button
              className={styles.editbutton}
              onClick={() => setEditModal((s) => !s)}
            >
              Edit
            </button>
          </div>
        )}
      </li>
      {show ? (
        <DeleteModal setShow={setShow} setStyle={setStyle} id={contact.id} />
      ) : null}
      {editModal ? (
        <EditContact
          setEditModal={setEditModal}
          setStyle={setStyle}
          id={contact.id}
          name={contact.name}
          lastName={contact.lastName}
          email={contact.email}
          phone={contact.phone}
        />
      ) : null}
      {choseDelete ? (
        <ContactChoose setchoseDelete={setchoseDelete} selectedContacts={selectedContacts} />
      ) : null}
    </>
  );
}

export default ContactItem;
