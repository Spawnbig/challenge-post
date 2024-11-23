import useCreatePost from "../../hooks/useCreatePost"

const AddPostComponent = () => {
  const { description, isValid, name, savePost, setDescription, setName } =
    useCreatePost()

  return (
    <section className="flex flex-col gap-2">
      <h1 className="text-2xl">Añadir un nuevo post</h1>
      <label className="form-control">
        <div className="label">
          <span className="label-text">Nombre</span>
        </div>
        <input
          type="text"
          value={name}
          placeholder="John Doe"
          className="input"
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label className="form-control">
        <div className="label">
          <span className="label-text">Descripción</span>
        </div>
        <textarea
          className="textarea"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Cuenta algo divertido"
        ></textarea>
      </label>
      <button
        className="btn btn-primary"
        onClick={savePost}
        disabled={!isValid}
      >
        Publicar
      </button>
    </section>
  )
}

export default AddPostComponent
