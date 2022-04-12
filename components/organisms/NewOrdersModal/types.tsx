interface NewOrderModalContainerProps {
  title: string;
  page_ref: string;
  isOpen: boolean;
  onClose: () => void;
  onOrderSent: OrderCallback;
  userId: string;
  projectId: string;
  email: string;
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

type OrderCallback = (price: number, paymentRef: string) => void;

interface NewOrdersContext {}
