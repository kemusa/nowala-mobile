interface DateSelectModal {
  isOpen: boolean;
  date: Date;
  onClose: () => void;
  onDateSelect: (event: any, date?: Date | undefined) => void;
  closeSelect: () => void;
}
