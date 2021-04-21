// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as history } from 'history';

// import '../assets/stylesheets/application.scss';

import App from './containers/app';
import CreateYourTeam from './containers/create_your_team';

import teamReducer from './reducers/team_reducer.js';
import apiReducer from './reducers/api_reducer.js';

const initialState = {
  myTeams: [[['Barcelona', 'Barcelona Squad'],
            ['Real Madrid', 'Real Madrid Squad'],
            ['Milan', 'Milan Squad'],
            ['Liverpool', 'Liverpool Squad'],
            ['Bayer Munich', 'Bayer Munich Squad'],
            ['Lazio', 'Lazio Squad']],
            [['Inter Milan', 31.9],
              ['APOEL Nicosia', 31.7],
              ['AC Milan', 31.6],
              ['Besiktas JK', 31.4],
              ['Olympiacos Piraeus', 31.3],
              ['Zalgiris Vilnius', 21.1],
              ['Arsenal FC', 21.6],
              ['Ajax Amsterdam', 22],
              ['FC Nantes', 22.1],
              ['CSKA Moscow', 22.5]]]
};

const reducers = combineReducers({
  myTeams: teamReducer,
  api: apiReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <div className="view-container">
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/new" exact component={CreateYourTeam} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
