interface UserAccountProps {}

interface UserAccountCtx {
  email: string;
  initials: string;
  deleteAccount: () => void;
  goToManageAccount: () => void;
}
