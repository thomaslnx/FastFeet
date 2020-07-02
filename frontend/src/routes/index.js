import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Packages from '~/pages/PackageManagment';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/packagesmanagment" component={Packages} isPrivate />
    </Switch>
  );
}
