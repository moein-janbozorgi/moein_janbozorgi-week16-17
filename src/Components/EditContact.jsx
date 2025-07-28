import { useState } from "react";
import styles from "./EditContact.module.css";
import axios from "axios";
import { useContext } from "react";
import { ContContext } from "../Context/ContactContext";

function EditContact({
  setEditModal,
  setStyle,
  id,
  name,
  lastName,
  email,
  phone,
}) {
  const { dispatch } = useContext(ContContext);

  const [data, setData] = useState({
    name,
    lastName,
    email,
    phone,
  });

  const saveHandler = async () => {
    if (
      !data.name ||
      data.name.length > 8 ||
      data.lastName.length > 12 ||
      !data.lastName ||
      data.phone.length !== 11 ||
      !data.phone ||
      !data.email ||
      !data.email.includes("@")
    ) {
      alert("enter valid data");
      return;
    }
    try {
      const res = await axios.put(`http://localhost:4000/contacts/${id}`, data);
      dispatch({ type: "EDITCONTACT", payload: res.data });
      setEditModal((s) => !s);
      setStyle((s) => !s);
    } catch (error) {
      alert("Something went wrong");
    }
  };

  const cansleEditHandler = () => {
    setEditModal((s) => !s);
    setStyle((s) => !s);
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.inputs}>
          <input
            type="text"
            placeholder="Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />

          <input
            type="text"
            placeholder="LastName"
            value={data.lastName}
            onChange={(e) => setData({ ...data, lastName: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />

          <input
            type="number"
            placeholder="Phone"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={saveHandler}>Save changes</button>
        <button onClick={cansleEditHandler}>Cansle changes</button>
      </div>
    </div>
  );
}

export default EditContact;
