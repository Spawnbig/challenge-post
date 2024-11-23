import type { Post } from "@/features/posts/interfaces/post"
import { useDeletePostMutation } from "@/features/posts/redux/postApi"

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
                <button
                  className="relative z-10 text-error group flex items-center group"
                  onClick={() => deletePost(id)}
                >
                  <span className="icon-[tabler--trash] group-hover:animate-shake size-5"></span>
                  Eliminar post
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableComponent
