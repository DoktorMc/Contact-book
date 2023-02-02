//actions

export const ACTION_ADD_CONTACTS = "ACTION_ADD_CONTACTS";
export const ACTION_DELETE_CONTACTS = "ACTION_DELETE_CONTACTS";
export const ACTION_SET_CONTACTS = "ACTION_SET_CONTACTS";

const CONTACTS_URL =
  "https://63dba03bb8e69785e486c5c1.mockapi.io/contacts/contacts/";

export const addContact = (data) => (dispatch) => {
  fetch(CONTACTS_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: ACTION_ADD_CONTACTS,
        payload: data,
      })
    );
};

export const deleteContact = (id) => (dispatch) => {
  fetch(CONTACTS_URL + id, {
    method: 'DELETE'
  })
  dispatch({
    type: ACTION_DELETE_CONTACTS,
    payload: id
  });
};

export const fetchContacts = () => (dispatch) =>{
  fetch(CONTACTS_URL)
    .then((resp) => resp.json())
    .then((data) =>
      dispatch({
        type: ACTION_SET_CONTACTS,
        payload: data
      })
    );
}
