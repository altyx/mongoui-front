import React, { Component} from 'react';
import { Route } from 'react-router-dom';

import Connect from '../Database/connection/connect';
import Logout from '../Database/connection/logout';
import Collections from '../Database/collections/collections';
import Data from '../Database/data/data';

class routes extends Component {
    render() {
      return (
        <div>
            <Route path='/connect' exact component={Connect} />
            <Route path='/collections' exact component={Collections} />
            <Route path='/collection/:name' exact component={Data} />
        </div>
      );
    }
}

export default routes;