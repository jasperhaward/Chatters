export type Action = {
    type: string;
    payload?: any;
};

export type Dispatch<A extends Action> = (action: A) => void;
