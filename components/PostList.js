import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Post from './post';

const PostList = (props) => {
  // const [users, setUsers] = useState([])
  let [ postData ] = props.postData;
  console.log(props)

  const router = useRouter()
  // Set users from postData
  useEffect(() => {
    if (postData) {
      if (postData.error) {
        // Handle error
      } else {
      }
    }
  }, [postData])
  // Listen to scroll positions for loading more data on scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })
  const handleScroll = () => {
    // To get page offset of last user
    const lastUserLoaded = document.querySelector(
      ".post-list > .post:last-child"
    )
    if (lastUserLoaded) {
      const lastUserLoadedOffset =
        lastUserLoaded.offsetTop + lastUserLoaded.clientHeight
      const pageOffset = window.pageYOffset + window.innerHeight
      // Detects when user scrolls down till the last user
      if (pageOffset > lastUserLoadedOffset) {
        // Stops loading
        if (postData.curPage < postData.maxPage) {
          // Trigger fetch
          const query = router.query
          console.log(postData.curPage);
          query.page = parseInt(postData.curPage) + 1
          router.push({
            pathname: router.pathname,
            query: query,
          })
        }
      }
    }
  }
  return (
    <>
      <ul className="post-list">
        {props.postData.length > 0 &&
          props.postData.map((post, i) => {
            return (
              <Post {...post} key={i} />
            )
          })}
      </ul>
    </>
  )
}
export default PostList;