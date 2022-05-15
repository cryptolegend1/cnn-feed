import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBlogData } from "./slices/BlogSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogData());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:blogId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
