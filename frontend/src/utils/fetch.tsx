import axios from "axios";
import { useEffect, useState } from "react";

/**
 * `Axios` を利用したデータフェッチカスタムフック.
 * @param url APIのURL
 * @returns 返却データを保持する連想配列
 */
const useFetch = <T,>(url: string) => {

    const [data, setDate] = useState<T>();
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState<Error>();

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios.get(url);
                setDate(res.data);
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, isLoading, error };
}

export default useFetch;