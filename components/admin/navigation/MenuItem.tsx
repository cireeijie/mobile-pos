import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'

interface MenuItemProps {
    title: string,
    icon: any,
    isActive?: boolean,
    showTitle: boolean,
    menuFunction?: (title: string) => any 
}

const MenuItem = ({title, icon, isActive, showTitle, menuFunction}: MenuItemProps) => {

  return (
    <Pressable onPress={() => menuFunction && menuFunction(title)} style={{padding: 15}}>
        <Image style={{width: 20, height: 20}} source={isActive ? icon.active : icon.default} alt={title}/>
        <Text style={!showTitle && {display: 'none'}}>{title}</Text>
    </Pressable>
  )
}

export default MenuItem