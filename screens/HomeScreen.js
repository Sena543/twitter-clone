import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';
import { Ionicons, FontAwesome, Octicons } from '@expo/vector-icons';


export default function HomeScreen() {
  return (
      <View style={{backgroundColor:'#e3e3e3', flex:1}} >
         <View style={{ flexDirection:'row'}}>
         <View style={{backgroundColor:'white', height:100, flex:3, paddingHorizontal:10}}>
          <Image source={require('../assets/images/lantern.jpg')}style={{height:80, width:80, borderRadius:40, justifyContent:'center'}}/>
        </View>
        <View style={{backgroundColor:'white', height:100, flex:8}}>
          <Text style={{fontSize:30}}>Senanu Azanu</Text>
          <Text>Apple ID, Cloud, iTunes & App Store </Text>
        </View>
        <View style={{backgroundColor:'white',height:100, flex:1, justifyContent:'center', paddingHorizontal:10}}>
          <Ionicons name="ios-arrow-forward" color='#aaaaaa' size={20}/>
        </View>
         </View>
         <View style={{backgroundColor:'white', marginTop:1,flexDirection:"row",}}>
         <View style={{ flex: 12, alignItems: "center", justifyContent: "space-between", flexDirection: "row"}}>
              <Text style={{ paddingHorizontal: 20, fontSize:20}}>Finish setting up your iPhone</Text>
              <View style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: "red", justifyContent: "center", alignItems: "center"}}>
                  <Text style={{color: "#ffffff", fontWeight: "bold"}}>1</Text>
              </View>
          </View>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}} >
                <Ionicons name="ios-arrow-forward" color='#aaaaaa' size={26} />
          </View>
      </View>
      <View style={{marginTop:30, backgroundColor:'white', flexDirection:'row',  height:30}}>
              <Ionicons name='ios-airplane' size={26} color='white' style={{flex:1, paddingHorizontal:8, justifyContent:'space-between',marginLeft:9, backgroundColor:'orange', borderRadius:5}}/>
              <Text style={{flex:10, paddingHorizontal:20, fontSize:20}}>Airplane Mode</Text>
              <View style={{flex:3,justifyContent:'center', alignItems:'center'}}>
                <FontAwesome name='toggle-off' color='#aaaaaa' size={26}/>
              </View>
        </View>
        <View style={{marginTop:1, backgroundColor:'white', flexDirection:'row',  height:30}}>
            <View >
                <Ionicons name='ios-wifi' color='white' size={26} style={{justifyContent:'space-between',flex:1,marginLeft:10,backgroundColor:'blue', borderRadius:5, width:30}}/>
            </View>
            <View>
              <Text style={{flex:5, fontSize:20, paddingHorizontal:20}}>Wi-Fi</Text>
            </View>
            <View style={{alignItems:'flex-end',justifyContent:'center',flex:20}}>
                <Text style={{paddingHorizontal:20, fontSize:20, color:'#aaaaaa'}}>STUDENT</Text>
            </View>
            <View style={{flex:2, alignItems: "center", justifyContent:'center'}} >
                <Ionicons size={27} color='#aaaaaa' name='ios-arrow-forward'/>
            </View>
        </View>
        <View style={{marginTop:1, backgroundColor:'white', flexDirection:'row', height:30}}>
              <Ionicons name='ios-bluetooth' size={26} color='white' style={{flex:1, paddingHorizontal:8, justifyContent:'space-between',marginLeft:10, backgroundColor:'blue', borderRadius:6}}/>
              <Text style={{flex:10, paddingHorizontal:20, fontSize:16}}>Bluetooth</Text>
              <View style={{flex:3,justifyContent:'center', alignItems:'center'}}>
                <Ionicons name='ios-arrow-forward' color='#aaaaaa' size={26}/>
              </View>
        </View>
        <View style={{marginTop:1, backgroundColor:'white', flexDirection:'row',  height:30}}>
              <Ionicons name='ios-cellular' size={26} color='white' style={{flex:1, paddingHorizontal:8, justifyContent:'space-between',marginLeft:10, backgroundColor:'#04bd23', borderRadius:6}}/>
              <Text style={{flex:10, paddingHorizontal:20, fontSize:16}}>Mobile Data</Text>
              <View style={{flex:3,justifyContent:'center', alignItems:'center'}}>
                <Ionicons name='ios-arrow-forward' color='#aaaaaa' size={26}/>
              </View>
        </View>
        <View style={{marginTop:1, backgroundColor:'white', flexDirection:'row',  height:30}}>
              <Octicons name='link' size={27} color='white' style={{flex:1, paddingHorizontal:8, justifyContent:'space-between',marginLeft:10, backgroundColor:'#04bd23', borderRadius:6}}/>
              <Text style={{flex:10, paddingHorizontal:20, fontSize:16}}>Personal Hotspot</Text>
              <View style={{flex:3,justifyContent:'center', alignItems:'center'}}>
                <Ionicons name='ios-arrow-forward' color='#aaaaaa' size={26}/>
              </View>
        </View>
      </View>
  );
}

HomeScreen.navigationOptions = {
  title: 'Settings',
};


