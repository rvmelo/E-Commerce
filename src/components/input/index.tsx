import React, { InputHTMLAttributes, memo } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { Container, Error } from './styles';
import useInput from './useInput';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  containerStyle?: object;
}

const Input: React.FC<InputProps> = ({
  name,
  containerStyle = {},
  icon: Icon,
  ...rest
}) => {
  const {
    defaultValue,
    error,
    handleInputBlur,
    handleInputFocus,
    isFilled,
    isFocused,
    inputRef,
  } = useInput({ name });

  return (
    <Container
      style={containerStyle}
      isError={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
    >
      {Icon && <Icon />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default memo(Input);
