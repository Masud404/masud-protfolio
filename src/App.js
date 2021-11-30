import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css'
import Blogs from './Components/Blogs/Blogs';
import Details from './Components/Details/Details';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/detail">
            <Details></Details>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
