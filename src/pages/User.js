import React, {useContext, Fragment} from 'react';
import { SubmitButton } from '../components/SubmitButton';
import { Context } from '../Context';
import { Form, Button, Title } from "../components/UserForm/styles";
import { Layout } from '../components/Layout';


export const User = ({children, onClick}) => {
  const {removeAuth} = useContext(Context)
  return (
      <Layout title='User' showTitle>
        <Form>
          <Button onClick={removeAuth}>Log Out</Button>
        </Form>
      </Layout>
  );
  
}
  