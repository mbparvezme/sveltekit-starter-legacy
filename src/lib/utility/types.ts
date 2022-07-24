

export type ButtonTheme = 'brand' | 'brand-outline' | 'dark' | 'dark-outline' | 'light' | 'light-outline' | 'green' | 'green-outline' | 'red' | 'red-outline' | 'yellow' | 'yellow-outline' | 'alt' | 'alt-outline' | 'transparent' | 'transparent-brand' | false;

export type InputType = 'checkbox'| 'color'| 'date'| 'datetime-local'| 'email'| 'month'| 'number'| 'password'| 'radio'| 'range'| 'search'| 'tel'| 'text'| 'textarea' | 'time'| 'url' | 'week';
export type BackgroundType = 'transparent'| 'primary'| 'secondary'| 'tertiary'| 'brand'
export type OpacityType = 5 | 25 | 50 | 75 | 90 | 100

export type AnimateSpeed = 'slow' | 'normal' | 'fast' | false;
export type ShadowType = 'default' | 'sm' | 'lg' | 'xl';
export type RoundedType = "sm" | "md" | "lg" | "xl" | "full"
export type ShadowColor = 'secondary' | 'tertiary' | 'black' | 'black-5' | 'black-10' | 'black-50' | 'brand' | 'brand-5' | 'brand-10' | 'brand-50';

export type BackgroundVariant = {
  light: BackgroundType,
  focus: BackgroundType,
  hover: BackgroundType,
  dark: BackgroundType,
  darkFocus: BackgroundType,
  darkHover: BackgroundType,
}