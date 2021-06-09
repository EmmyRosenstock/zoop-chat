
import {useState} from 'react';
import Sidebar from '../../Component/sidebar/Sidebar';
import './acount.css';
import Bell from '../../assets/bell.svg';
import { FaUserCircle } from "react-icons/fa";
import operacao from '../../assets/analytics_analysis_data_business_charts_document_report_icon_188743.png';
import convercas from '../../assets/_123031.png';
import atendentes from '../../assets/_123037.png'
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
      <img src={operacao} alt='operacao' />
      <h2>40</h2>
      </div>
      <div class="item2">
      <h1>Conversas Hoje</h1>
      <img src={convercas} />
      <h2>30</h2>
      
      </div>
      <div class="item3">
      <h1>Meus Atendentes</h1>
      <img src={atendentes} alt='operacao' />
      <h2>50</h2>
      </div>
        </div>

        </div>

        <Sidebar/>
    </div>
       
      
 
    )
}
export default Acount;