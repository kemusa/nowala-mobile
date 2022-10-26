interface ProjectDetails {}

interface ProjectDetailsViewType {}

interface ProjectDetailsContext {
  project: Project;
  projectId: string;
  getStatIcon: (stat: string) => JSX.Element;
  ctaOnPress: () => void;
  closeNewOrderModal: () => void;
  canViewOrderModal: boolean;
  onOrderSent: OrderCallback;
  user: NowalaUserProfile;
  isUK: boolean;
}
