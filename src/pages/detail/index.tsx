import Container from "@mui/material/Container";
import { Box, Link, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BlogData } from "../../types/BlogData";
import { useAppSelector } from "../../hooks";

export default function Detail() {
  const data: BlogData[] = useAppSelector((state) => {
    return state.blog && state.blog.blogs;
  });
  const [selectedBlog, setSelectedBlog] = useState<BlogData>();
  const { blogId } = useParams();
  useEffect(() => {
    const id = parseInt(blogId || "0");
    setSelectedBlog(data[id]);
  }, [data, blogId]);

  return (
    <Container maxWidth="md" sx={{ paddingBottom: "50px" }}>
      <Typography variant="h1" sx={{ margin: "50px 0 10px" }}>
        {selectedBlog?.title}
      </Typography>
      <Typography variant="h6">
        Author:
        <span
          dangerouslySetInnerHTML={{ __html: selectedBlog?.author || "" }}
        />
      </Typography>
      <Typography variant="h6">
        Published At: {selectedBlog?.publishedAt}
      </Typography>
      <Box
        component="img"
        src={selectedBlog?.urlToImage}
        width="100%"
        marginTop="10px"
      />
      <Typography variant="body1">{selectedBlog?.content}</Typography>
      <Link href={selectedBlog?.url}>Read More</Link>
    </Container>
  );
}
