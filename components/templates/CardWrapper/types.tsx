interface CardProps {
  children: React.ReactNode;
  title?: string;
  type: 'primary' | 'secondary' | 'none';
  cta?: () => void;
  ctaText?: string;
  ctaIcon?: JSX.Element;
}
