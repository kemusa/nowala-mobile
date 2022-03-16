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

interface NewOrdersContext {}
