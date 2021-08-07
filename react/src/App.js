import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Page from './Components/General/general';
import './App.css';
class App extends React.Component{
  render() {
  return (
    <BrowserRouter>
      <div>
          <Switch>
            <Route path="/" component={Page} exact/>
         </Switch>
      </div>
    </BrowserRouter>
  );
}
}

export default App;
