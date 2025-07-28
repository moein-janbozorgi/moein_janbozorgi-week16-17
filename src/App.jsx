import Contacts from "./Components/Contacts";
import ContactsList from "./Components/ContactsList";
import Header from "./Components/Header";
import ContactContext from "./Context/ContactContext";

function App() {
  return (
    <ContactContext>
      <Header/>
      <Contacts />
      <ContactsList />
    </ContactContext>
  );
}

export default App;
