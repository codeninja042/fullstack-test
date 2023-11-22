import React from "react";
import {CircularProgress, Stack, Alert, Box} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {styled} from "@mui/material/styles";
import {useInView} from "react-intersection-observer";
import type {ArticleData} from "../../types/article";
import {Article} from "../../components";
import {useArticleList} from "../../api";
import {withSuspense} from "../../hocs";

const ClickableBox = styled(Box)({
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#f5f5f5",
  },
  padding: "10px",
  borderRadius: "5px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  marginBottom: "10px",
});
function ArticleList() {
  const {data, error, fetchNextPage, hasNextPage, isFetchingNextPage} =
    useArticleList();
  const navigate = useNavigate();

  const {ref} = useInView({
    fallbackInView: true,
    onChange: (inView: boolean) => {
      if (inView && hasNextPage && !isFetchingNextPage) {
        fetchNextPage()
          .then()
          .catch(error => {
            console.error("Error fetching next page:", error);
          });
      }
    },
  });

  if (error !== null) {
    return <Alert severity="error">An error occurred: {error.message}</Alert>;
  }

  return (
    <Stack spacing={2}>
      {data?.pages?.map((group, index) => (
        <React.Fragment key={index}>
          {group?.data?.map((article: ArticleData, idx) => (
            <ClickableBox
              ref={group.data.length === idx + 1 ? ref : null}
              key={article.id}
              onClick={() => {
                navigate(`/${article.id}`);
              }}>
              <Article
                author={article.author}
                url={article.url}
                image={article.image_url}
                traffic={article.total_traffic ?? 0}
              />
            </ClickableBox>
          ))}
        </React.Fragment>
      ))}
      {isFetchingNextPage ? <CircularProgress /> : null}
    </Stack>
  );
}

export default withSuspense(ArticleList);
