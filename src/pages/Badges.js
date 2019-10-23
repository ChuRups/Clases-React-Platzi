import React from "react";
import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import Navbar from "../components/Navbar";
import BadgeList from "../components/BadgeList";

class Badges extends React.Component {
  state = {
    data: [
      {
        id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
        firstName: "Miguel",
        lastName: "Morales",
        email: "mmorales@gmail.com",
        jobTitle: "Legacy Brand Director",
        twitter: "mmorales63",
        avatarUrl:
          "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
      },
      {
        id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
        firstName: "Junior",
        lastName: "Malpartida",
        email: "Ilene66@hotmail.com",
        jobTitle: "Human Research Architect",
        twitter: "Junorius54",
        avatarUrl:
          "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
      },
      {
        id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
        firstName: "Zomeli",
        lastName: "Zome",
        email: "Ron61@hotmail.com",
        jobTitle: "National Markets Officer",
        twitter: "xZomelius89",
        avatarUrl:
          "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
      },
      {
        id: "2de30c41-6deb-40fc-a41g-05e62b5939a9",
        firstName: "Polito",
        lastName: "Vargas",
        email: "Polito-El(U)niko@gmail.com",
        jobTitle: "Frontend Developer",
        twitter: "ElPalukazMzNa",
        avatarUrl:
          "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
      }
    ]
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges__conf-logo" src={confLogo} alt="" />
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <a href="/badges/new" className="btn btn-primary">
              New Badges
            </a>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgeList badges={this.state.data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Badges;
