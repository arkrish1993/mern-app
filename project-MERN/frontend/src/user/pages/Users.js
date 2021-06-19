import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      image:
        "https://image.shutterstock.com/image-vector/cute-kawaii-girl-glasses-cartoon-600w-1769547977.jpg",
      places: 3,
      name: "AR",
    },
  ];
  return <UsersList users={USERS} />;
};

export default Users;
