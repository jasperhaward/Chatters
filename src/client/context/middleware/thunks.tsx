import type { Action, Dispatch } from "../index";

export type Thunk<A extends Action, S> = (
    dispatch: Dispatch<A>,
    state: S
) => void | Promise<void>;

export type DispatchWithThunk<A extends Action, S> = (
    arg: A | Thunk<A, S>
) => void;

export type ThunkMiddleWare = <A extends Action, S>(
    dispatch: Dispatch<A>,
    state: S
) => DispatchWithThunk<A, S>;

const thunks: ThunkMiddleWare = <A extends Action, S>(
    dispatch: Dispatch<A>,
    state: S
) => {
    return (arg: A | Thunk<A, S>) => {
        if (typeof arg === "function") {
            arg(dispatch, state);
        } else {
            dispatch(arg);
        }
    };
};

export default thunks;
