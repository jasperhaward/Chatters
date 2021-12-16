import { useReducer } from "preact/hooks";
import { Form, FormEvent, FormInputs } from "./types";

export function useForm<T extends FormInputs>(initialState: T): Form<T> {
    const [state, setState] = useReducer(
        (state: T, newState: Partial<T>): T => ({ ...state, ...newState }),
        initialState
    );

    const onInput = (event: FormEvent) => {
        const { name, value, checked, type } = event.currentTarget;

        if (type === "checkbox") {
            setState({ [name]: checked } as Partial<T>);
        } else {
            setState({ [name]: value } as Partial<T>);
        }
    };

    return [state, onInput, setState];
}

export * from "./types";
