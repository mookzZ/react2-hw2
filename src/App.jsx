import "./App.css";
import { Routes, Route } from "react-router-dom";
import PostCreationPage from "./pages/PostCreationPage/PostCreationPage.jsx";
import PostsPage from "./pages/PostPage/PostsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import Layout from "./components/Layout/Layout.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostsPage />} />
          <Route path="/post-creation" element={<PostCreationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
