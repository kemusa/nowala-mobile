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
  userId?: string; //todo :remove optional;
  email?: string; //todo :remove optional;
  firstName?: string; //todo :remove optional;
}
