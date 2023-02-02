import { useEffect, useState } from "react";

export default function useContacts() {
  const [contacts, setContacts] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users/";

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setContacts(data));
  }, []);

  const addContact = (contact) => {
    contact = { ...contact };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(contact),
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((data) => setContacts([...contacts, data]));
  };

  const deleteContact = (id) => {
    fetch(url+`${id}`, {
      method: "DELETE",
    });
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };
  return {
    contacts,
    addContact,
    deleteContact,
  };
}
