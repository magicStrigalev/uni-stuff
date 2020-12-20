import React from 'react';

import FirstWeek from '../../pages/FirstWeek';
import SecondWeek from '../../pages/SecondWeek';
import WelcomePage from '../../pages/WelcomePage'


const Router: React.FC = () => {
  return (
    <>
    <WelcomePage />
     <FirstWeek />
     <SecondWeek />
    </>
  );
};

export default Router;
