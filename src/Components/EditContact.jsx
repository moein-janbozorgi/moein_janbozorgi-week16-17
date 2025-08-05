import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./EditContact.module.css";
import { useContext, useEffect } from "react";
import { ContContext } from "../Context/ContactContext";
import { editConact } from "../services/config";
import schema from "../utils/helper";

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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name,
      lastName,
      email,
      phone,
    },
  });

  useEffect(() => {
    reset({ name, lastName, email, phone });
  }, [name, lastName, email, phone, reset]);

  const onSubmit = (data) => {
    editConact(id, setEditModal, setStyle, dispatch, data);
  };

  const cancelEditHandler = () => {
    setEditModal(false);
    setStyle(false);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.main}>
        <div className={styles.inputs}>
          <input type="text" placeholder="Name" {...register("name")} />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}

          <input type="text" placeholder="LastName" {...register("lastName")} />
          {errors.lastName && (
            <p className={styles.error}>{errors.lastName.message}</p>
          )}

          <input type="email" placeholder="Email" {...register("email")} />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}

          <input type="number" placeholder="Phone" {...register("phone")} />
          {errors.phone && (
            <p className={styles.error}>{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className={styles.buttons}>
        <button type="submit">Save changes</button>
        <button type="button" onClick={cancelEditHandler}>
          Cancel changes
        </button>
      </div>
    </form>
  );
}

export default EditContact;
