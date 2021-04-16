import { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import HomePage from './routes/HomePage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Porfolio from './routes/Portfolio';
import ManageDetail from './routes/ManageDetail';
import BookmarkDetail from './routes/BookmarkDetail';
import InsureDetail from './routes/InsureDetail';
import FyloDetail from './routes/FyloDetail';
import ContactMePage from './routes/ContactMePage';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <>
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
        <Route exact path="/portfolio/bookmark">
          <BookmarkDetail />
        </Route>
        <Route exact path="/portfolio/insure">
          <InsureDetail />
        </Route>
        <Route exact path="/portfolio/fylo">
          <FyloDetail />
        </Route>
        <Route exact path="/contact">
          <ContactMePage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
