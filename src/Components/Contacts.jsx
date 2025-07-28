import { useState } from "react";
import inputs from "../constants/inputs";
import styles from "./Contacts.module.css";
import axios from "axios";
import { useContext } from "react";
import { ContContext } from "../Context/ContactContext";

function Contacts() {
  const [alert, setAlert] = useState("");

  const { dispatch } = useContext(ContContext);

  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const AddHandler = async () => {
    if (
      !contact.name ||
      contact.name.length > 10 ||
      contact.lastName.length > 12 ||
      !contact.lastName ||
      contact.phone.length !== 11 ||
      !contact.phone ||
      !contact.email ||
      !contact.email.includes("@")
    ) {
      setAlert("Please enter valid data!");
      return;
    }
    setAlert("");
    try {
      const res = await axios.post("http://localhost:4000/contacts", contact);
      dispatch({ type: "ADDCONTACT", payload: res.data });
      setContact({
        name: "",
        lastName: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      throw new Error("Something went wrong");
    }
  };

  return (
    <div>
      <div className={styles.form}>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            value={contact[input.name]}
            name={input.name}
            onChange={changeHandler}
          />
        ))}
        <button onClick={AddHandler}>Add Contact</button>
      </div>
      <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
    </div>
  );
}

export default Contacts;
