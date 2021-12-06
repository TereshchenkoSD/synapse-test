import { useState } from 'react';

import PropTypes from 'prop-types';

// import { useDispatch, useSelector } from 'react-redux';

// import { addContact } from '../../redux/actions/contacts';

// import selectors from '../../redux/selectors/contactsSelectors';

// import * as operations from '../../redux/operations/contactsOperations';

import { Form, Label, Input, Button } from './LoginForm.styles';

export const LoginForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // const dispatch = useDispatch();
  // const contacts = useSelector(selectors.getContacts);

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   if (
  //     contacts.find(
  //       contact => contact.name.toLowerCase() === name.toLowerCase(),
  //     )
  //   ) {
  //     alert(`${name} is already in the contact list`);
  //     return;
  //   }
  //   dispatch(operations.addContact(name, number));

  //   formReset();
  // };

  // const formReset = () => {
  //   setName('');
  //   setNumber('');
  // };

  return (
    <Form onSubmit={() => console.log('hello')}>
      <Label>
        Email
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleInputChange}
        />
      </Label>
      <Label>
        Password
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          value={number}
          onChange={handleInputChange}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default LoginForm;
