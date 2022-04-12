interface BankPaymentViewProps {
  viewBankSelect: boolean;
  paymentRef: string;
  price: number;
  openBankSelect: () => void;
  onBankSelectClose: () => void;
  redirect: () => void;
}

interface BankDetail {
  title: string;
  value: string;
}
