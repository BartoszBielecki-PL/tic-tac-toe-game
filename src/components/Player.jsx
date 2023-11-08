import React, { useState } from 'react';

const Player = ({ initialName, playerSymbol, isActive }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    const handleEditClick = () => {
        setIsEditing((isEditing) => !isEditing);
    }

    const handleChangePlayerName = (event) => {
        setPlayerName(event.target.value);
    }

    let playerNameField = <span className="player-name">{playerName}</span>

    if (isEditing) {
        playerNameField = <input type="text" required value={playerName} onChange={handleChangePlayerName} />
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {playerNameField}
                <span className="player-symbol">{playerSymbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'SAVE' : 'EDIT'}</button>
        </li>
    )
}

export default Player;