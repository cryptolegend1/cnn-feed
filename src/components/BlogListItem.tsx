import {
  Box,
  Chip,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { BlogData } from "../types/BlogData";

interface IProps {
  blog: BlogData;
  index: number;
}

export default function BlogListItem({ blog, index }: IProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box
        sx={{
          display: "flex",
          paddingTop: "24px",
          cursor: "pointer",
        }}
        onClick={() => {
          window.location.href = `/detail/${index}`;
        }}
      >
        <Box sx={{ flex: "1 1 auto" }}>
          <Typography variant="h2" paddingBottom={isSmallScreen ? 0 : "8px"}>
            {blog.title}
          </Typography>
          {!isSmallScreen && (
            <Typography variant="body2">{blog.description}</Typography>
          )}
          <Box padding={isSmallScreen ? "16px 0" : "32px 0"}>
            <Chip label={blog.author} />
            <Typography
              component={isSmallScreen ? "div" : "span"}
              variant="h6"
              marginLeft="8px"
            >
              {blog.publishedAt}
            </Typography>
          </Box>
        </Box>
        <Box
          component="img"
          src={blog.urlToImage}
          width={isSmallScreen ? "56px" : "112px"}
          height={isSmallScreen ? "56px" : "112px"}
          sx={{
            objectFit: "cover",
            marginLeft: isSmallScreen ? "30px" : "60px",
          }}
        />
      </Box>
      <Divider />
    </>
  );
}
