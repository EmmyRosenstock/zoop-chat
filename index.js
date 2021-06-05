import {useState} from 'react';
import Sidebar from '../../Component/sidebar/Sidebar';
import './acount.css';
import { FiSearch} from 'react-icons/fi'
import { GiSpeedometer } from "react-icons/gi";
import { CgCircleci } from "react-icons/cg";
import { BsChatFill,BsPeopleFill,BsChatDotsFill,BsGraphUp } from "react-icons/bs";
import { AiFillCheckCircle, AiOutlineApartment } from "react-icons/ai";
import { FaRocketchat } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
const  Acount =()=>{
    return(
        <div id="page-home">
        <div className="content">

         <header>
            <h1>ZoopChat</h1>
               
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

        
    </div>
       
      
 
    )
}
export default Acount;