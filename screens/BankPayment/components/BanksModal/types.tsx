interface BankModalContainerProps {
  isOpen: boolean;
  onClose: () => void;
}
interface BankModalViewProps {
  isOpen: boolean;
  onClose: () => void;
}

interface BankButton {
  bankName: string;
  iconPath: string;
  appUrl: string;
}
