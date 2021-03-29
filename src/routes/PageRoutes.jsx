import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/home/Home';
import Video from '../pages/forms/Video';
import Speaker from '../pages/forms/Speaker';
import Topic from '../pages/forms/Topic';

const PageRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/video" component={Video} />
      <Route exact path="/speaker" component={Speaker} />
      <Route exact path="/topic" component={Topic} />
      <Route
        component={() => (
          <h1 className="mt-5" align="center">
            Page Not found
          </h1>
        )}
      ></Route>
    </Switch>
  </Router>
);

export default PageRoutes;
