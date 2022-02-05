interface ProgressModalViewProps {
  progress: StatusItem[];
  isOpen: boolean;
  onClose: () => void;
}

interface StatusItem {
  title: string;
  complete: boolean;
}

interface StatusText {
  registered: string;
  paid: string;
  transferred: string;
  installed: string;
  collectionStarted: string;
}
