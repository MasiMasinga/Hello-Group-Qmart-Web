import React from 'react'

// Mui
import Stack from '@mui/material/Stack'

// Components
import Typography from './Typography'

// Images
import Logo from "../../assets/Kaizer_Chiefs_logo.png"


const MainHeader = () => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            sx={{ my: 2 }}
        >
            <img src={Logo} alt="Kaizer Chiefs Logo" width="80" />
            <Typography variant="header" bold>
                Kaizer Chiefs FC
            </Typography>
        </Stack>
    )
}

export default MainHeader