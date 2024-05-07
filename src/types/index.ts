export interface HeadingProps {
    text: string;
    color: 'Blue' | 'Red' | 'Yellow' | 'Green' | 'Purple' | 'Dark' | 'Grey' | 'Light';
    size: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';
}

export interface BodyTextProps {
    text: string;
    color: 'Blue' | 'Red' | 'Yellow' | 'Green' | 'Purple' | 'Dark' | 'Grey' | 'Light';
    size: 'Large' | 'Medium' | 'Normal';
    family: 'Bold' | 'Regular';
}

export interface CaptionTextProps {
    text: string;
    color: 'Blue' | 'Red' | 'Yellow' | 'Green' | 'Purple' | 'Dark' | 'Grey' | 'Light';
    size: 'Large' | 'Normal';
    family: 'Bold' | 'Regular';
}

export interface FormTextProps {
    text: string;
    color: 'Blue' | 'Red' | 'Yellow' | 'Green' | 'Purple' | 'Dark' | 'Grey' | 'Light';
    family: 'Normal' | 'Fill';
}

export interface LinkTextProps {
    text: string;
    color: 'Blue' | 'Red' | 'Yellow' | 'Green' | 'Purple' | 'Dark' | 'Grey' | 'Light';
    size: 'Normal' | 'Small';
    onPress: void;
}

export interface ButtonProps {
    text: string;
    onPress?: () => void;
    onLongPress?: () => void;
}

export interface SocialButtonProps extends ButtonProps {
    icon: 'Facebook' | 'Google';
}

export interface LabelButtonProps extends ButtonProps {
    isActive: boolean;
    icon: boolean;
}

export interface InputProps {
    placeholder: string;
    error?: boolean;
}

export interface AuthInputProps extends InputProps {
    icon: 'Email' | 'Password' | 'User';
    security: boolean;
}

export interface TextAreaFormProps extends InputProps {}

export interface SelectFormProps {
    genderChoose: boolean;
}
