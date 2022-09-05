interface NewOrderModalContainerProps {
  title: string;
  pageRef: string;
  isOpen: boolean;
  // userId: string;
  projectId: string;
  // email: string;
  // firstName: string;
  user: NowalaUserProfile;
  onClose: () => void;
  onOrderSent: OrderCallback;
}
interface NewOrdersModalViewProps {
  title: string;
  isOpen: boolean;
  inputRef: any;
  input: string;
  units: number;
  onClose: () => void;
  handleValueChange: (value: string) => void;
  // orderCounter: NumberSelect;
  unitPrice: number;
  orderConfirmBtn: PrimaryButtonProps;
  orderConfirmed: boolean;
  // userTotalPrice: number;
  projectTotalPrice: string;
  projectCurrency: string;
}

type OrderCallback = (price: number, orderRef: string) => void;

interface NewOrdersContext {}
