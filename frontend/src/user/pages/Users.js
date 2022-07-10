import React from "react";

import UsersList from "../components/UsersList";

const USERS = [
  {
    id: "u1",
    name: "Adrian Brisan",
    image:
      "https://re7consulting.ro/wp-content/uploads/2019/09/ce-este-adresa-url-google.jpg",
    places: 3,
  },
];

const Users = () => {
  return <UsersList items={USERS} />;
};

export default Users;
