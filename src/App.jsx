import './App.css';

import { HashRouter, Routes, Route } from 'react-router-dom';

import LayoutPage from "./pages/Layout/Page";
import HomePage from "./pages/Home/Page";
import RegionPage from "./pages/Region/Page";
import SignInPage from "./pages/auth/SignIn/Page";
import SignUpPage from "./pages/auth/SignUp/Page";
import NotFoundPage from "./pages/NotFound/Page";

import { Home, Region, SignIn, SignUp, NotFound } from "./routes";


function App() {

  return (
    <HashRouter basename=''>
      <Routes>
        <Route path={Home.pathname} element={<LayoutPage/>}>
          <Route index element={<HomePage/>}/>
          <Route path={Region.pathname} element={<RegionPage/>}/>
          <Route path={SignIn.pathname} element={<SignInPage/>}/>
          <Route path={SignUp.pathname} element={<SignUpPage/>}/>
          <Route path={NotFound.pathname} element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}


export default App;