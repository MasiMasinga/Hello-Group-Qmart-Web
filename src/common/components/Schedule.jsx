import React, { useContext } from 'react';

// Context
import { PlayerContext } from '../context/PlayerContext';

// Mui
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';

// Utils
import { formatDate } from '../utils/helpers';


const Schedule = () => {
    const { schedule } = useContext(PlayerContext);

    console.log(schedule.data);

    return (
        <Stack spacing={2}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Time</TableCell>
                            <TableCell>Opponent</TableCell>
                            <TableCell>Venue</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            schedule.loading ? (
                                <TableRow>
                                    <TableCell>
                                        <Skeleton variant="text" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton variant="text" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton variant="text" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton variant="text" />
                                    </TableCell>
                                </TableRow>
                            ) : schedule.data.map(match => (
                                <TableRow key={match.date + match.opponent}>
                                    <TableCell>
                                        {formatDate(match.date)}
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "bold" }}>
                                        {match.time}
                                    </TableCell>
                                    <TableCell>{match.opponent}</TableCell>
                                    <TableCell>{match.venue}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>

    );
};

export default Schedule;
