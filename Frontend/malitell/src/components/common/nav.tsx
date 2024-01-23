import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import * as s from "../../styles/common/nav";
import { Link, Outlet } from "react-router-dom";
import Login from "../auth/login";

export default function Nav() {
  const [login, setLogin] = useState(false);

  const handleLogin = (e: React.MouseEvent): void => {
    setLogin(!login);
  };

  return (
    <>
      {login ? (
        <s.Background onClick={handleLogin}>
          <div onClick={(e) => e.stopPropagation()}>
            <Login />
          </div>
        </s.Background>
      ) : null}
      <s.Nav>
        <s.NavTop>
          <s.NavContainer>
            <s.NavItems></s.NavItems>
            <s.NavItems>
              <s.NavItem onClick={handleLogin}>로그인</s.NavItem>
              <s.NavItem>
                <Link to={"/signup"}>회원가입</Link>
              </s.NavItem>
            </s.NavItems>
          </s.NavContainer>
        </s.NavTop>
        <s.NavBottom>
          <s.NavContainer>
            <Link to={"/"}>
              MaLiTell
            </Link>
            <s.NavItems>
              <FontAwesomeIcon icon={faUser} />
            </s.NavItems>
          </s.NavContainer>
        </s.NavBottom>
      </s.Nav>
      <Outlet />
    </>
  );
}
