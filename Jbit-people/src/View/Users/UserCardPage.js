import React from "react";
import UserCarditem from "./UserCardItem";

const UserCard = props => {
  return (
    <div class="row">
      <div class="col s4">
        <UserCarditem user={user} />
      </div>
      <div class="col s4">
        <UserCarditem user={user} />
      </div>
      <div class="col s4">
        <UserCarditem user={user} />
      </div>
    </div>
  );
};
export default UserList;
