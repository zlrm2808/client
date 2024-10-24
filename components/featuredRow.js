import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { themeColors } from '../theme'
import { ScrollView } from 'react-native'
import { RestaurantCard } from '../components/restaurantCard'

export default function FeaturedRow({title, description, restaurants}) {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: themeColors.text }} className="font-semibold">View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15
        }}
        className="overflow-visible py-5"
      >
        {restaurants}
      </ScrollView>
    </View>
  )
}