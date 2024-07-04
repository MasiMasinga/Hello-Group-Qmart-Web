// src/components/Schedule.js
import React, { useContext } from 'react';

// Context
import { PlayerContext } from '../context/PlayerContext';

const Schedule = () => {
    const { schedule } = useContext(PlayerContext);
    
    return (
        <div>
            <h2>Match Schedule</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Opponent</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {schedule.map(match => (
                        <tr key={match.id}>
                            <td>{match.date}</td>
                            <td>{match.opponent}</td>
                            <td>{match.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Schedule;
