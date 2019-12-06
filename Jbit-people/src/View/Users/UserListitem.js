import React from "react";
import User from "../model/User";

const UserListitem = props => {
  const gender = props.user.gender;

  return (
    <li class={`collection-item avatar ${gender}`}>
      <img src={props.user.picture} alt="" class="circle" />
      <span class="title">Name: {props.user.fullName()}</span>
      <p>
        Email: {props.user.getEmail()}
        <br />
        Birthday: {props.user.getDate()} <br />
      </p>
    </li>
  );
};
export default UserListitem;
