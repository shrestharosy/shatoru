import { AxiosResponse } from 'axios';
import axiosInstance from 'src/libs/util/axios';
import {
    IStop,
    IShuttleSchedulePayload,
    IShuttleResponse,
    IScheduleResponse,
} from './shuttle.type';

const fetchStops = async () => {
    const response: AxiosResponse<Array<IStop>> = await axiosInstance.get(
        `/stops/`
    );
    return response.data;
};

const createStop = async (name: string, abbreviation: string) => {
    const response: AxiosResponse<Array<IStop>> = await axiosInstance.post(
        `/stops/`,
        { name, abbr: abbreviation }
    );
    return response.data;
};

const deleteStop = async (id: string) => {
    const response = await axiosInstance.delete(`/stops/${id}/`);
    return response.data;
};

const fetchShuttles = async () => {
    const response: AxiosResponse<Array<IShuttleResponse>> =
        await axiosInstance.get(`/shuttles/`);
    return response.data;
};

const fetchSchedule = async (id) => {
    const response: AxiosResponse<IScheduleResponse> = await axiosInstance.get(
        `/shuttles/schedules/${id}/`
    );
    return response.data;
};

const createShuttle = async (payload: IShuttleSchedulePayload) => {
    const response = await axiosInstance.post(`/shuttles/schedules/`, payload);
    return response.data;
};

const deleteShuttle = async (id: number) => {
    const response = await axiosInstance.delete(`/shuttles/${id}/`);
    return response.data;
};

export const shuttleService = {
    fetchStops,
    createShuttle,
    fetchShuttles,
    deleteShuttle,
    createStop,
    deleteStop,
    fetchSchedule,
};
