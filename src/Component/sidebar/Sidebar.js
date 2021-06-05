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
  <h1>Dashboard</h1>
  </div>
<div className="batepapo">
  <img src={Message} alt="bate-papo"/>
  <h1>Bate-papo</h1></div>
<div className="atendentes">
  <img src={User}/>
  <h1>Atendentes</h1></div>
<div className="leaders">
  <img src={Users}/>
  <h1>Leaders</h1></div>
<div className="relatorios">
  <img src={Clipboard}/>
  <h1>Relatorios</h1></div>
<div className="chatbot">
  <img src={Twitch}/>
  <h1>Chatbot</h1></div>
</div>

<div class="body-text">

</div>

</body>

  );
};

export default Sidebar;