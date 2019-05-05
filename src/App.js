import React from 'react';
import './App.css';

import { HashRouter, Switch, Route } from "react-router-dom";
import SmartQuestionsList from './view/SmartQuestionsList';
import SmartCreateQuestion from './view/SmartCreateQuestion';
import SmartLogUser from './view/SmartLogUser';
import SmartFilterQuestions from './view/SmartFilterQuestions';


const App = () => (
  <div className="App">
    <HashRouter>
      <Switch>
        <Route exact={true} component={SmartLogUser} path="/" />
        <Route exact={true} component={SmartQuestionsList} path="/user-account" />
        <Route exact={true} component={SmartFilterQuestions} path="/filtered-questions" />
        <Route exact={true} component={SmartCreateQuestion} path="/create-question" />
      </Switch>
    </HashRouter>
  </div>
);


export default App;
