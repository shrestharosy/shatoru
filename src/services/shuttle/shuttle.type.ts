export interface IStop {
    id: string;
    name: string;
    abbr: string;
}

export interface IOption {
    label: string;
    value: string;
}

export interface IShuttleSchedulePayload {
    shuttle: string;
    start_time: string;
    end_time: string;
    stops: IStopJSON;
    schedule?: Array<IScheduleObject>;
    days: Array<string>;
}

export interface IShuttleResponse {
    id: string;
    name: string;
    schedules: Array<string>;
}

export interface IScheduleResponse extends IShuttleSchedulePayload {
    id: string;
}

export interface IScheduleObject {
    stop_name: string;
    stop_abbr: string;
    time: string;
}

export interface IStopJSON {
    // key : id pf shuttle stop
    // value: interval
    [key: string]: number;
}
