import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import contacts from './data/contactsData';
import ContactsList from './components/ContactsList';

export default function App() {

  return (
    <SafeAreaView style={styles.container} >
      <StatusBar style='light'  backgroundColor='rgba(11, 35, 228, 0.8)'/>
      <ContactsList  contacts={contacts}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgba(209, 207, 207, 0.7)',
    alignItems: 'center',
  }
});
