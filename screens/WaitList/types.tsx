interface AccountPendingContext {
  goToProjects: () => void;
}

interface WaitListContext {
  menuModalOpen: boolean;
  closeMenuModal: () => void;
  signOut: () => void;
}

interface WaitListModalView {
  isOpen: boolean;
  onClose: () => void;
  signOut: () => void;
}
