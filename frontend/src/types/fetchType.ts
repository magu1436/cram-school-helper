export type fetchReturnType<T> = {
    data: T | undefined,
    isLoading: boolean,
    error: Error | undefined,
};

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";