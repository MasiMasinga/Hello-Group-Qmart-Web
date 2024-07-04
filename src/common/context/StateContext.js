import React, { createContext, useEffect, useState } from "react";

// Notistack
import { useSnackbar } from "notistack";

// Mui
import Slide from "@mui/material/Slide";

export const StateContext = createContext();

const TransitionDown = (props) => {
    return <Slide {...props} direction="down" />;
};

export const StateProvider = ({ children }) => {
    const { enqueueSnackbar } = useSnackbar();

    const [notificationMessage, setNotificationMessage] = useState();
    const [breadcrumbs, setBreadcrumbs] = useState();

    useEffect(() => {
        if (notificationMessage) {
            enqueueSnackbar(notificationMessage.message, {
                variant: notificationMessage.type,
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "center",
                },
                TransitionComponent: TransitionDown,
            });
        }
    }, [notificationMessage, enqueueSnackbar]);

    return (
        <StateContext.Provider
            value={{ setNotificationMessage, breadcrumbs, setBreadcrumbs }}
        >
            {children}
        </StateContext.Provider>
    );
};
