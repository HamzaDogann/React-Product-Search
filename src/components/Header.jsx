import SearchBar from './SearchBar'


function Header({ onInputChange, inputValue }) {
    return (
        <div className="p-4 flex flex-col md:flex-row w-auto h-17 bg-gray-900 justify-around items-center">
            {/* Logo */}
            <div className="mx-12 text-center md:text-left md:mx-0">
                <h1 className="text-2xl font-bold text-cyan-500">ShoppingIsland</h1>
            </div>

            {/* Search Bar */}
            <SearchBar className="mt-4 md:mt-0" onInputChange={onInputChange} inputValue={inputValue} />
        </div>
    );
}

export default Header