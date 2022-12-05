import { AxiosResponse } from 'axios';
import axiosInstance from 'src/libs/util/axios';
import { IStop, IShuttlePayload, IShuttleResponse } from './shuttle.type';

const fetchStops = async () => {
    const response: AxiosResponse<Array<IStop>> = await axiosInstance.get(
        `/stops/`
    );
    return response.data;
};

const fetchShuttles = async () => {
    const response: AxiosResponse<Array<IShuttleResponse>> =
        await axiosInstance.get(`/shuttles/schedules/`);
    return response.data;
};

const createShuttle = async (payload: IShuttlePayload) => {
    const response = await axiosInstance.post(`/shuttles/schedules/`, payload);
    return response.data;
};

const deleteShuttle = async (id: number) => {
    const response = await axiosInstance.delete(`/shuttles/schedules/${id}/`);
    return response.data;
};

export const shuttleService = {
    fetchStops,
    createShuttle,
    fetchShuttles,
    deleteShuttle,
};
