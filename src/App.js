import { Component } from "react";

import Contacts from "./components/Contacts";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";

import { nanoid } from "nanoid";
import "./index.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  componentDidUpdate(prevProps, { contacts }) {
    const currentState = this.state.contacts;
    if (contacts.length !== currentState.length) {
      localStorage.setItem("contacts-list", JSON.stringify(currentState));
    }
  }

  componentDidMount() {
    const data = localStorage.getItem("contacts-list");
    if (data && JSON.parse(data).length >= 0) {
      this.setState({ contacts: [...JSON.parse(data)] });
      return;
    }
  }

  addPhoneName = (obj) => {
    const { contacts } = this.state;
    const isInclude = contacts.find(
      ({ name }) => name.toLowerCase() === obj.name.toLowerCase()
    );
    if (!isInclude) {
      const newObj = { id: nanoid(), ...obj };
      this.setState((prevState) => {
        return {
          contacts: [...prevState.contacts, newObj],
        };
      });
      return;
    }
    alert(`${isInclude.name} is already in contacts`);
    return;
  };

  changeFilterState = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  filterItemsByName = () => {
    const { contacts: items, filter: filterName } = this.state;
    if (!filterName) {
      return items;
    }
    const newItems = items.filter((e) => {
      const { name } = e;
      return name.toLowerCase().includes(filterName.toLowerCase());
    });
    return newItems;
  };

  deleteContact = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((el) => el.id !== id),
      };
    });
  };

  render() {
    const {
      changeFilterState,
      addPhoneName,
      filterItemsByName,
      deleteContact,
    } = this;
    return (
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <ContactForm onSubmit={addPhoneName} />

        <h2 className="title">Contacts</h2>
        <Filter onChange={changeFilterState} />
        <Contacts items={filterItemsByName()} onClick={deleteContact} />
      </div>
    );
  }
}

export default App;
