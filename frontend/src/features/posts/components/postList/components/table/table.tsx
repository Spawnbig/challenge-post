import type { Post } from "@/features/posts/interfaces/post"
import { useDeletePostMutation } from "@/features/posts/redux/postApi"
import { ModalDeleteItem } from "@/shared"

interface Props {
  data: Post[]
}

const TableComponent = ({ data }: Props) => {
  const [deletePost] = useDeletePostMutation()
  return (
    <div className="w-full overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, description, name }: Post) => (
            <tr key={id} className="hover">
              <td>{name}</td>
              <td className="whitespace-normal break-words max-w-xs">
                {description}
              </td>
              <td>
                <ModalDeleteItem
                  title={name}
                  onConfirm={() => deletePost(id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableComponent
