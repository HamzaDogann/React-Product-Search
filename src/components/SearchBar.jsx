import FilterMode from "./FilterMode";

function SearchBar({ inputValue, onInputChange }) {


  return (
    <div className="w-full px-4 flex items-center">
      {/* Input */}
      <input className="mx-1 p-3 w-9/12 text-gray-900 rounded-full bg-gray-100 border-4 border-gray-200 focus:outline-none focus:border-cyan-500 transition-colors duration-300 hover:bg-gray-200"
        type="text"
        placeholder="Search Product"
        value={inputValue}
        onChange={onInputChange}
      />

      <FilterMode inputValue={inputValue} />
    </div>
  )
}

export default SearchBar