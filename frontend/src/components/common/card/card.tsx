import { useDeletePostMutation } from "../../../redux/posts/postApi"

interface Props {
  id: number
  name: string
  description: string
}

const CardComponent = ({ name, description, id }: Props) => {
  const [deletePost] = useDeletePostMutation()

  return (
    <div className="card card-compact">
      <div className="card-header flex justify-between">
        <h5 className="card-title">{name}</h5>
        <button
          className="icon-[tabler--trash] scale-150 text-error"
          onClick={() => deletePost(id)}
        ></button>
      </div>
      <div className="card-body break-words overflow-hidden">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default CardComponent
