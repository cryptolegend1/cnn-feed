import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BlogData } from "../types/BlogData";
import BlogListItem from "./BlogListItem";

interface IProps {
  blogs: BlogData[];
}

export default function BlogListView({ blogs }: IProps) {
  const [page, setPage] = useState(1);
  const location = useLocation();
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const p = parseInt(query.get("page") || "1", 10);
    setPage(p);
  }, [location]);
  return (
    <>
      {blogs.length > 0 ? (
        blogs.map((blog, i) => (
          <BlogListItem blog={blog} index={6 * (page - 1) + i} key={i} />
        ))
      ) : (
        <Typography variant="body1">No Data</Typography>
      )}
    </>
  );
}
