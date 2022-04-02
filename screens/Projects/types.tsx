// interface ProjectData {
//   key: string;
//   title: string;
//   image: string;
//   color: string;
//   stats: ProjectStatsData | null;
// }

interface Project {
  key: string;
  title?: string;
  description?: string;
  image?: string;
  design?: JSX.Element;
  color: string;
  stats: ProjectStats | null;
  clickable: boolean;
}

interface ProjectData {
  asset: string;
  costToUser: number;
  currency: string;
  unitCost: number;
}

// interface ProjectStatsData {
//   price: {
//     title: string;
//     value: string;
//     icon: 'price';
//   };
//   return: {
//     title: string;
//     value: string;
//     icon: 'return';
//   };
//   time: {
//     title: string;
//     value: string;
//     icon: 'time';
//   };
//   country: {
//     title: string;
//     value: string;
//     icon: 'country';
//   };
// }

interface ProjectStats {
  price: {
    title: string;
    value: string;
    icon: 'price';
  };
  return: {
    title: string;
    value: string;
    icon: 'return';
  };
  time: {
    title: string;
    value: string;
    icon: 'time';
  };
  country: {
    title: string;
    value: string;
    icon: 'country';
  };
}

interface ProjectContext {
  goToProjectDetails: (projectData: Project) => void;
  goToSignUp: () => void;
  goToLogin: () => void;
  userId: string;
  data: Project[];
}
