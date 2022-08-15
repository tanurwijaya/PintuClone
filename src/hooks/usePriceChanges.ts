import {useQuery} from '@tanstack/react-query'
import {PRICE_CHANGES_API} from "../configs/apis";

export const usePriceChanges = () => {
    const context = useQuery(['priceChanges'], () =>
            fetch(PRICE_CHANGES_API).then(res =>
                res.json()
            ),
        {refetchInterval: 1000}
    );
    let data = {}
    if (Array.isArray(context.data?.payload)) {
        context.data?.payload.forEach((item) => {
            data[item.pair] = item
        })
    }
    return {...context, data: data};
};
