import React from "react";
import "./styles/BadgeList.css";

export default class BadgeList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(d => {
          return (
            <li key={d.id} className="Badge__section-name-list">
              <img
                src={d.avatarUrl}
                alt="chura"
                className="Badge__avatar-list"
              />
              <div>
                {d.firstName} {d.lastName}
                <br />
                {d.jobTitle}
                <br />
                <img src={d.avatarUrl} className="tw__logo" alt="chura" />
                <span className="twitter__blue_font">@{d.twitter}</span>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}
