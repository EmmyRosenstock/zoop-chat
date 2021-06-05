
import {useState} from 'react';
import Sidebar from '../../Component/sidebar/Sidebar';
import './acount.css';
import Bell from '../../assets/bell.svg';
import { FaUserCircle } from "react-icons/fa";
const  Acount =()=>{
    return(
        <div id="page-home">
        <div className="content">
         <header>
          <img src={Bell}/>
          <h1>Usuario</h1>
          <h2>email@email.com</h2>
          <FaUserCircle/>
         </header>
         
        <div className="grid">
        <div class="item">
      <h1>Minhas Operações</h1>
      
      </div>
      <div class="item2">
      <h1>Conversas Hoje</h1>
      
      </div>
      <div class="item3">
      <h1>Meus Atendentes</h1>
      
      </div>
        </div>

        </div>

        <Sidebar/>
    </div>
       
      
 
    )
}
export default Acount;