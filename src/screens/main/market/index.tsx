import {StyleSheet, View} from 'react-native';
import AssetsFilters from "../../../components/market/filter";
import {BACKGROUND_COLOR} from "../../../themes/colors";
import AssetsSort from "../../../components/market/sort";
import AssetList from "../../../components/market/list";

const MarketScreen = () => {
    return(
        <View style={styles.container}>
            <View style={{padding:16}}>
            <AssetsFilters/>
            <AssetsSort/>
            </View>
            <AssetList style={{paddingVertical:24, flex:1}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: BACKGROUND_COLOR,
    }
})

export default MarketScreen
