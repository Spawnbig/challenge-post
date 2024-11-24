import { useState } from "react"
import { useGetPosts } from "../../hooks"
import {
  CardComponent,
  TableComponent,
  SearchPostComponent,
} from "./components"
import type { Post } from "../../interfaces/post"

const PostList = () => {
  const { posts, setSearch, triggerSearch, resetSearch } = useGetPosts()
  const [isTableView, setIsTableView] = useState(true)

  return (
    <>
      <SearchPostComponent
        isTableView={isTableView}
        onChange={setSearch}
        setIsTableView={setIsTableView}
        triggerSearch={triggerSearch}
        resetSearch={resetSearch}
      />

      {posts.length === 0 ? (
        <p className="text-center text-lg">Aún no hay posts para mostrar</p>
      ) : isTableView ? (
        <TableComponent data={posts} />
      ) : (
        <>
          {posts.map((post: Post) => (
            <CardComponent key={post.id} {...post} />
          ))}
        </>
      )}
    </>
  )
}

export default PostList
