import { createContext, useEffect, useReducer } from "react";
import api, { getContact } from "../services/config";

const initalState = {
  contacts: [],
};

const contactReducer = (state, action) => {
  switch (action.type) {
    case "FETCHDATA":
      return {
        ...state,
        contacts: action.payload,
      };
    case "ADDCONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case "DELETECONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "EDITCONTACT":
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case "REMOVE_CONTACTS":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => !action.payload.includes(contact.id)
        ),
      };
    default:
      return state;
  }
};

export const ContContext = createContext();

function ContactContext({ children }) {
  const [state, dispatch] = useReducer(contactReducer, initalState);

  useEffect(() => {
    const fetchContacts = async () => {
       getContact(dispatch);
    };
    fetchContacts();
  }, []);

  return (
    <ContContext.Provider value={{ state, dispatch }}>
      {children}
    </ContContext.Provider>
  );
}

export default ContactContext;
