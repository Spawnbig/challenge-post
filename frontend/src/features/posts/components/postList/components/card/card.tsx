import { useDeletePostMutation } from "@/features/posts/redux/postApi"
import { ModalDeleteItem } from "@/shared"

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
        <ModalDeleteItem
          title={name}
          onConfirm={() => deletePost(id)}
          showText={false}
        />
      </div>
      <div className="card-body break-words overflow-hidden">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default CardComponent
