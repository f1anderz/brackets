export enum BkIconSizes {
  xs = 'xs',
  s = 's',
  m = 'm',
  l = 'l',
  xl = 'xl',
}

export enum BkIconNames {
  'chevron-up' = 'chevron-up',
  'chevron-down' = 'chevron-down',
  'chevron-left' = 'chevron-left',
  'chevron-right' = 'chevron-right',
}

export interface BkIconProps {
  name: BkIconNames;
  size: BkIconSizes;
}
