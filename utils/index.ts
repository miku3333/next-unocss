interface INiceTry {
    <T>(fn: () => T): T | void;
}

export const niceTry: INiceTry = (fn) => {
    try {
        return fn();
    } catch (err) {
        console.log('err ===> ', err);
    }
};

interface INiceTryAsync {
    <T>(promise: Promise<T>): Promise<T | void>;
}

export const niceTryAsync: INiceTryAsync = async (promise) => {
    try {
        return await promise;
    } catch (err) {
        console.log('err ===> ', err);
    }
};

export const marcoTask = (fn: () => void, wait = 1000) => {
    const timeout = setTimeout(() => {
        clearTimeout(timeout);
        fn();
    }, wait);
};
