interface NewOrderModalContainerProps {
  title: string;
  page_ref: string;
  isOpen: boolean;
  onClose: () => void;
  onOrderSent: () => void;
  userId: string;
  projectId: string;
  email: string;
  // userTotalPrice: number;
}
interface NewOrdersModalViewProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  orderCounter: NumberSelect;
  orderConfirmBtn: PrimaryButtonProps;
  orderConfirmed: boolean;
  userTotalPrice: number;
  projectUnitPrice: string;
  projectCurrency: string;
}

interface NewOrdersContext {}
