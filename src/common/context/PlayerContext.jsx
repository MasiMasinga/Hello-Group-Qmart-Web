import React, { useState, useEffect, useContext, createContext } from 'react';

// Context
import { StateContext } from './StateContext';

// API
import GeneralService from '../../services/general/general.service';


export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
    const { setNotificationMessage } = useContext(StateContext);

    const [players, setPlayers] = useState({
        loading: true,
        data: [],
    });
    const [schedule, setSchedule] = useState({
        loading: true,
        data: [],
    });
    const [results, setResults] = useState({
        loading: true,
        data: [],
    });

    useEffect(() => {
        fetchPlayers();
        fetchSchedule();
        fetchResults();
    }, []);

    const fetchPlayers = async () => {
        const { status, data } = await GeneralService.getPlayers();
        if (status) {
            setPlayers({ data: data })
        } else {
            setNotificationMessage({
                message: 'Error fetching players.',
                type: 'error',
            });
            setPlayers({ loading: false });
        }
    };

    const fetchSchedule = async () => {
        const { status, data } = await GeneralService.getSchedule();
        if (status) {
            setSchedule({ data: data })
        } else {
            setNotificationMessage({
                message: 'Error fetching schedule.',
                type: 'error',
            });
            setSchedule({ loading: false });
        }
    };

    const fetchResults = async () => {
        const { status, data } = await GeneralService.getResults();
        if (status) {
            setResults({ data: data })
        } else {
            setNotificationMessage({
                message: 'Error fetching results.',
                type: 'error',
            });
            setResults(false);
        }
    };

    let value = {
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
