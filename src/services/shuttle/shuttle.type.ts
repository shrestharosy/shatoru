export interface IStop {
    id: string;
    name: string;
    abbreviation: string;
}

export interface IOption {
    label: string;
    value: string;
}

export interface ICreateShuttlePayload {
    shuttle: string;
    start_time: Date;
    end_time: Date;
    stops: IStopJSON;
    days: Array<string>;
}

export interface IStopJSON {
    // key : id pf shuttle stop
    // value: interval
    [key: string]: number;
}
