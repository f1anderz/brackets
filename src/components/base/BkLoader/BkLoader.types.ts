export enum BkLoaderSizes {
  small = 's',
  medium = 'm',
  large = 'l',
}

export enum BkLoaderVariants {
  light = 'light',
  dark = 'dark',
}

export interface BkLoaderProps {
  size: BkLoaderSizes;
  variant: BkLoaderVariants;
}
