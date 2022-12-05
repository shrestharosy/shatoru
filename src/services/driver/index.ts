import { AxiosResponse } from 'axios';
import axiosInstance from 'src/libs/util/axios';
import { ICreateDriverPayload, IDriverResponse } from './driver.type';

const fetchdrivers = async () => {
    const response: AxiosResponse<Array<IDriverResponse>> =
        await axiosInstance.get(`/user/driver/list/`);
    return response.data;
};

const createDriver = async (payload: ICreateDriverPayload) => {
    const { firstName, lastName, ...rest } = payload;
    const response = await axiosInstance.post(`/user/driver/`, {
        ...rest,
        first_name: payload.firstName,
        last_name: payload.lastName,
    });
    return response.data;
};

export const driverService = {
    fetchdrivers,
    createDriver,
};
