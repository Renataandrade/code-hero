import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { 
  ListCharacter,
  DetailCharacter
} from '../pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/character' component={ListCharacter} />
        <Route exact path='/character/:id' component={DetailCharacter} />
        
        <Redirect from='/' to='/character' />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;