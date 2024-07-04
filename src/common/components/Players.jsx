import React, { useContext } from 'react';

// Context
import { PlayerContext } from '../context/PlayerContext';

const Players = () => {
    const { players } = useContext(PlayerContext);

    return (
        <div>
            <h2>Player Profiles</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Goals</th>
                        <th>Assists</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map(player => (
                        <tr key={player.id}>
                            <td>{player.name}</td>
                            <td>{player.position}</td>
                            <td>{player.goals}</td>
                            <td>{player.assists}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Players;
