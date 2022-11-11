import axiosInstance from 'src/libs/util/axios';

const sendCode = async (email: string) => {
    const response = await axiosInstance.post(`/auth/password/reset/`, {
        email,
    });
    return response.data;
};

export const userService = {
    sendCode,
};
