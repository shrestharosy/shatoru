import axiosInstance from 'src/libs/util/axios';

const login = async (data: ILogin): Promise<ILoginResponse> => {
    const response = await axiosInstance.post(`/auth/login/`, {
        ...data,
    });
    return response.data;
};

export const authService = {
    login,
};
