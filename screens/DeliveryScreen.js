import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { featured } from '../constants'
import { useNavigation } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps'
import { themeColors } from '../theme'
import * as Icon from "react-native-feather"

export default function DeliveryScreen() {
  const restaurant = featured.restaurants[0]
  const navigation = useNavigation()
  return (
    <View className="flex-1 mt-10 justify-center items-center">
      {/* map view */}
      <MapView
        initialRegion={{ 
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
        className="flex-1"
        mapType="standard"
        style={{ height: '100%', width: '100%' }}
      >
        <Marker
          coordinate={{ 
            latitude: restaurant.lat,
            longitude: restaurant.lng
          }}
          title={restaurant.title}
          description={restaurant.description}
          pinColor={ themeColors.bgcolor(1)}
        />
      </MapView>
      <View className="rounded-t-3xl bg-white -mt-60 relative w-full">        
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Arrival
            </Text>
            <Text className="text-3xl text-gray-700 font-extrabold">
              20-30 minutes
            </Text>
            <Text className="mt-2 text-gray-700 font-semibold">
              Your order is own its way!
            </Text>
          </View>
          <Image className="w-24 h-24 rounded-full -scale-x-90" source={require("../assets/images/bikeguy.jpg")} />
        </View>
        <View
          style={{ backgroundColor: themeColors.bgcolor(0.8) }}
          className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
        >
          <View className="p-1 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}>
            <Image className="w-12 h-12 rounded-full" source={require("../assets/images/deliveryGuy.jpg")}/>
          </View>
          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">
              Zeus Rodriguez
            </Text>
            <Text className="font-semibold text-white">
              Your Rider
            </Text>
          </View>
          <View className="flex-row items-center space-x-3 mr-3">
            <TouchableOpacity className="bg-white p-2 rounded-full mr-3">
              <Icon.Phone fill={themeColors.bgcolor(1)} stroke={themeColors.bgcolor(1)} />
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Icon.X stroke={"red"} strokeWidth={4} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}