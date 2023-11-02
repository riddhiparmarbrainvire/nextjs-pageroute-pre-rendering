import React from "react";

export default function User({ user }: any) {
  return (
    <div>
      <h6>name: {user.name}</h6>
      <h6>username: {user.username}</h6>
    </div>
  );
}
