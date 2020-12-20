import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import FirstWeek from '../../pages/FirstWeek';
import SecondWeek from '../../pages/SecondWeek';
import WelcomePage from '../../pages/WelcomePage';

const Router: React.FC = () => {
  return (
    <>
      <WelcomePage />
      <FirstWeek />
      <SecondWeek />
      <Route path='*'>
        <Redirect to='/' />
      </Route>
    </>
  );
};

export default Router;
