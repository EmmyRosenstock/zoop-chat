import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './Page/Home';
import Acount from './Page/acount';
import Cadastro from './Page/Cadastro';



const Routes = ()=>{
    return(
        <BrowserRouter>
        <Route component={Home} path= '/' exact />
        <Route component={Acount} path='/acount'/>
        <Route component={Cadastro} path='/cadastro'/>

         </BrowserRouter>
    )
}
export default Routes; 