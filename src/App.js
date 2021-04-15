import { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import HomePage from './routes/HomePage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Porfolio from './routes/Portfolio';
import ManageDetail from './routes/ManageDetail';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/portfolio">
          <Porfolio />
        </Route>
        <Route exact path="/portfolio/manage">
          <ManageDetail />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
