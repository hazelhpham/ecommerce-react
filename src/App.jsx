import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Product from "./Pages/Product";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product-list" component={ProductList} />
        <Route path="/product" component={Product} />
        <Route path="/register" component={Register} />
        <Route path="/log-in" component={Login} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
};

export default App;
