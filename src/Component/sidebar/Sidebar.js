import React from 'react';
import Server from '../../assets/server.svg';
import User from '../../assets/user.svg';
import Users from '../../assets/users.svg';
import Twitch from '../../assets/twitch.svg';
import Message from '../../assets/message-square.svg';
import Logout from '../../assets/log-out.svg';
import Clipboard from '../../assets/clipboard.svg'
import "./sidebar.css"
const Sidebar = () => {
  return (
    
  <body>

<div class="sidebar">
<div className="dashboard">
  <img src={Server} alt='server'/>
  <a href="/acount">Dashboard</a>
  </div>
<div className="batepapo">
  <img src={Message} alt="bate-papo"/>
  <a href="/bate-papo">Bate-papo</a></div>
<div className="atendentes">
  <img src={User}/>
  <a href="/atendentes">Atendentes</a></div>
<div className="leaders">
  <img src={Users}/>
  <a href="#">Leaders</a></div>
<div className="relatorios">
  <img src={Clipboard}/>
  <a href="#">Relatorios</a></div>
<div className="chatbot">
  <img src={Twitch}/>
  <a href="#">Chatbot</a></div>
  <div className="logout">
    <img src={Logout}/>
    <a href='#'>Sair</a>

  </div>

</div>

<div class="body-text">

</div>

</body>

  );
};

export default Sidebar;