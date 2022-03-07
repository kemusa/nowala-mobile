interface NewOrderModalContainerProps {
  title: string;
  projectAlias: string;
  impact_metric: string;
}
interface NewOrdersModalViewProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  orderCounter: NumberSelect;
  orderConfirmBtn: PrimaryButtonProps;
  orderConfirmed: boolean;
}

interface NewOrder {
  uid: string;
  units: number;
  projectId: string;
  alias: string;
  email: string;
}

interface NewOrdersContext {}
