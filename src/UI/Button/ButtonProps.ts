type variant = 'default' | 'danger' | 'primary' | 'subtle' | 'warning' | 'discovery';

export interface BaseButton {
  id: string;
  variant: variant;
  autofocus?: boolean;
  disabled?: boolean;
  loading?: boolean;
  selected?: boolean;
  onClick?(): unknown;
  onFocus?(): void;
  onBlur?(): void;
}
