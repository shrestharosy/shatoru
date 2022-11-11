import axiosInstance from 'src/libs/util/axios';

const fetchdrivers = async () => {
    const response = await axiosInstance.get(`character`);
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
