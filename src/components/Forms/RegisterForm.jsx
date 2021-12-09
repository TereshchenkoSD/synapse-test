// import { useHistory } from 'react-router';
// import { useDispatch } from 'react-redux';
// import { signUp } from 'redux/auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'yup-phone';
// import { FcGoogle } from 'react-icons/fc';
import { Form, Label, Input, Errors } from './Form.styles';
import Button from '../Button';

const registerSchema = yup.object().shape({
  username: yup.string().max(50, 'Too Long').required('Required'),
  email: yup.string().email().required('Required'),
  password: yup
    .string()
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .required('Required'),
});

export default function RegisterForm() {
  // const dispatch = useDispatch();
  // const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  // const onSubmit = newUser => dispatch(signUp(newUser));

  // const onLogInBtnClick = () => history.push('/login');

  return (
    <Form onSubmit={handleSubmit()}>
      <Label>
        User name
        <Input
          type="text"
          {...register('username', { required: true })}
          placeholder="name"
        />
        {errors.email && <Errors>{errors.email.message}</Errors>}
      </Label>
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
        text={'Sign up'}
      ></Button>
    </Form>
  );
}
