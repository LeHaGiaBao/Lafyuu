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
  text: string;
  onPress?: () => void;
}
