import type { BkIconNames } from '@/components/base/BkIcon/BkIcon.types.ts';

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
  icon?: BkIconNames;
  href?: string;
}
