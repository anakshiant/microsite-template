import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Layout from './components/Layout';
import LazyLoadContainer from './components/Common/LazyLoadContainer';
import { MbrSearchProvider } from './contexts/MbrSearchContext';

const Service = React.lazy(() => import('./pages/Service/index'));
const MbrSearch = React.lazy(() => import('./pages/MbrSearch/index'));
const MbrFiling = React.lazy(() => import('./pages/MbrFiling/index'));

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/mbrfile">
            <LazyLoadContainer>
              <MbrFiling />
            </LazyLoadContainer>
          </Route>
          <Route path="/mbrsearch">
            <LazyLoadContainer>
              <MbrSearchProvider>
                <MbrSearch />
              </MbrSearchProvider>
            </LazyLoadContainer>
          </Route>
          <Route path="/purchase">
            <LazyLoadContainer>
              <Service />
            </LazyLoadContainer>
          </Route>
          <Route path="/">
            <LazyLoadContainer>
              <Service />
            </LazyLoadContainer>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
