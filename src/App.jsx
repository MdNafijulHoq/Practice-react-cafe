import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Headers from './components/headers/Headers'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  // event handler
  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  // for reading time

  const [readingTime, setReadingTime] = useState(0);
  // event handler
  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
    // remove the read block from bookmark
    // console.log('remove bookmark', id)
    const remainingBookMakrs = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookMakrs);
  }
  

  return (
    <>
      
      <Headers></Headers>
      <div className='md:flex'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
