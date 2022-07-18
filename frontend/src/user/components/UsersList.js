import React from "react";

import Card from "../../shared/components/UIElements/Card";
import UserItem from "./UserItem";

import "./UsersList.css";

const UsersList = (props) => {
  return (
    <>
      {props.items.length === 0 ? (
        <div className="center">
          <Card>
            <h2>No users found.</h2>
          </Card>
        </div>
      ) : (
        <ul className="users-list">
          {props.items.map((user) => (
            <UserItem
              key={user.id}
              id={user.id}
              image={user.image}
              name={user.name}
              placeCount={user.places.length}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default UsersList;
