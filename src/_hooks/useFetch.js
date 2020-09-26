import { useEffect, useState } from "react"

export default function useFetch(url, defaultData=null) {
    const [data, setData] = useState(defaultData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function init() {
            setLoading(true);
            try {
                let data = await fetch(url);
                let json = await data.json();
                console.log(json);
                setData(json);
            }
            catch (e) {
                setError(e);
            }
            finally {
                setLoading(false);
            }
        }

        init();
    },
        [url]);

    return { data, loading, error }
}