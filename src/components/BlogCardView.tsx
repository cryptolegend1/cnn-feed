import { Box, Typography } from "@mui/material";
import BlogCardItem from "./BlogCardItem";
import { BlogData } from "../types/BlogData";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface IProps {
  blogs: BlogData[];
}

export default function BlogCardView({ blogs }: IProps) {
  const [page, setPage] = useState(1);
  const location = useLocation();
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const p = parseInt(query.get("page") || "1", 10);
    setPage(p);
  }, [location]);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        py: "16px",
      }}
    >
      {blogs.length > 0 ? (
        blogs.map((blog, i) => (
          <BlogCardItem blog={blog} index={6 * (page - 1) + i} key={i} />
        ))
      ) : (
        <Typography variant="body1">No Data</Typography>
      )}
    </Box>
  );
}
