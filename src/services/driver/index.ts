import { AxiosResponse } from 'axios';
import axiosInstance from 'src/libs/util/axios';
import { ICreateDriverPayload, IDriverResponse } from './driver.type';

const fetchdrivers = async () => {
    const response: AxiosResponse<Array<IDriverResponse>> =
        await axiosInstance.get(`/user/driver/list/`);
    return response.data;
};

const fetchDriver = async (driverId: number) => {
    const response: AxiosResponse<IDriverResponse> = await axiosInstance.get(
        `/user/driver/${driverId}/`
    );
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

const deleteDriver = async (id: number) => {
    const response = await axiosInstance.delete(`/user/driver/${id}/delete/`);
    return response.data;
};

export const driverService = {
    fetchdrivers,
    fetchDriver,
    createDriver,
    deleteDriver,
};
