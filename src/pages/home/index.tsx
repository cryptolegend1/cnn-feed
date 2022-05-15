import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import {
  Box,
  Divider,
  Pagination,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import BlogListView from "../../components/BlogListView";
import BlogCardView from "../../components/BlogCardView";
import { BlogData } from "../../types/BlogData";
import { useAppSelector } from "../../hooks";
import { useLocation } from "react-router-dom";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Home() {
  const perPage = 6;
  const [view, setView] = useState(0);
  const [page, setPage] = useState(1);
  const [selectedData, setSelectedData] = useState<BlogData[]>([]);
  const location = useLocation();

  const isLoading = useAppSelector((state) => {
    return state.blog && state.blog.loading;
  });

  const data: BlogData[] = useAppSelector((state) => {
    return state.blog && state.blog.blogs;
  });

  const totalResults = useAppSelector((state) => {
    return state.blog && state.blog.totalResults;
  });

  const handleViewChange = (event: any, newValue: number) => {
    setView(newValue);
    window.location.href = `/?view=${newValue}&page=${page}`;
  };
  const handlePageChange = (event: any, value: number) => {
    setPage(value);
    window.location.href = `/?view=${view}&page=${value}`;
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const p = parseInt(query.get("page") || "1", 10);
    const v = parseInt(query.get("view") || "0", 10);
    setPage(p);
    setView(v);
  }, [location]);

  useEffect(() => {
    const selected = data.slice(perPage * (page - 1), perPage * page);
    setSelectedData(selected);
  }, [page, data]);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="md" sx={{ paddingBottom: "50px" }}>
      <Typography
        variant="h1"
        sx={{ margin: isSmallScreen ? "20px 0" : "50px 0" }}
      >
        CNN Feed
      </Typography>
      {!isLoading && (
        <>
          <Tabs value={view} onChange={handleViewChange} aria-label="view tabs">
            <Tab icon={<GridViewIcon />} {...a11yProps(0)} />
            <Tab icon={<ViewListIcon />} {...a11yProps(1)} />
          </Tabs>
          <Divider />
          <TabPanel value={view} index={0}>
            <BlogListView blogs={selectedData} />
          </TabPanel>
          <TabPanel value={view} index={1}>
            <BlogCardView blogs={selectedData} />
          </TabPanel>

          <Pagination
            count={Math.ceil(totalResults / 6)}
            page={page}
            onChange={handlePageChange}
            sx={{ margin: "32px 0" }}
          />
        </>
      )}
    </Container>
  );
}
