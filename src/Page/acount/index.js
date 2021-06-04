import {useState} from 'react';
import Sidebar from '../../Component/sidebar/Sidebar';
import './acount.css';
import { FiSearch} from 'react-icons/fi'
import { GiSpeedometer } from "react-icons/gi";
import { CgCircleci } from "react-icons/cg";
import { BsChatFill,BsPeopleFill } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaRocketchat } from "react-icons/fa";
const  Acount =()=>{
    return(
<div className="acount">
        <strong>ZoopChat</strong>
        <div className='search'>
  <form action="/" method='get'>
  <FiSearch type="submit" size={23} />
 <input> 
 </input>
  </form>
  </div>

 <div class="grid">
  <div class="item">
      <h1>Minhas Operações</h1>
      <GiSpeedometer  size={100}/>
      <div className="icon">
      <div className='circle'>
          <h5>0</h5>
      <CgCircleci  size={20}/>
      </div>
      <div className="chatIcon"></div>
      <BsChatFill size={20}/>
      <h5>20</h5>
      </div>
      <div className='check'>
          
          <AiFillCheckCircle size={20}/>
          <h5>2</h5>
           </div>
     </div>
  <div class="item2"><h1>Conversas hoje</h1>
  <FaRocketchat size={100}/>
  </div>
  <div class="item3">
      <h1>Meus Atendentes</h1>
      <BsPeopleFill size={100}/>
   
  </div>
</div>
    </div>
    )
}
export default Acount;