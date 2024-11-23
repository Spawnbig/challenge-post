import { useEffect, useState } from "react"
import { useGetPostsQuery } from "../redux/posts/postApi"
import type { Post } from "../interfaces/post"

const useGetPosts = () => {
  const { data } = useGetPostsQuery(undefined)
  const [posts, setPosts] = useState<Post[]>([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    const filteredData = data?.filter((post: Post) =>
      post.name.includes(search),
    )
    setPosts(filteredData ?? [])
  }, [search, data  ])

  return { posts, setSearch }
}

export default useGetPosts
