export interface BkSelectProps {
  options: object[];
  normalizer?: (option: object) => { id: number; label: string };
  placeholder?: string;
}
