export interface TypographyProps {
  type: 'Heading' | 'Text' | 'Caption' | 'Form' | 'Link';
  fontFamily: 'Bold' | 'Regular';
  size:
    | 'H1'
    | 'H2'
    | 'H3'
    | 'H4'
    | 'H5'
    | 'H6'
    | 'Large'
    | 'Medium'
    | 'Normal'
    | 'Line'
    | 'Small'
    | 'Fill';
  color:
    | 'Blue'
    | 'Red'
    | 'Yellow'
    | 'Green'
    | 'Purple'
    | 'Dark'
    | 'Grey'
    | 'Light'
    | 'White';
  text: any;
  onPress?: () => void;
}

export interface ButtonProps {
  title: string;
  size: 'Large' | 'Small';
  type: 'Primary' | 'Secondary';
  icon?: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

export interface ButtonCheckProps {
  title: string;
  icon?: string;
}

export interface InputProps {
  placeholder: string;
  type?: 'Text' | 'Email' | 'Password' | 'Account' | 'Phone' | 'Search';
  errorText?: string;
}

export interface SearchInputProps extends InputProps {
  isActive: boolean;
}
