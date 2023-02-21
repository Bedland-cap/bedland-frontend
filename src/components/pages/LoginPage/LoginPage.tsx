import Image from 'components/atoms/Image/Image';
import DefaultImage from 'assets/Loginlogo.svg';
import LoginForm from 'components/organisms/LoginForm/LoginForm';
import SectionRow from 'components/templates/SectionRow/SectionRow';

const LoginPage = () => (
  <SectionRow>
    <Image src={DefaultImage} alt='' />
    <LoginForm />
  </SectionRow>
);
export default LoginPage;
