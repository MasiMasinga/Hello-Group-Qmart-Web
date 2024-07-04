import api from "../api.service";
import { handleError } from "../utils";

const isBrowser = typeof window !== `undefined`;

export const getSchedule = async () => {
    if (!isBrowser) return false;

    return await api
        .get(`/schedule`)
        .then(function (response) {
            if (response.status === 200) {
                return {
                    status: true,
                    data: response.data,
                };
            }
        })
        .catch(function (error) {
            return handleError(error);
        });
};

export const getPlayers = async () => {
    if (!isBrowser) return false;

    return await api
        .get(`/players`)
        .then(function (response) {
            if (response.status === 200) {
                return {
                    status: true,
                    data: response.data,
                };
            }
        })
        .catch(function (error) {
            return handleError(error);
        });

};

export const getResults = async () => {
    if (!isBrowser) return false;

    return await api
        .get(`/results`)
        .then(function (response) {
            if (response.status === 200) {
                return {
                    status: true,
                    data: response.data,
                };
            }
        })
        .catch(function (error) {
            return handleError(error);
        });
};

const GeneralService = {
    getSchedule,
    getPlayers,
    getResults,
};

export default GeneralService;
