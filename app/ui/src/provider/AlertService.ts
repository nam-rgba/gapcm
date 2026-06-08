interface AlertHandler {
    info: (message: string, title?: string) => void;
    success: (message: string, title?: string) => void;
    warning: (message: string, title?: string) => void;
    error: (message: string, title?: string) => void;   
}

let alert : AlertHandler | null = null;

export const setAlertHandler = (handler: AlertHandler) => {
    alert = handler;
}

export const getAlertHandler = () => {
    if(!alert) {
        throw new Error("Alert handler is not set");
    }
    return alert;
}