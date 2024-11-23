import type { Post } from "./interfaces/post"
import CardComponent from "./components/common/card/card"
import { AddPostComponent } from "./components"
import { useGetPosts } from "./hooks"

const App = () => {
  const { posts, setSearch } = useGetPosts()

  return (
    <section className="lg:w-1/2 w-4/5 py-6 grid gap-7">
      <AddPostComponent />
      <div className="divider divider-neutral"></div>
      <h2 className="text-2xl font-bold">Posts</h2>
      <input
        type="text"
        className="input"
        placeholder="Buscar por nombre"
        onChange={e => setSearch(e.target.value)}
      />
      <div className="gap-5 flex flex-col max-h-[500px] overflow-y-visible pb-5 vertical-scrollbar lg:px-10 px-2">
        {posts
          .map((post: Post) => <CardComponent key={post.id} {...post} />)
          .reverse()}
      </div>
    </section>
  )
}

export default App
