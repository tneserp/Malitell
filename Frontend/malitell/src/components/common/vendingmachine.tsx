import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import * as s from "../../styles/common/vendingmachine";
import * as g from "../../styles/grid";

export default function Vendingmachine() {
  const [gachaClose, setGachaClose] = useState(false);
  const [gachaClick, setGachaClick] = useState(false);

  const closeGacha = (e: React.MouseEvent): void => {
    setGachaClose(true);
  };

  const clickGacha = (e: React.MouseEvent): void => {
    setGachaClick(!gachaClick);
    setGachaClose(!gachaClose);
  };

  return (
    <>
      {gachaClose ? null : (
        <s.Box>
          <s.Close onClick={closeGacha}>
            <FontAwesomeIcon
              icon={faXmark}
              style={{ color: "#B197FC" }}
              size="2x"
            />
          </s.Close>
          <img onClick={clickGacha} src="./images/gachamachineMain.gif" />
        </s.Box>
      )}
      {gachaClick ? (
        <g.Background>
          <s.GachaBox>
            <div style={{ display: "flex", width: "100%", justifyContent: "end" }}>
              <s.GachaClose onClick={clickGacha}>
                <FontAwesomeIcon
                  icon={faXmark}
                  style={{ color: "#B197FC" }}
                  size="2x"
                />
              </s.GachaClose>
            </div>
            <img src="./images/fast.gif" />
          </s.GachaBox>
        </g.Background>
      ) : null}
      <Outlet />
    </>
  );
}
