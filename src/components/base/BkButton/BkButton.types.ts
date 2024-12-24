export enum BkButtonTypes {
  primary = 'primary',
  outline = 'outline',
}
export interface BkButtonProps {
  content?: string;
  contentKey?: string;
  type: BkButtonTypes;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  href?: string;
}
