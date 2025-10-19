
export type Setter<T> = (stateValue: T) => void;

export type StateSet<T> = ({
    value: T,
    setter: Setter<T>,
})