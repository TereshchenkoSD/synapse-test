import RegisterForm from '../components/Forms/RegisterForm';
import Title from './components/Title';
import FormContainer from './components/Forms/FormContainer';

const RegisterPage = () => {
  return (
    <FormContainer>
      <Title text={'Sign Up'} />
      <RegisterForm />
    </FormContainer>
  );
};

export default RegisterPage;
