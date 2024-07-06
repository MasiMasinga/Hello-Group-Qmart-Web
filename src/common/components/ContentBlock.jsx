import React from "react";

//MUI
import Paper from "@mui/material/Paper";

const ContentBlock = ({
    children,
    sx,
    elevation = 1,
    overflow = "hidden",
    onClick,
    ...rest
}) => {
    return (
        <Paper
            onClick={onClick}
            sx={{
                overflow: { overflow },
                borderRadius: "7px",
                ...sx,
            }}
            variant="elevation"
            elevation={elevation}
            {...rest}
        >
            {children}
        </Paper>
    );
};

export default ContentBlock;
