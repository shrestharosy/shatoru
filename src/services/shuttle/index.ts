import { AxiosResponse } from 'axios';
import axiosInstance from 'src/libs/util/axios';
import { IStop, ICreateShuttlePayload } from './shuttle.type';

const fetchStops = async () => {
    const response: AxiosResponse<Array<IStop>> = await axiosInstance.get(
        `/stops/`
    );
    return response.data;
};

const createShuttle = async (payload: ICreateShuttlePayload) => {
    const response = await axiosInstance.post(`/shuttles/schedules/`, payload);
    return response.data;
};

export const shuttleService = {
    fetchStops,
    createShuttle,
};
