import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContactsApi, getContactsApi, removeContactsApi } from "../../service/contactsApi";

export const addContacts = createAsyncThunk(
    'contacts/addContacts',
    async (contact, { rejectWithValue }) => {
      try {
        const { data } = await addContactsApi(contact);
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );


export const getContacts = createAsyncThunk(
    'contacts/getContacts',
    async (_, { rejectWithValue }) => {
      try {
        const { data } = await getContactsApi();
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
  
  export const removeContacts = createAsyncThunk(
    'contacts/removeContacts',
    async (contact, { rejectWithValue }) => {
      try {
        const { data } = await removeContactsApi(contact);
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );