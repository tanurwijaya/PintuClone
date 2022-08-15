import * as React from 'react'
import { View, Text } from 'react-native'
import { Entypo } from '@expo/vector-icons'



const DefaultComponent = () => {
	return (
		<View style={{justifyContent:'space-between', flexDirection:'row', alignItems:'center'}}>
			<Text style={{marginRight:4, fontWeight:'bold', color:'#000'}}>Default</Text>
			<Entypo name="chevron-thin-down" size={20} color="#979797" />
		</View>
	)
}
const AssetsSort = () => {
	return(
		<View style={{justifyContent:'space-between', flexDirection:'row', alignItems:'center'}}>
			<Text style={{fontWeight:'bold', color:'#000'}}>Sort By</Text>
			<DefaultComponent/>
		</View>
	)
}

export default AssetsSort
