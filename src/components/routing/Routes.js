import React from 'react';
import { Route, Switch } from 'react-router-dom';



import Overview from '../layout/About.js';
import ApplyInfo from '../layout/ApplyInfo.js';
import StudentInfo from '../layout/StudentInfo.js';

const Routes = () => {
  return (


      <Switch>
 


	<Route exact={true} path='/about' render={(props) => <Overview />} />
	<Route exact={true} path='/admissions' render={(props) => <ApplyInfo />} />
	<Route exact={true} path='/current-students' render={(props) => <StudentInfo />} /> />
        

      </Switch>

  );
};

export default Routes;