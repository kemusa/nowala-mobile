interface AccountPendingContext {
  goToProjects: () => void;
}

interface BankTransferContext {}

interface WaitListModalView {
  isOpen: boolean;
  onClose: () => void;
  signOut: () => void;
}
