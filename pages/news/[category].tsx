import React from "react";

export default function ArticleListByCategory({ articles, category }: any) {
  return (
    <div>
      <h1>
        Showing news for category: <i>{category}</i>
      </h1>
      {articles.map((arti: any) => {
        return (
          <div key={arti.id}>
            {arti.id} | {arti.description}
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { params, req, res, query } = context;
  console.log(query, "query");
  console.log(req.headers.cookie, "cookie");
  res.setHeader("Set-Cookie", ["name = riddhi"]);

  const cat = params.category;
  const response = await fetch(
    `http://localhost:3001/news?category=${params.category}`
  );
  const data = await response.json();

  return {
    props: {
      articles: data,
      category: cat,
    },
  };
}
