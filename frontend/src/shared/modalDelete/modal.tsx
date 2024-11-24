import { useState } from "react"
import ReactDOM from "react-dom"

interface Props {
  title: string
  onConfirm: () => void
  showText?: boolean
}

const ModalDeleteItem = ({ title, onConfirm, showText = true }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const handleConfirm = () => {
    onConfirm()
    closeModal()
  }

  return (
    <>
      <button
        className="relative z-10 text-error group flex items-center group"
        onClick={openModal}
      >
        <span className="icon-[tabler--trash] group-hover:animate-shake size-5"></span>
        {showText && "Eliminar post"}
      </button>

      {isOpen &&
        ReactDOM.createPortal(
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 md:px-0 px-2"
            role="dialog"
            aria-modal="true"
          >
            <div className="modal-content max-w-full">
              <div className="modal-header">
                <h3 className="text-lg font-semibold">
                  ¿Desea borrar {title}?
                </h3>
                <button
                  type="button"
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                  onClick={closeModal}
                >
                  ✕
                </button>
              </div>
              <div className="modal-body mt-4">
                <p>
                  Se borrará el post seleccionado. Esta acción es irreversible
                </p>
              </div>
              <div className="modal-footer mt-4 flex justify-end gap-2">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Cerrar
                </button>
                <button
                  type="button"
                  className="btn btn-error"
                  onClick={handleConfirm}
                >
                  Borrar
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  )
}

export default ModalDeleteItem
