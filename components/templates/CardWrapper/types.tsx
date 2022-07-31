interface CardProps {
  title?: string;
  type: 'primary' | 'secondary' | 'none';
  cta?: () => void;
  ctaText?: string;
  ctaIcon?: JSX.Element;
}
