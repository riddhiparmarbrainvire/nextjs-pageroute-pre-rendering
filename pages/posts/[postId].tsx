import React from "react";
// import { useRouter } from "next/router";

export default function PostId({ post }: any) {
  //   const router = useRouter();
  //   if (router.isFallback) {
  //     return <h1>Loading text</h1>;
  //   }

  return (
    <div>
      <h1>
        {post.id}-{post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
}

export async function getStaticPaths() {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const data = await response.json();

  // dynamically fetching id from api, and storing in paths variable
  //   const paths = data.map((post: any) => {
  //     return {
  //       params: {
  //         postId: `${post.id}`,
  //       },
  //     };
  //   });

  return {
    //   statically displaying particular id page
    paths: [
      {
        params: {
          postId: "1",
        },
      },
      {
        params: {
          postId: "2",
        },
      },
      {
        params: {
          postId: "3",
        },
      },
    ],

    //  using paths in oaths in return to access dynamically
    // paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  console.log(params, "pp");
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
}
