import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateHospital from './pages/CreateHospital';
import HospitalListPage from './pages/HospitalListPage';
import HospitalDetailsPage from './pages/HospitalDetailsPage';
import EditHospitalPage from './pages/EditHospitalPage';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create-hospital" component={CreateHospital} />
        <Route path="/hospitals" exact component={HospitalListPage} />
        <Route path="/hospitals/:id" exact component={HospitalDetailsPage} />
        <Route path="/hospitals/edit/:id" component={EditHospitalPage} />
      </Switch>
    </Router>
  );
}

export default App;
