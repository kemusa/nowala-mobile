interface NewOrderModalContainerProps {
  title: string;
  pageRef: string;
  isOpen: boolean;
  onClose: () => void;
  onOrderSent: OrderCallback;
  userId: string;
  projectId: string;
  email: string;
  firstName: string;
}
interface NewOrdersModalViewProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  orderCounter: NumberSelect;
  orderConfirmBtn: PrimaryButtonProps;
  orderConfirmed: boolean;
  userTotalPrice: number;
  projectTotalPrice: string;
  projectCurrency: string;
}

type OrderCallback = (price: number, orderRef: string) => void;

interface NewOrdersContext {}
