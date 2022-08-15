import {Text, View, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const headerOptions = {
    headerTitle: (props) => {
        return(<Text style={{fontSize:24, fontWeight:'bold'}}>{props?.children}</Text>)
    },
    headerTitleAlign: 'left',
    headerStyle:{
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    },
    headerRight: () => (
        <View style={{flexDirection:'row', marginRight: 16}}>
            <TouchableOpacity>
                <AntDesign name="staro" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:8}}>
                <Ionicons name="search" size={24} color="black" />
            </TouchableOpacity>
        </View>
    ),
}

export default headerOptions
