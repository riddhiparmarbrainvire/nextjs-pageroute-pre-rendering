import User from "@/components/user";
import React from "react";

export default function UsersList({ users }: any) {
  console.log(users, "props");
  return (
    <div>
      <h1>List of users</h1>
      {users.map((u: any) => {
        return (
          <div key={u.id}>
            <User user={u} />
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  console.log(data, "data");

  return {
    props: {
      users: data,
    },
  };
}

// getStaticProps() - this function has to return and object, in that object there should be props object.
// key and thw value should be the data we want to pass
// in our component we get the data in props
// name of key in props object is the prop name we get in our component
