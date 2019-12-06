import React from "react";
import UserListitem from "./UserListitem";

const UserList = props => {
  return (
    <ul className="collection">
      {props.users.map(user => (
        <UserListitem user={user} />
      ))}
    </ul>
  );
};
export default UserList;
