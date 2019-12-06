import React from "react";
import User from "../model/User";

const UserCarditem = props => {
  const gender = props.user.gender;

  return (
    <div class="col s12 m4">
      <div class={`card ${gender}`}>
        <div class="card-image">
          <img src={props.user.pictureM} />
          <span class="card-title"> {props.user.fullName()}</span>
        </div>
        <div class="card-content">
          <p>
            Email: {props.user.getEmail()}
            <br />
            Birthday: {props.user.getDate()} <br />
          </p>
        </div>
      </div>
    </div>
  );
};
export default UserCarditem;
