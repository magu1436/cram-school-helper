import axios from "axios";
import { useEffect, useState } from "react";

/**
 * `Axios` を利用したデータフェッチカスタムフック.
 * @param app アプリケーション名
 * @returns 返却データを保持する連想配列
 */
const useFetch = <T,>(app: string) => {

    const root_url = process.env.VITE_ROOT_URL;
    if (!root_url) throw new Error("ルートURL環境変数が指定されていません.");
    const url = root_url + (!app.startsWith("/") && "/") + app;

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