import React, { useState } from 'react';
import { FaBars, FaUserAlt, FaRegChartBar, FaCommentAlt, FaDollarSign, FaCog } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const OuterContainer = styled.div`
  background: url('https://pngimg.com/uploads/bank/bank_PNG21.png');
  background-size: cover;
  height: 100vh; /* Set the height to cover the entire viewport */
  display: flex;
`;

const SidebarContainer = styled.div`
  width: ${({ isOpen }) => (isOpen ? '300px' : '70px')};
  transition: width 0.3s;
`;

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    
    {
        path: '/analytics',
        name: 'Transaction History',
        icon: <FaRegChartBar />,
    },
    {
        path: '/comment',
        name: 'Report',
        icon: <FaCommentAlt />,
    },
    {
        path: '/product',
        name: 'Loan',
        icon: <FaDollarSign />,
    },
    
    {
      path: '/req',
      name: 'Loureq',
      icon: <FaUserAlt />,
    },
    {
        path: '/proList',
        name: 'Settings',
        icon: <FaCog />,
    },
];

  return (
    <OuterContainer>
      <SidebarContainer isOpen={isOpen} className="sidebar">
        <div className="top_section">
          <div className="baa">
            <FaBars onClick={toggle} />
          </div>
          <h1 style={{ display: isOpen ? 'block' : 'none' }} className="logo">
            &nbsp;&nbsp;&nbsp;&nbsp;USER
          </h1>
         
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link" activeClassName="active">
            <div className="icon">{item.icon}</div>
            <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </SidebarContainer>
      <main>{children}</main>
      <img src="https://pngimg.com/uploads/bank/bank_PNG24.png" alt="Your Logo" style={{ width: '100%', height: 'auto' }} />
    </OuterContainer>
  );
};

export default Sidebar;