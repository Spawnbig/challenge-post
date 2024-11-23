import { useDeletePostMutation } from "@/features/posts/redux/postApi"

interface Props {
  id: number
  name: string
  description: string
}

const CardComponent = ({ name, description, id }: Props) => {
  const [deletePost] = useDeletePostMutation()

  return (
    <div className="card card-compact hover:shadow-lg">
      <div className="card-header flex justify-between">
        <h5 className="card-title">{name}</h5>
        <button
          className="relative z-10 text-error group"
          onClick={() => deletePost(id)}
        >
          <span className="icon-[tabler--trash] group-hover:animate-shake size-5"></span>
        </button>
      </div>
      <div className="card-body break-words overflow-hidden">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default CardComponent
