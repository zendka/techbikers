import React, { memo } from 'react';
import { Form, Input, Button, Message } from 'semantic-ui-react';

import useFormInput from 'library/hooks/useInputForm';

export default memo(function FormWithEmailAndPassword(props) {
  const email = useFormInput('');
  const password = useFormInput('');

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({ email: email.value, password: password.value });
  };

  return (
    <Form onSubmit={handleSubmit} style={props.style}>
      <Form.Field>
        <label>Email</label>
        <Input type="email" name="email" {...email} />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <Input type="password" name="password" {...password} />
      </Form.Field>
      {props.error && <Message negative>{props.error}</Message>}
      <Button type="submit">{props.text || 'Submit'}</Button>
    </Form>
  );
});
