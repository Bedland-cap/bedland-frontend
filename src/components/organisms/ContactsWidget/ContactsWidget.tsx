import MessageItem from 'components/molecules/MessageItem/MessageItem';
import Widget from 'components/templates/Widget/Widget';
import Avatar from 'assets/img/Avatar.svg';
import { useNavigate } from 'react-router-dom';
import routes from 'App/routing/routes';

type Contacts = { name: string; image: string };

const contacts: Contacts[] = [
  { name: 'Joe Livingstone', image: Avatar },
  { name: 'Hiram Bosh', image: Avatar },
  { name: 'Hannah Comberstone', image: Avatar },
  { name: 'Thomas Blake', image: Avatar },
  { name: 'Jessie Burton', image: Avatar },
  { name: 'Jack Sparrow', image: Avatar },
];

const ContactsWidget = () => {
  const navigate = useNavigate();

  return (
    <Widget
      variant='contacts'
      mode='light'
      title='Recent contacts'
      isArrowButton
      onClick={() => navigate(routes.messages)}
    >
      {contacts.map((contact) => (
        <MessageItem name={contact.name} image={contact.image} active key={contact.name} />
      ))}
    </Widget>
  );
};

export default ContactsWidget;
