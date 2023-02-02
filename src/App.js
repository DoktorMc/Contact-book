import React from "react";
import Contacts from './components/Contacts/Contacts'
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./store/actions/contactsActions";

import "./app.css";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);
  
  return (
    <Contacts />
  );
}

export default App;