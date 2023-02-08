import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { About } from "./pages/About"
import { HomePage } from "./pages/HomePage"
import { PostPage } from "./pages/PostPage"
import { Posts } from "./pages/Posts"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />}/>
          <Route path="/posts" element={<Posts />}/>
          <Route path="/posts/:id" element={<PostPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
