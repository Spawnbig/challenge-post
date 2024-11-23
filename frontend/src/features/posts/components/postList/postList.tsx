import { useState } from "react"
import { useGetPosts } from "../../hooks"
import type { Post } from "../../interfaces/post"
import { CardComponent, TableComponent } from "./components"

const PostList = () => {
  const { posts, setSearch, triggerSearch, resetSearch } = useGetPosts()
  const [isTableView, setIsTableView] = useState(true)

  const handleSearch = (e: string) => {
    setSearch(e)
    if (e === "") resetSearch()
  }

  const renderPosts = () => {
    if (!isTableView) {
      return posts.map((post: Post) => (
        <CardComponent
          key={post.id}
          id={post.id}
          name={post.name}
          description={post.description}
        />
      ))
    }
    return <TableComponent data={posts} />
  }

  return (
    <>
      <div className="flex justify-between">
        <div className="join max-w-xl">
          <input
            type="search"
            className="input join-item"
            onChange={e => handleSearch(e.target.value)}
            placeholder="Buscar por nombre"
          />
          <button className="btn join-item" onClick={triggerSearch}>
            Buscar
          </button>
        </div>
        <div className="join">
          <button
            className={`btn btn-soft ${isTableView && "btn-primary"} join-item`}
            onClick={() => setIsTableView(true)}
          >
            <span className="icon-[tabler--table]"></span>
          </button>
          <button
            onClick={() => setIsTableView(false)}
            className={`btn btn-soft join-item ${!isTableView && "btn-primary"}`}
          >
            <span className="icon-[tabler--layout-grid]"></span>
          </button>
        </div>
      </div>

      {posts.length === 0 ? (
        <p className="text-center text-lg">Aún no hay posts para mostrar</p>
      ) : (
        renderPosts()
      )}
    </>
  )
}

export default PostList
