interface ProjectDetails {}

interface ProjectDetailsViewType {}

interface ProjectDetailsContext {
  project: Project;
  getStatIcon: (stat: string) => JSX.Element;
}
