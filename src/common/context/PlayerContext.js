import React, { useState, useEffect, useContext, createContext } from 'react';

// Context
import { StateContext } from './StateContext';

// API
import GeneralService from '../../services/general/general.service';

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
    const { setNotificationMessage } = useContext(StateContext);

    const [players, setPlayers] = useState([]);
    const [schedule, setSchedule] = useState([]);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPlayers();
        fetchSchedule();
        fetchResults();
    }, []);

    const fetchPlayers = async () => {
        setLoading(true);
        const { status, data } = await GeneralService.getPlayers();
        if (status) {
            setPlayers(data);
        } else {
            setNotificationMessage({
                message: 'Error fetching players.',
                type: 'error',
            });
        }
        setLoading(false);
    };

    const fetchSchedule = async () => {
        setLoading(true);
        const { status, data } = await GeneralService.getSchedule();
        if (status) {
            setSchedule(data);
        } else {
            setNotificationMessage({
                message: 'Error fetching schedule.',
                type: 'error',
            });
        }
        setLoading(false);
    };

    const fetchResults = async () => {
        setLoading(true);
        const { status, data } = await GeneralService.getResults();
        if (status) {
            setResults(data);
        } else {
            setNotificationMessage({
                message: 'Error fetching results.',
                type: 'error',
            });
        }
        setLoading(false);
    };

    let value = {
        loading,
        players,
        schedule,
        results,
    };

    return (
        <PlayerContext.Provider value={value}>
            {children}
        </PlayerContext.Provider>
    );
};
