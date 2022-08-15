import React, {createContext, useState, useEffect, useContext} from 'react'
import {useSupportedCurrencies} from '../hooks/useSupportedCurrencies'
import {usePriceChanges} from '../hooks/usePriceChanges'

// create context
const MarketContext = createContext({
    isLoading: false,
    marketData: [],
    setFilter: undefined
})

export const MarketProvider = ({children}) => {
    const [marketData, setMarketData] = useState([])
    const [filter, setFilter] = useState(null)

    const {isLoading: isCurrenciesLoading, data: currenciesData} = useSupportedCurrencies()
    const {
        isRefetching,
        isLoading: isPriceChangesLoading,
        data: priceChangesData
    } = usePriceChanges()
    useEffect(() => {
        if (!isPriceChangesLoading && !isCurrenciesLoading && isRefetching) {
            const mappedData = currenciesData.map((data) => {
                return {...data, price: priceChangesData[`${data.currencySymbol.toLowerCase()}/idr`]}
            })
            setMarketData(mappedData)
        }
    }, [isPriceChangesLoading, isCurrenciesLoading, isRefetching])

    return (
        <MarketContext.Provider value={{isLoading: isCurrenciesLoading, marketData, setFilter}}>
            {children}
        </MarketContext.Provider>
    )
}

export const useMarketContext = () => useContext(MarketContext)

