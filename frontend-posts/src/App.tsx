import type { Post } from "./interfaces/post"
import { useAddPostMutation, useGetPostsQuery } from "./redux/posts/postApi"

const App = () => {
  const { data } = useGetPostsQuery(undefined)
  const [addPost] = useAddPostMutation()

  const addPostFunc = () => {
    addPost({ name: "New Post", description: "New Description" })
  }

  return (
    <div>
      <h1 className="text-2xl">
        {data &&
          data.map((post: Post) => (
            <div key={post.id}>
              <h2>{post.name}</h2>
              <p>{post.description}</p>
            </div>
          ))}
        <button onClick={addPostFunc}>ADD</button>
      </h1>
    </div>
  )
}

export default App
