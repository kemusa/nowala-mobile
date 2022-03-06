interface NewOrderModalContainerProps {
  title: string;
}
interface NewOrderModalViewProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  orderCounter: NumberSelect;
}
