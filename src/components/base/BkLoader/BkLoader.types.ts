export enum BkLoaderSizes {
  small = 's',
  medium = 'm',
  large = 'l',
}

export enum BkLoaderVariants {
  inherit = 'inherit',
  light = 'light',
  dark = 'dark',
}

export interface BkLoaderProps {
  size: BkLoaderSizes;
  variant: BkLoaderVariants;
}
