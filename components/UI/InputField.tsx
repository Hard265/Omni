import { TextInput, TextInputProps } from 'react-native';

interface InputFieldProps extends TextInputProps {}

export function InputField(props: InputFieldProps) {
  return (
    <TextInput {...props} />
  );
};
