import type { Post } from "../../../../interfaces/post"
import { useDeletePostMutation } from "../../../../redux/posts/postApi"

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
                  className="relative z-10 scale-150 text-error group"
                  onClick={() => deletePost(id)}
                >
                  <div className="hover:animate-shake flex items-center justify-center">
                    <i className="icon-[tabler--trash]"></i>
                  </div>
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
