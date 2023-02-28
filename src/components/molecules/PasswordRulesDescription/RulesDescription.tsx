import { RulesDescriptionContainer, OrderedRulesDesc } from './RulesDescription.styled';

const RulesDescription = () => (
  <RulesDescriptionContainer>
    <span> Remember, your password must include:</span>{' '}
    <OrderedRulesDesc style={{ listStyleType: 'disc' }}>
      <li>8-24 characters</li>
      <li>At least one uppercase character</li>
      <li>At least one special character</li>
    </OrderedRulesDesc>
  </RulesDescriptionContainer>
);
export default RulesDescription;
