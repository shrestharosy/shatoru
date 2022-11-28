import { AxiosResponse } from 'axios';
import axiosInstance from 'src/libs/util/axios';
import { IStop } from './shuttle.type';

const fetchStops = async () => {
    const response: AxiosResponse<Array<IStop>> = await axiosInstance.get(
        `/stops/`
    );
    return response.data;
};

export const shuttleService = {
    fetchStops,
};
