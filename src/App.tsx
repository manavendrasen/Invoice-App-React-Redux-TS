import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// views
import { Dashboard, InvoiceForm, InvoiceDetails } from './views';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/new" exact component={InvoiceForm} />
        <Route path="/invoice/:id" exact component={InvoiceDetails} />
      </Switch>
    </Router>
  )
}

export default App;
