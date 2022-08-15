import { useQuery } from '@tanstack/react-query'
import {SUPPORTED_CURRENCIES_API} from "../configs/apis";

export const useSupportedCurrencies = () => {
    const getCurrencies = async () => {
        const {code, message,payload} = await fetch(SUPPORTED_CURRENCIES_API).then(res =>
            res.json()
        )
        // remove idr (index 0)
        payload?.shift()
        return {code, message, payload};
    };

    const context = useQuery(['supportedCurrencies'], getCurrencies);
    const data = context.data?.payload

    return { ...context, data: data ?? [] };
};
