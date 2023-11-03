import Link from "next/link";
import React from "react";

export default function PostList({ posts }: any) {
  return (
    <div>
      <h1>Posts list</h1>
      {posts.map((p: any) => (
        <div key={p.id}>
          <Link href={`posts/${p.id}`}>
            <h4>
              {p.id} - {p.title}
              <hr />
            </h4>
          </Link>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  console.log(data, "data");

  return {
    props: {
      posts: data,
    },
  };
}
