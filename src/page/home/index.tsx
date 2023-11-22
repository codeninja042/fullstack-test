// Home.tsx
import React from "react";
import ArticleList from "./ArticleList";
import {PageLayout} from "../_partial/PageLayout";

const Home: React.FC = () => {
  return <PageLayout mainComponent={<ArticleList />} />;
};

export default Home;
