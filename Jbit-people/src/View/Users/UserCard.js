import React from "react";
import UserCarditem from "./UserCardItem";

const UserCard = props => {
  return (
    <div class="row">
      <ul className="collection">
        {props.users.map(user => (
          <UserCarditem user={user} />
        ))}
      </ul>
    </div>
  );
};
export default UserCard;
