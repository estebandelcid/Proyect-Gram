import React from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Button, Form, Input, Title, LogoPets, Text, Error } from './styles';
import { MdPets } from 'react-icons/md';

export const UseForm = ({ onSubmit, title, text, disabled, error, }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  const enterKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      <LogoPets>
        <MdPets size="42px" />
      </LogoPets>
      <Title>{title}</Title>
      <ul>
        <Text>{text}</Text>
      </ul>
      <Form disabled={disabled} onSubmit={handleSubmit} onKeyDown={ enterKey }>
        <Input disabled={disabled} placeholder="Email" {...email} />
        <Input
          disabled={disabled}
          placeholder="Password"
          type="password"
          {...password}
        />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};
