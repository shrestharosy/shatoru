export interface IStop {
    id: string;
    name: string;
    abbr: string;
}

export interface IOption {
    label: string;
    value: string;
}

export interface IShuttlePayload {
    shuttle: string;
    start_time: Date;
    end_time: Date;
    stops: IStopJSON;
    days: Array<string>;
}

export interface IShuttleResponse extends IShuttlePayload {
    id: number;
}

export interface IStopJSON {
    // key : id pf shuttle stop
    // value: interval
    [key: string]: number;
}
