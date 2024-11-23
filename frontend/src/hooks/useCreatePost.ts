import { useEffect, useState } from "react"
import { useAddPostMutation } from "../redux/posts/postApi"

const useCreatePost = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [isValid, setIsValid] = useState(false)
  const [addPost] = useAddPostMutation()

  useEffect(() => {
    setIsValid(name.length > 0 && description.length > 0)
  }, [name, description])

  const savePost = () => {
    addPost({ name, description })
    setName("")
    setDescription("")
  }

  return {
    name,
    setName,
    description,
    setDescription,
    isValid,
    setIsValid,
    savePost,
  }
}

export default useCreatePost
