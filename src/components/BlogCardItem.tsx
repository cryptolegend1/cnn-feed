import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { BlogData } from "../types/BlogData";

const useStyles = makeStyles({
  multiLineEllipsis: {
    display: "-webkit-box",
    boxOrient: "vertical",
    wordBreak: "break-all",
    overflow: "hidden",
  },
});

interface IProps {
  blog: BlogData;
  index: number;
}

export default function BlogCardItem({ blog, index }: IProps) {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Card sx={{ maxWidth: isSmallScreen ? 450 : 273 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={blog.urlToImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h6" mb="8px">
            {blog.publishedAt}
          </Typography>
          <Typography
            gutterBottom
            variant="h2"
            component="div"
            className={classes.multiLineEllipsis}
            sx={{ WebkitLineClamp: 2 }}
          >
            {blog.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className={classes.multiLineEllipsis}
            sx={{ WebkitLineClamp: 4 }}
          >
            {blog.description}
          </Typography>
          <Box pt="16px">
            <Chip label={blog.author} />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
