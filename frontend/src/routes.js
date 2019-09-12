import React from 'react' 
import { BrowserRouter, Route} from 'react-router-dom';

import login from './pages/Login';
import main from './pages/Main';

export default function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={login}/>
            <Route path="/dev/:id" component={main}/>
        </BrowserRouter>
    );
}