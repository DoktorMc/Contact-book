import { ACTION_ADD_CONTACTS, ACTION_DELETE_CONTACTS, ACTION_SET_CONTACTS } from "../actions/contactsActions";

const initiaState = {
  contacts: []
}

const contactsReducer = (state = initiaState, {type, payload}) => {
  switch (type) {
    case ACTION_ADD_CONTACTS:
      return {
        ...state,
        contacts: [
          ...state.contacts,
          payload
        ]
      }
    case ACTION_DELETE_CONTACTS:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== payload)
      }
    case ACTION_SET_CONTACTS:
      return{contacts: payload}
  
    default:
      return state
  }
}

export default contactsReducer

