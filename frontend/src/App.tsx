import { AddPostComponent, PostList } from "@features/posts/components"

const App = () => {
  return (
    <section className="lg:w-1/2 w-4/5 py-6 grid gap-7">
      <AddPostComponent />
      <div className="divider divider-neutral"></div>
      <h2 className="text-2xl font-bold">Posts</h2>
      <PostList />
    </section>
  )
}

export default App
