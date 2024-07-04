import React, { useContext } from 'react';

// Context
import { PlayerContext } from '../context/PlayerContext';

const Results = () => {
    const { results } = useContext(PlayerContext);
   
    return (
        <div>
            <h2>Match Results</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Opponent</th>
                        <th>Score</th>
                        <th>Statistics</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map(result => (
                        <tr key={result.id}>
                            <td>{result.date}</td>
                            <td>{result.opponent}</td>
                            <td>{result.score}</td>
                            <td>{result.statistics}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Results;
