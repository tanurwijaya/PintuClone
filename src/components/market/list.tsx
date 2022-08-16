import React, {useRef, useEffect, useState} from 'react'
import {FlatList, StyleSheet, Text, View, Animated} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import {SvgUri} from 'react-native-svg'
import {useMarketContext} from '../../contexts/MarketContext'
import {thousandSeparator} from '../../utils/strings'

const AssetPrice = ({dayPercentage, latestPrice}) => {
    const priceRef = useRef();
    const [animation] = useState(new Animated.Value(0))

    const isNegative = dayPercentage?.[0] === '-'
    const colorTheme = isNegative ? '#D34E47' : '#52A56A'
    const iconName = isNegative ? 'caretdown' : 'caretup'

    useEffect(() => {
        if (priceRef.current) {
            handleAnimation(priceRef.current - latestPrice);
        }
        priceRef.current = latestPrice;
    }, [latestPrice]);


    const handleAnimation = (diffPrice: number) => {
        Animated.timing(animation, {
            toValue: diffPrice > 0 ? 1 : -1,
            duration: 5,
            useNativeDriver: false
        }).start(() => {
            Animated.timing(animation, {
                toValue: 0,
                duration: 1500,
                useNativeDriver: false
            }).start()
        })
    }

    const colorInterpolation = animation.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: ['rgb(211,78,71)', "rgb(30,30,30)", 'rgb(82,165,106)']
    })

    return (
        <View style={{alignItems: 'flex-end'}}>
            <Animated.Text
                style={{
                    color: colorInterpolation,
                    fontSize: 16,
                    fontWeight: 'bold'
                }}>Rp {thousandSeparator(latestPrice)}</Animated.Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 4}}>
                <AntDesign name={iconName} size={18} color={colorTheme}/>
                <Text style={{color: colorTheme, fontSize: 16, fontWeight: '600'}}>{Math.abs(dayPercentage)}%</Text>
            </View>
        </View>
    )
}

const AssetItem = ({item}) => {
    const {color, logo, name, currencySymbol, price} = item
    const {day, latestPrice} = price
    return (
        <View style={styles.itemContainer}>
            <SvgUri width="48"
                    color={color}
                    height="48"
                    uri={logo}/>
            <View style={{flex: 1, marginHorizontal: 16}}>
                <Text style={{fontWeight: 'bold', color: '#1D1D1F', fontSize: 16}}>{name}</Text>
                <Text style={{color: '#A7A7A7', fontSize: 16}}>{currencySymbol}</Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
                <AssetPrice latestPrice={latestPrice} dayPercentage={day}/>
            </View>
        </View>
    )
}

const AssetList = (props) => {
    const {style} = props
    const {marketData} = useMarketContext()
    return (
        <FlatList style={style} data={marketData} renderItem={({item}) => <AssetItem item={item}/>}
                  ItemSeparatorComponent={() => <View
                      style={{marginVertical: 16, width: '100%', backgroundColor: '#F4F4F4', height: 1}}/>}/>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16
    },
})

export default AssetList
