import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Signin from '~/pages/Signin';
import Packages from '~/pages/PackageManagment';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/packagesmanagment" component={Packages} isPrivate />
    </Switch>
  );
}
