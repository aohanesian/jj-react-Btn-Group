import React from 'react';

function BtnGroup(props) {

    const [activeButton, setActiveButton] = React.useState(null);

    function handleClick(id) {
        setActiveButton(id);
    }

    return (
        <div className="btn-group" role="group">
            <button
                onClick={() => handleClick(1)}
                disabled={activeButton === 2}
                className={`btn btn-secondary left  ${activeButton === 1 ? 'active' : ''}`}
            >
                left
            </button>
            <button
                onClick={() => handleClick(2)}
                disabled={activeButton === 1}
                className={`btn btn-secondary right ${activeButton === 2 ? 'active' : ''}`}
            >
                right
            </button>
        </div>)
}

export default BtnGroup;