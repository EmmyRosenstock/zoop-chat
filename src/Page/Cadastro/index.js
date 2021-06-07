import "./cadastro.css";
import { FaUserTie, FaBlackTie } from "react-icons/fa";
import { AiOutlineMail,AiOutlineEye } from "react-icons/ai";
import { GiHouseKeys } from "react-icons/gi";
import { BsPhone } from "react-icons/bs";
import React, { useState } from 'react';
    import ReactFlagsSelect from 'react-flags-select';

const Cadastro=()=>{
    const [selected, setSelected] = useState('');

    return(
        <div id="page-home">
        <div className= "content">
           <div className="container">
           <div class="login-page">
 <div class="form">
     <h1>Cadastro Zoopchat </h1>
    <form class="register-form">
       <div className="nome">
           <label>Seu nome:</label>
           <FaUserTie/>
       <input class="form-control" type="text" name="name_user" value=""/>
       </div>
       <div className='cargo'>
           <label>Seu Cargo</label>
           <FaBlackTie/>
           <select className='cargoselect'>
               <option value>Selecione o seu cargo</option>
               <option value="coordenador">Coordenador</option>
               <option value="diretor">Diretor</option>
               <option value="consultor">Consultor</option> 
               <option value="dono">Dono</option> 
               <option value="estagiario">Estagiário</option> 
               <option value="gerente">Gerente</option>
               <option value="gestor">Gestor</option>  
               <option value="supervisor">Supervisor</option>
               <option value="outros">Outros</option>    
           </select>
       </div>
       <div className="email">
           <label>Seu email:</label>
           <AiOutlineMail/>
       <input class="form-control" type="text" name="email" value=""/>
       </div>
       <div className="senha">
           <label>Sua senha:</label>
           <GiHouseKeys/>
       <input class="form-control" type="password" name="passoword"  value=""/>
       <AiOutlineEye/>
       </div>
       <div className="telefone">
           <label>Seu telefone:</label>
           <BsPhone/>
           <ReactFlagsSelect
        selected={selected}
        onSelect={code => setSelected(code)}
      />
       <input class="form-control" type="text" name="email" value=""/>
       </div>
     <button>create</button>
     
   </form>
  </div>
</div>
               
        </div>
       </div>
       </div>
       )

    
}
export default Cadastro;