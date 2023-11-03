import React from "react";

export default function NewsArticleList({ articles }: any) {

  return (
    <div>
      <h1>List of news article</h1>
      {articles.map((art: any) => {
        return (
          <div key={art.id}>
            <h4>Id: {art.id}</h4>
            <h4>Title: {art.title}</h4>
            <h4>Category: {art.category}</h4>
            <h4>Description: {art.description}</h4>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3001/news");
  const data = await response.json();

  return {
    props: {
      articles: data,
    },
  };
}
