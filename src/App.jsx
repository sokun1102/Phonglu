import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Log from './pages/Log'
import Blog from './pages/Blog'
import Post from './pages/Post'
import About from './pages/About'
import MyLove from './pages/MyLove'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/log" replace />} />
          <Route path="log" element={<Log />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<Post />} />
          <Route path="about" element={<About />} />
          <Route path="love" element={<MyLove />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
