import { Button, FlatList, Platform, SectionList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Row from './Row'
import { compareNames } from '../data/contactsData'

const renderItem = ({item})=> <Row name={item.name} phone={item.phone}/>
const renderSectionHeader = (obj) => <Text>{obj.section.title}</Text>

const ContactsList = ({contacts}) => {
    const [showContact, setShowContact] = useState(false)
    const [sortedContacts, setSortedContacts] = useState(contacts)
    const [searchResult, setSearchResult] = useState(false)

    const contactsByLetters = contacts.reduce((obj, contact)=>{
        const firstLetter = contact.name[0].toUpperCase()
        return {
            ...obj,
            [firstLetter]: [...(obj[firstLetter] || []), contact]
        }
    }, {})
    const sections = Object.keys(contactsByLetters).sort().map((letter) => ({
        title:letter,
        data:contactsByLetters[letter]
    }))

    const toggleContacts = () => {
        setShowContact(prev => !prev)
    }
    const sortContacts = () => {
        setSortedContacts(prev => [...prev.sort(compareNames)])
    }
    
    const onChangeText = (input) => {
        if(!input.trim()) setSearchResult(false)
        if(input.trim()) setSearchResult(() => contacts.filter((contact)=>contact.name.toLowerCase().includes(input.toLowerCase())))
    }
    
    return (
        <View style={styles.contactsContainer}>
            <View style={styles.buttonContainer}>
                <Button title='Toggle Contacts' color={"#2B64DF"} onPress={toggleContacts}/>
                <Button title='Sort Contacts' color={"#2B64DF"} onPress={sortContacts }/>
            </View>
            <TextInput onChangeText={onChangeText} placeholder='Search' style={styles.search}/>
            {!searchResult && showContact && <SectionList  renderItem={renderItem} sections={sections} renderSectionHeader={renderSectionHeader}/>}
            {searchResult && <FlatList data={searchResult} renderItem={renderItem}/>}    
        </View>
    )
}
export default ContactsList


const styles = StyleSheet.create({
    contactsContainer:{
        width:"80%",
        alignContent:"center",
        justifyContent:"center",
        paddingTop: Platform.OS === 'android' ? 5 : 0 ,
        rowGap:5,
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    search:{
        borderWidth:1,
        borderColor:"rgba(0, 0, 0, 0.3)",
        paddingLeft:5,
        borderRadius:5,
        backgroundColor:"rgba(246, 248, 252, 0.3)",
        elevation:1
    }
})