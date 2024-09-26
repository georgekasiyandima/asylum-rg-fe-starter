import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react'; // Import useAuth0 hook

import 'antd/dist/antd.less';
import { NotFoundPage } from './components/pages/NotFound';
import { LandingPage } from './components/pages/Landing';
import { FooterContent, SubFooter } from './components/Layout/Footer';
import { HeaderContent } from './components/Layout/Header';

import { Layout } from 'antd';
import GraphsContainer from './components/pages/DataVisualizations/GraphsContainer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './state/reducers';
import { colors } from './styles/data_vis_colors';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/common/Profile';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const { primary_accent_color } = colors;

const store = configureStore({ reducer: reducer });

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <App />
        </Auth0Provider>
      </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById('root')
);

export function App() {
  const { Footer, Header } = Layout;
  const { isAuthenticated } = useAuth0();

  return (
    <Layout>
      <Header
        style={{
          height: '10vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between', 
          padding: '0 20px',
          backgroundColor: primary_accent_color,
        }}
      >
        {/* Left Side: Home and Graphs links */}
        <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          <HeaderContent /> {/* Renders Home and Graphs links */}
        </div>

        {/* Right Side: Sign In/Sign Out Button with added spacing */}
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
      </Header>

      <Profile />

      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/graphs" component={GraphsContainer} />
        <Route component={NotFoundPage} />
      </Switch>

      <Footer
        style={{
          backgroundColor: primary_accent_color,
          color: '#E2F0F7',
        }}
      >
        <FooterContent />
      </Footer>

      <Footer
        style={{
          backgroundColor: primary_accent_color,
          padding: 0,
        }}
      >
        <SubFooter />
      </Footer>
    </Layout>
  );
}





