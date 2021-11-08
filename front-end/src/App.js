import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerDetail from './pages/CustomerDetails';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import EditCustomer from './pages/EditCustomer';

function App(){
  return(
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/"> <CustomerDetail /> </Route>
          <Route path="/EditCustomer/customers/:_id"> <EditCustomer/> </Route>
        </Switch>
       </div>
    </Router> 
  )
}


export default App;
