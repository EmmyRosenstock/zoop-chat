import "./cadastro.css";
import { FaUserTie, FaBlackTie } from "react-icons/fa";
import { AiOutlineMail,AiOutlineEye } from "react-icons/ai";
import { GiHouseKeys } from "react-icons/gi";
import { BsPhone } from "react-icons/bs";
import React, { useState } from 'react';
    import ReactFlagsSelect from 'react-flags-select';

const Cadastro=()=>{
    

    return(
<div id="page-cad">
        <div className= "contentc">
           <div className="containerc">
           <div class="cadastro-page">
 <div className="form">
     <h1>Cadastro Zoopchat </h1>
    <form className='cadastro'>
        <div className='nome'>
            <FaUserTie size={20}/>
            <label>Seu nome:</label>
            <input class="form-control" type="text" name="nome" value=""/>
        </div>
        <div className='cargo'>
             <FaBlackTie size={20}/>
           <label>Seu Cargo:</label>
          
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
         <AiOutlineMail size={20} />
           <label>Seu email:</label>
         <input class="form-control" type="text" name="email" value=""/>
       </div>
       <div className="senha">
       <GiHouseKeys size={20}/>
           <label>Sua senha:</label>
           
       <input class="form-control" type="password" name="passoword"  value=""/>
       <AiOutlineEye/>
       </div>
       <div className="telefone">
       <BsPhone/>
           <label>Seu telefone:</label>
           
        
       <input class="form-control" type="text" name="email" value=""/>
       </div>

      <button className="btnCadastrar"> Cadastrar</button>

    </form>
  </div>
</div>
               
        </div>
       </div>
</div>
       )

    
}
export default Cadastro;