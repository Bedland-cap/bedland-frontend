import renderer from 'react-test-renderer';
import { useForm } from 'react-hook-form';
import ThemeProvider from 'theme/ThemeContext';
import InputWithLabel from './InputWithLabel';

const SnapshotInput = () => {
  const { register } = useForm();
  return (
    <ThemeProvider>
      <form action=''>
        <InputWithLabel
          label='login'
          input='login'
          type='text'
          placeholder='login'
          register={register}
        />
      </form>
    </ThemeProvider>
  );
};

describe('Input with Label', () => {
  it('renders correctly', () => {
    const snapshot = renderer.create(<SnapshotInput />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
