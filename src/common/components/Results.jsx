import React, { useContext } from 'react';

// Context
import { PlayerContext } from '../context/PlayerContext';

// Components
import Typography from './Typography';

// Mui
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Colors } from '../utils/constants';


const Results = () => {
    const { results } = useContext(PlayerContext);

    return (
        <Stack spacing={2}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Opponent</TableCell>
                            <TableCell>Score</TableCell>
                            <TableCell>Highlights</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            results.loading ? (
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
                            ) : results.data.map(match => (
                                <TableRow key={match.date + match.opponent}>
                                    <TableCell>{match.date}</TableCell>
                                    <TableCell>{match.opponent}</TableCell>
                                    <TableCell>{match.score}</TableCell>
                                    <TableCell>
                                        <a href={match.highlights} target="_blank" rel="noreferrer">
                                            Watch
                                        </a>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    );
};

export default Results;
