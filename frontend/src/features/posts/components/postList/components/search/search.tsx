interface Props {
  onChange: (e: string) => void
  triggerSearch: () => void
  isTableView: boolean
  setIsTableView: (isTableView: boolean) => void
  resetSearch: () => void
}

const SearchPostComponent = ({
  onChange,
  triggerSearch,
  setIsTableView,
  isTableView,
  resetSearch,
}: Props) => {

    
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
    if (e.target.value === "") resetSearch()
  }

  return (
    <div className="flex justify-between">
      <div className="join max-w-xl">
        <input
          type="search"
          className="input join-item"
          onChange={handleSearch}
          placeholder="Buscar por nombre"
        />
        <button className="btn join-item" onClick={triggerSearch}>
          Buscar
        </button>
      </div>
      <div className="join">
        <button
          className={`btn btn-soft ${isTableView && "btn-primary"} join-item`}
          onClick={() => setIsTableView(true)}
        >
          <span className="icon-[tabler--table]"></span>
        </button>
        <button
          onClick={() => setIsTableView(false)}
          className={`btn btn-soft join-item ${!isTableView && "btn-primary"}`}
        >
          <span className="icon-[tabler--layout-grid]"></span>
        </button>
      </div>
    </div>
  )
}

export default SearchPostComponent
