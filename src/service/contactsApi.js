import axios from "axios";

const BASE_URL = "https://630cfcceb37c364eb7fe240a.mockapi.io/api/1/contacts/";

export const addContactsApi = (contacts) => {
  return  axios
    .post(`${BASE_URL}`, contacts)
};

export const getContactsApi = () => {
    return axios
    .get(`${BASE_URL}`)
    // .then((resp) => Object.entries(resp.data).map(([id, contacts]) => ({id, ...contacts})))
};

export const removeContactsApi = (id) => {
  return axios
    .delete(`${BASE_URL}${id}`);
};
