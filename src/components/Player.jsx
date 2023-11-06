import React, { useState } from 'react';

const Player = ({ playerName, playerSymbol }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    }

    return (
        <li>
            <span className="player">
                {isEditing ? <input type="text" required /> : <span className="player-name">{playerName}</span>}
                <span className="player-symbol">{playerSymbol}</span>
            </span>
            <button onClick={handleEditClick}>EDIT</button>
        </li>
    )
}

export default Player;