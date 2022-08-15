import {FlatList, StyleSheet, Text, View} from 'react-native';
import {BORDER_COLOR} from '../../themes/colors'

const FILTER = ['New', 'DeFi', 'NFT/Gaming', 'CEX']
const AssetsFilters = () => {
    return(
        <FlatList style={{marginBottom:16}} horizontal data={FILTER} renderItem={({item})=><FilterItem item={item}/>} ItemSeparatorComponent={()=><View style={{width:16}}/>}/>
    )
}

const FilterItem = ({item}) => {
    return(
        <View style={styles.itemWrapper}>
            <Text>{item}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    itemWrapper: {
        alignSelf:'flex-start',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderColor: BORDER_COLOR,
        borderWidth:1,
        borderRadius: 16,
    }
})



export default AssetsFilters
