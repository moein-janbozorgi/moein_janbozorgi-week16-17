import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:4000" });

api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

const getContact = async (dispatch) => {
  try {
    const res = await api.get("/contacts");
    dispatch({ type: "FETCHDATA", payload: res });
  } catch (error) {
    throw new Error("No Data");
  }
};

const addContact = async (dispatch, contact, setContact) => {
  try {
    const res = await api.post("/contacts", contact);
    dispatch({ type: "ADDCONTACT", payload: res });
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

const editConact = async (id, setEditModal, setStyle, dispatch, data) => {
  try {
    const res = await api.put(`contacts/${id}`, data);
    dispatch({ type: "EDITCONTACT", payload: res });
    setEditModal((s) => !s);
    setStyle((s) => !s);
  } catch (error) {
    alert("Something went wrong");
  }
};

const deleteContact = async (id, dispatch, setShow, setStyle) => {
  try {
    const response = await api.delete(`/contacts/${id}`);
    dispatch({ type: "DELETECONTACT", payload: id });
    setShow((s) => !s);
    setStyle((s) => !s);
  } catch (error) {
    console.error("Error while deleting:", error);
  }
};

const deleteSelected = async (selectedContacts, dispatch, setchoseDelete) => {
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
export default api;
export { addContact, editConact, deleteContact, deleteSelected, getContact};
