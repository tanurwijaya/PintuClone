import {FlatList, StyleSheet, Text, View} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {SvgUri} from 'react-native-svg';

const AssetItem = () => {
    return (
        <View style={styles.itemContainer}>

            <SvgUri width="48"
                    color={'#E9903B'}
                    height="48"
                    uri={'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_BTC.svg'}/>
            <View style={{flex: 1, marginHorizontal: 16}}>
                <Text style={{fontWeight: 'bold', color: '#1D1D1F', fontSize: 16}}>Bitcoin</Text>
                <Text style={{color: '#A7A7A7', fontSize: 16}}>BTC</Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
                <Text style={{color: '#1D1D1F', fontSize: 16, fontWeight: 'bold'}}>Rp 315.744.141</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 4}}>
                    <AntDesign name="caretup" size={18} color="#52A56A"/>
                    <Text style={{color: '#52A56A', fontSize: 16, fontWeight: '600'}}>3.38%</Text>
                </View>
            </View>
        </View>
    )
}

const AssetList = (props) => {
    const {style} = props
    return (
        <FlatList style={style} data={['', '', '']} renderItem={() => <AssetItem/>} ItemSeparatorComponent={() => <View
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
