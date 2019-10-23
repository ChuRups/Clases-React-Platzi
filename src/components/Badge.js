import React from "react";
import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";
import imgAvatar from "../images/Gatito-octonaut.svg";

class Badge extends React.Component {
  render() {
    //Todos los componentes requieres de un metodo obligatorio render()
    const { firstName, lastName, jobTitle, twitter } = this.props;

    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo del churus" />
        </div>

        <div className="Badge__section-name">
          <img className="Badge__avatar" src={imgAvatar} alt="Avatar" />
          <h1>
            {firstName} <br /> {lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{jobTitle}</h3>
          <div>@{twitter}</div>
        </div>

        <div className="Badge__footer">#ChurupsConf</div>
      </div>
    );
  }
}

export default Badge;
