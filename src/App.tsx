import React from 'react';
import './App.css';
import Offers from './components/Offers';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider, observer } from 'mobx-react';
import OfferStore from './stores/OfferStore';
import Main from './components/Main';

const offerStore = new OfferStore();

const App: React.FC = () => {
  return (
    <div>
      <header>
      </header>
      <main>
        <Router>
          <div>
            <Provider offerStore={offerStore}>
              <Main />
            </Provider>
          </div>
        </Router>
      </main>
    </div>
  );
}

export default App;
