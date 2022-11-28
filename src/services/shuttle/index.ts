import axiosInstance from 'src/libs/util/axios';

const fetchStops = async () => {
    const response = await axiosInstance.get(`/stops/`);
    return response.data;
};

export const shuttleService = {
    fetchStops,
};
