import AsyncStorage from '@react-native-async-storage/async-storage';

let instance;

interface IStorage {
    getItem(key: string): Promise<string> | null;
    setItem(key: string, item: string): void;
    removeItem(key: string): void;
}

class StorageUtility implements IStorage {
    constructor() {
        if (instance) {
            throw new Error('New instance cannot be created!!');
        }

        instance = this;
    }

    getItem(key: string) {
        return AsyncStorage.getItem(key);
    }
    setItem(key: string, item: string) {
        AsyncStorage.setItem(key, item);
    }
    removeItem(key: string) {
        AsyncStorage.removeItem(key);
    }
}

const storageUtilityInstance = Object.freeze(new StorageUtility());

export default storageUtilityInstance;
