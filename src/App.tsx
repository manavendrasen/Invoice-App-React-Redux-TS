import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// views
import { Dashboard, InvoiceForm } from './views';

const App = () => {
  return <Router><Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/new" exact component={InvoiceForm} />
  </Switch></Router>
}

export default App;
