export const parseTime = (timestamp: Date) => {
    const hour = new Date(timestamp).getHours();
    const minute = new Date(timestamp).getMinutes();
    const formattedMinute = minute < 10 ? `0${minute}` : minute;
    const currentTime =
        hour >= 12
            ? `${hour - 12}:${formattedMinute} pm`
            : `${hour}:${formattedMinute} am`;
    return currentTime;
};
