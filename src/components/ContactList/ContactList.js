import styled from "styled-components";
import ContactInput from "../ContactInput/ContactInput";
import { useSelector, useDispatch } from "react-redux";
import { removeContact } from "../../redux/contacts/contactsSlice";
import { useEffect } from "react";
import { addContacts } from "../../redux/contacts/contactsOperations";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  useEffect(() => {
    dispatch(addContacts())
  }, [dispatch]);

   return (
    <List>
      {visibleContacts.map(({id, name, phone}) => (
        <Li key={id}>
          <ContactInput name={name} number={phone} />
          <Button
            type="button"
            onClick={() => dispatch(removeContact(id))}
          >
            Delete
          </Button>
        </Li>
      ))}
    </List>
  );
};
const List = styled.ul`
  margin-left: 15px;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  list-style: circle;
`;

const Button = styled.button`
  margin-left: 15px;
  background-color: white;
  border-radius: 4px;
  border: 1px solid black;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: white;
    border: 4px solid transparent;
    background-color: rgb(32, 122, 174, 0.56);
    box-shadow: 1px 4px 6px 0px rgba(0, 0, 0, 0.16),
      0px 4px 4px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12);
  }
`;

export default ContactList;
