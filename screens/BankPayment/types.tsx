interface BankPaymentViewProps {
  viewBankSelect: boolean;
  openBankSelect: () => void;
  onBankSelectClose: () => void;
  redirect: () => void;
}

interface BankDetail {
  title: string;
  value: string;
}
