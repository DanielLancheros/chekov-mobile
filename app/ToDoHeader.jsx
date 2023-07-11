import { useState } from 'react'
import { Input, Button, HStack } from 'native-base'


export default function ToDoHeader ({ setToDoItems, user }) {
    
    const [newItem, setNewItem] = useState('')

    const addNewItem = () => {
        if(newItem.length < 3) return // checks for valid entry
        const newToDoItem = {
            uid: user.uid,
            title: newItem,
        }
        fetch(`https://chekov-api-dl.web.app/tasks/${user.uid}`,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newToDoItem),
    })
        .then(res => res.json())
        .then(setToDoItems)
        .catch(alert)
        .finally(() => setNewItem('')) // Clear the input box
    }

    return (
        <HStack space={2}>
            <Input value={newItem} onChangeText={setNewItem} size="lg" color="coolGray.200" flex={1} placeholder='Add Item'/>
            <Button onPress = {addNewItem}>Add</Button>
        </HStack>
    )
}