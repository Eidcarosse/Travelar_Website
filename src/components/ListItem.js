import React, { useContext } from "react";
import "../Stylesheets/Listitem.css";
import { Link } from "react-router-dom";
import DataContext from "../Contexts/DataContext";
import StCntxt from "../Contexts/StateContext";
import i18next from "i18next";

export default function ListItem(props) {
  const Slng = i18next.language;
  const Scroll_Top = useContext(DataContext);
  const ToggleIcon = useContext(StCntxt);
  return (
    <div className="Items_Container">
      <span className="Cntent_Wraper">
        <Link
          className="RTL_Thd Lst_Anim"
          s_language={Slng}
          onClick={() => {
            ToggleIcon();
            Scroll_Top();
          }}
          id="LinkAdd"
          to={props.linked}
        >
          {props.title}
        </Link>
      </span>
    </div>
  );
}
