import { BASE_URL } from '@env';

class Config {
    constructor() {}

    start() {
        console.log('App has started');
    }
    update() {
        console.log('App has updated');
    }

    getKeys() {
        console.log(BASE_URL);
        return BASE_URL ?? '';
    }
}

const configInstance = new Config();

Object.freeze(configInstance);

export default configInstance;
