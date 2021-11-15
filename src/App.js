import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { useEffect } from "react";

function App() {
  
  useEffect(()=>{
     document.title = "Reddit";
  })

  return (
      <div className="App">
        <header />
        <Switch>
          <Route path="/" component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
  );
}

export default App;
