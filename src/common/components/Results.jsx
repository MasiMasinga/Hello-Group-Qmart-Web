import React, { useContext } from 'react';

// Context
import { PlayerContext } from '../context/PlayerContext';

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
import Link from '@mui/material/Link';

// Utils
import { formatDate } from '../utils/helpers';
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
                                    <TableCell>
                                        {formatDate(match.date)}
                                    </TableCell>
                                    <TableCell>{match.opponent}</TableCell>
                                    <TableCell
                                        sx={{
                                            fontWeight: 'bold',
                                            color: match.score.split('-').reduce((acc, curr, idx, src) => {
                                                if (idx === 0) return acc; // Skip the first iteration
                                                return parseInt(curr, 10) > parseInt(src[0], 10) ? Colors.red :
                                                    parseInt(curr, 10) < parseInt(src[0], 10) ? Colors.green : Colors.yellowDark;
                                            }),
                                        }}
                                    >
                                        {match.score}
                                    </TableCell>
                                    <TableCell>
                                        <Link href={match.highlights_url} target="_blank" rel="noreferrer">
                                            Watch
                                        </Link>
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
