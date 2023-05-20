import React, {useContext, Suspense} from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { Logo } from './components/Logo';
import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route, Navigate, redirect } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { User } from './pages/User';
import { Context } from "./Context";

const Favs = React.lazy(()=> import('./pages/Favs'))
// Another option to use the module without a default export.
const Detail = React.lazy(() => import("./pages/Detail").then( module => ({ default: module.Detail})));
const NotFound = React.lazy(() => import('./pages/NotFound').then(module => ({default: module.NotFound})));
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser').then(module => ({default: module.NotRegisteredUser})));


export const App = () => {
  const {isAuth} = useContext(Context)

  return (
    <Suspense fallback={<div />}>
      <BrowserRouter>
        <GlobalStyles />
        <Logo />
        <Routes>
          <Route path='*' element={<NotFound/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/pet/:id" element={<Home />} />
          <Route path="/detail/:detailId" element={<Detail />} />
          <Route
            path="/favs"
            element={isAuth ? <Favs /> : <Navigate replace to={"/login"} />}
          />
          <Route
            path="/user"
            element={isAuth ? <User /> : <Navigate replace to={"/login"} />}
          />
          <Route
            path="/login"
            element={
              !isAuth ? <NotRegisteredUser /> : <Navigate replace to={"/"} />
            }
          />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </Suspense>
  );
};


// //Otra forma un poco más limpia con use state
// export const App = () => {
//   const [userLogged, setUserLogged] = React.useState(false)
//   return (
//     <div>
//       <BrowserRouter>
//         <GlobalStyles />
//         <Logo />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/pet/:id" element={<Home />} />
//           <Route path="/detail/:detailId" element={<Detail />} />
//           <Route
//             path="/favs"
//             element={userLogged ? <Favs /> : <NotRegisteredUser />}
//           />
//           <Route
//             path="/user"
//             element={userLogged ? <User /> : <NotRegisteredUser />}
//           />
//         </Routes>
//         <NavBar />
//       </BrowserRouter>
//     </div>
//   );
// };



// {
//   !isAuth && <Route element={<NotRegisteredUser path="/login" />} />;
// }
// {
//   !isAuth && <Route element={<redirect from="/favs" to="/login" />} />;
// }
// {
//   !isAuth && <Route element={<redirect from="/user" to="/login" />} />;
// }
