import React from 'react'
import {FlatList, StyleSheet, Text, View} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import {SvgUri} from 'react-native-svg'
import {useMarketContext} from '../../contexts/MarketContext'
import {thousandSeparator} from '../../utils/strings'

const AssetPrice = ({price}) => {
	const isNegative = price?.[0] === '-'
	const colorTheme = isNegative ? '#D34E47' : '#52A56A'
	const iconName = isNegative ? 'caretdown' : 'caretup'
	return(
		<View style={{flexDirection: 'row', alignItems: 'center', marginTop: 4}}>
			<AntDesign name={iconName} size={18} color={colorTheme}/>
			<Text style={{color: colorTheme, fontSize: 16, fontWeight: '600'}}>{Math.abs(price)}%</Text>
		</View>
	)
}

const AssetItem = ({item}) => {
	const { color, logo, name, currencySymbol, price} = item
	const { day, latestPrice } = price
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
				<Text style={{color: '#1D1D1F', fontSize: 16, fontWeight: 'bold'}}>Rp {thousandSeparator(latestPrice)}</Text>
				<AssetPrice price={day}/>
			</View>
		</View>
	)
}

const AssetList = (props) => {
	const {style} = props
	const { marketData } = useMarketContext()
	return (
		<FlatList style={style} data={marketData} renderItem={({item}) => <AssetItem item={item}/>} ItemSeparatorComponent={() => <View
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
