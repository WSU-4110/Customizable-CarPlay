import { NativeEventEmitter, NativeModules } from 'react-native';

const { AlanManager, AlanEventEmitter } = NativeModules;
const alanEventEmitter = new NativeEventEmitter(AlanEventEmitter);

let subscription;

export const initializeAlanEmitter = () => {
    subscription = alanEventEmitter.addListener('command', (data) => {
        console.log(`got command event ${JSON.stringify(data)}`);
    });
};

export const terminateAlanEmitter = () => {
    if (subscription) {
        subscription.remove();
    }
};
