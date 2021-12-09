import { useState } from 'react';

import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Form, Label, Input, Errors } from './LoginForm.styles';
import Button from '../Button';
// import { useDispatch, useSelector } from 'react-redux';

// import { addContact } from '../../redux/actions/contacts';

// import selectors from '../../redux/selectors/contactsSelectors';

// import * as operations from '../../redux/operations/contactsOperations';

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .matches('^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&].*$')
    .required(),
});

export const LoginForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // const dispatch = useDispatch();
  // const contacts = useSelector(selectors.getContacts);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

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
    <Form onSubmit={handleSubmit()}>
      <Label>
        Email
        <Input
          type="email"
          {...register('email', { required: true })}
          placeholder="your@email"
        />
        {errors.email && <Errors>{errors.email.message}</Errors>}
      </Label>
      <Label>
        Password
        <Input
          type="password"
          {...register('password', { required: true })}
          placeholder="********"
        />
        {errors.password && <Errors>{errors.password.message}</Errors>}
      </Label>
      <Button
        type={'submit'}
        onClick={() => console.log('hi')}
        text={'Sign in'}
      ></Button>
    </Form>
  );
};

export default LoginForm;
