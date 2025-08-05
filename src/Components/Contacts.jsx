import inputs from "../constants/inputs";
import styles from "./Contacts.module.css";
import { useContext } from "react";
import { ContContext } from "../Context/ContactContext";

import { addContact } from "../services/config";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../utils/helper";

function Contacts() {
  const { dispatch } = useContext(ContContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (data) => {
    await addContact(dispatch, data, reset);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <div className={styles.form}>
          {inputs.map((input, index) => (
            <div key={index} className={styles.innerinput}>
              <input
                type={input.type}
                placeholder={input.placeholder}
                {...register(input.name)}
              />
              {errors[input.name] && (
                <p className={styles.error}>{errors[input.name].message}</p>
              )}
            </div>
          ))}
          <button type="submit" className={styles.add}>Add Contact</button>
        </div>
      </div>
    </form>
  );
}

export default Contacts;
