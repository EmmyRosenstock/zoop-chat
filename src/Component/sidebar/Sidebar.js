import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { FiUsers} from "react-icons/fi";
import { BsFillPeopleFill,BsChatDotsFill  } from "react-icons/bs";
import './sidebar.css';

const Sidebar = () => {
  return (
    <body>
<strong>ZoopChat</strong>
<div id="mySidenav" class="sidenav">
  <a href="/" id="Home">Home</a>
  <a href="#" id="Atendentes">Atendentes</a>
  <a href="#" id="Chat">Chat</a>
  <a href="#" id="Suporte">Suporte</a>
</div>


   
</body>
  );
};

export default Sidebar;