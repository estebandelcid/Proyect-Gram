import React, {useContext} from 'react';
import { UseForm } from '../components/UserForm';
import { Context } from '../Context';
import { useRegisterMutation } from '../hooks/useRegisterMutation';
import {useLoginMutation} from '../hooks/useLonginMutation';

// export const NotRegisteredUser = () => {
//   const { activateAuth } = useContext(Context);
//   const { registerMutation, loading, error } = useRegisterMutation();
//   const { loginMutation, loading:loadingLogin, error:errorLogin } = useLoginMutation();
//   return (
//     <Context.Consumer>
//       {({ activateAuth }) => {

//         const onSubmit = ({ email, password }) => {
//           const input = { email, password };
//           const variables = { input };
//           registerMutation({ variables }).then(({data}) => {
//             const { signup } = data
//             activateAuth(signup);
//           });
//         }
        
//           const onSubmitLogin = ({ email, password}) => {
//             const input = { email, password };
//             const variables = { input };
//             loginMutation({ variables }).then(({data}) => {
//               const { login } = data
//               activateAuth(login)});
//           }
        
//         const errorMsg = error && 'User already exists or there is a problem.'
//         const errorMsgLogin = errorLogin && "Something went wrong, user or password are incorrect.";
//         return (
//           <>
//             <UseForm
//               disabled={loading}
//               title="Sign in"
//               onSubmit={onSubmit}
//               text="Join us and enjoy the world of pets "
//               error={errorMsg}
//             />

//             <UseForm
//               title="Log in"
//               disabled={loadingLogin}
//               onSubmit={onSubmitLogin}
//               text="If you already have an account please Log in and discover the incredible world of pets"
//               error={errorMsgLogin}
//             />
//           </>
//         );
//       }}
//     </Context.Consumer>
//   );
// };

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context);
  const { registerMutation, loading, error } = useRegisterMutation();
  const {
    loginMutation,
    loading: loadingLogin,
    error: errorLogin,
  } = useLoginMutation();

  const onSubmit = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    registerMutation({ variables }).then(({ data }) => {
      const { signup } = data;
      activateAuth(signup);
    });
  };

  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    loginMutation({ variables }).then(({ data }) => {
      const { login } = data;
      activateAuth(login);
    });
  };

  const errorMsg = error && "User already exists or there is a problem.";
  const errorMsgLogin = errorLogin && "Something went wrong, user or password are incorrect.";

  return (
    <>
      <UseForm
        disabled={loading}
        title="Sign in"
        onSubmit={onSubmit}
        text="Join us and enjoy the world of pets "
        error={errorMsg}
      />

      <UseForm
        title="Log in"
        disabled={loadingLogin}
        onSubmit={onSubmitLogin}
        text="If you already have an account please Log in and discover the incredible world of pets"
        error={errorMsgLogin}
      />
    </>
  );
}
