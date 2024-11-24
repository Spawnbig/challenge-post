import { useMemo, useState } from "react"
import { useGetPostsQuery } from "../redux/postApi"
import type { Post } from "../interfaces/post"

const useGetPosts = () => {
  const { data: posts } = useGetPostsQuery(undefined)
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("")

  const filteredPosts = useMemo(() => {
    if (!posts) return []
    return posts
      .filter((post: Post) =>
        post.name.toLowerCase().includes(query.toLowerCase()),
      )
      .reverse()
  }, [posts, query])

  const triggerSearch = () => setQuery(search)
  const resetSearch = () => setQuery("")

  return { posts: filteredPosts, search, setSearch, resetSearch, triggerSearch }
}

export default useGetPosts
