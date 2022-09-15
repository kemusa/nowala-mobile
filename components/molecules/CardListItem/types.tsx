interface CardListItemProps {
  title: string;
  subtitle: string;
  value: string | number;
  subvalue: string | number | JSX.Element;
  icon: JSX.Element;
  onPress: () => void;
}
