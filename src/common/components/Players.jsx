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

const Players = () => {
    const { players } = useContext(PlayerContext);

    return (
        <Stack spacing={2}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Rank</TableCell>
                            <TableCell>Position</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Start Date</TableCell>
                            <TableCell>Image</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            players.loading ?
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
                                    <TableCell>
                                        <Skeleton variant="text" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton variant="text" />
                                    </TableCell>
                                </TableRow>
                                :
                                players.data.map((player) => (
                                    <TableRow key={player.name}>
                                        <TableCell>{player.name}</TableCell>
                                        <TableCell>{player.rank}</TableCell>
                                        <TableCell>{player.position}</TableCell>
                                        <TableCell>{player.age}</TableCell>
                                        <TableCell>{player.start_date}</TableCell>
                                        <TableCell>
                                            <a
                                                href={player.google_image_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src={player.google_image_url}
                                                    alt={player.name}
                                                    style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                                                />
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

export default Players;
