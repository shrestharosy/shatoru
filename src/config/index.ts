import { BASE_URL } from '@env';

interface IAppEnvConfig {
    BASE_URL: string;
}

const APP_CONFIG: IAppEnvConfig = {
    BASE_URL: BASE_URL ?? '',
};

interface IConfigValue {
    APP: IAppEnvConfig;
}

const Config: IConfigValue = {
    APP: APP_CONFIG,
};

export default Config;
