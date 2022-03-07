import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Btn from '../Btn';
import NAVBTN_LISTS from './NAVBTN_LISTS';

function Nav() {
  const [isClick, setIsClick] = useState({ main: true });
  const navBtnLists = NAVBTN_LISTS;
  const changeColor = e => {
    const { name } = e.currentTarget;

    let navMenuObj = {
      main: false,
      campaign: false,
      influencer: false,
      analysis: false,
    };

    navMenuObj[name] = true;
    setIsClick(navMenuObj);
    navigate(name === 'main' ? '/' : `/${name}`);
  };

  const navigate = useNavigate();

  return (
    <NavWrraper>
      <NavTitleWrraper>
        <h2>Campaign & Influencer Marketing</h2>
        <h2>management system</h2>
      </NavTitleWrraper>
      <NavMenuWrraper>
        {navBtnLists.map(({ id, korName, engName }) => {
          return (
            <NavBtn
              key={id}
              color="navNoneActive"
              name={engName}
              onClick={changeColor}
              active={isClick[engName]}
            >
              <span>{korName}</span>
            </NavBtn>
          );
        })}
      </NavMenuWrraper>
    </NavWrraper>
  );
}

export default Nav;

const NavWrraper = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  background: linear-gradient(
    90deg,
    #001f5b 0%,
    rgba(0, 31, 91, 0) 100%,
    rgba(0, 31, 91, 0) 100%
  );

  h2 {
    color: ${({ theme }) => theme.palette.white};
    line-height: 26px;
    font-size: ${({ theme }) => theme.fontsize.fontSize5};
  }
`;

const NavTitleWrraper = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
  flex-direction: column;
  margin-left: 3%;
  font-weight: 600;
`;

const NavMenuWrraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  margin-right: 3%;
`;

const NavBtn = styled(Btn)`
  width: 200px;
  display: flex;
  justify-content: center;
  border-radius: ${({ theme }) => theme.btnRadius.borderRadius5};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: ${({ theme, active }) => active && theme.palette.navActive};
  span {
    font-size: ${({ theme }) => theme.fontsize.fontSize1};
    font-weight: 600;
    color: ${({ theme }) => theme.palette.white};
  }
`;
