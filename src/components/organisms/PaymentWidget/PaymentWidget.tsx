import routes from 'App/routing/routes';
import CustomChart from 'components/molecules/CustomChart/CustomChart';
import Widget from 'components/templates/Widget/Widget';
import { useAppSelector } from 'store/hooks';
import { useNavigate } from 'react-router-dom';
import { PaymentChartInputDataType } from '../../molecules/CustomChart/CustomChart.types';

const dataForPaymentChart: PaymentChartInputDataType = {
  'Paid on time': 75,
  'Awaiting payments': 21,
  'Payment overdue': 4,
};

const PaymentWidget = () => {
  const userRole = useAppSelector((state) => state.user.role);
  const navigate = useNavigate();

  return (
    <div>
      <Widget
        variant='payments'
        title='Payments'
        mode='light'
        onClick={() => navigate(routes.payments)}
        isArrowButton
        data-testid='paymentWidget'
      >
        <CustomChart
          data={dataForPaymentChart}
          variant={userRole === 'manager' ? 'paymentManager' : 'paymentResident'}
          title='February overview for all flats:'
          centerText='Total payments'
        />
      </Widget>
    </div>
  );
};

export default PaymentWidget;
