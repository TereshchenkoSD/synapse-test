// import { useHistory } from 'react-router';
// import { useDispatch } from 'react-redux';
// import { signUp } from 'redux/auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import 'yup-phone';
// import { FcGoogle } from 'react-icons/fc';
import {
  Wrap,
  TextWrap,
  Label,
  Field,
  FieldWrap,
  Errors,
} from './Forms.styles';
// import ButtonBlock from '../ButtonBlock/ButtonBlock';

const registerSchema = Yup.object().shape({
  username: Yup.string().max(50, 'Too Long').required('Required'),
  email: Yup.string().email().required('Required'),
  password: Yup.string()
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
    <Wrap>
      <form onSubmit={handleSubmit()}>
        <TextWrap>
          <div>
            <Label>{errors.username && <Errors> * </Errors>} Имя:</Label>
            <Field {...register('username')} placeholder="name" />
            {errors.username && <Errors>{errors.username.message}</Errors>}
          </div>
          <div>
            <Label>
              {errors.email && <Errors> * </Errors>}
              Электронная почта:
            </Label>
            <Field
              type="email"
              {...register('email')}
              placeholder="your@email.com"
            />
            {errors.email && <Errors>{errors.email.message}</Errors>}
          </div>
          <FieldWrap>
            <Label>{errors.password && <Errors> * </Errors>} Пароль:</Label>
            <Field
              type="password"
              {...register('password')}
              placeholder="********"
            />
            {errors.password && <Errors>{errors.password.message}</Errors>}
          </FieldWrap>
          {/* <ButtonBlock
            firstButtonText={'Регистрация'}
            secondButtonText={'Войти'}
            //firstButtonHandler={() => console.log('firstButtonHandler')}
            secondButtonHandler={onLogInBtnClick}
            firstButtonType={'submit'}
            secondButtonType={'button'}
          ></ButtonBlock> */}
        </TextWrap>
      </form>
    </Wrap>
  );
}
