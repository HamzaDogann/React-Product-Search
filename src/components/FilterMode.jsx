import { MdOutlineFilterAltOff, MdOutlineFilterAlt } from 'react-icons/md';

function FilterMode({ inputValue }) {
    return (
        <div className="flex justify-center">
            <p className="mr-3 text-white">Filter Mod</p>
            <span>
                {inputValue.length > 0 ? (
                    <MdOutlineFilterAlt style={{ width: '25px', height: '25px' }} className="text-cyan-50" />

                ) : (
                    <MdOutlineFilterAltOff style={{ width: '25px', height: '25px' }} className="text-cyan-50" />
                )}
            </span>
        </div>
    );
}

export default FilterMode;
