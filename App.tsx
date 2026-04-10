import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 24 }}>Hello World</Text>
      <Button title="Test Interaction" onPress={() => setMessage('Interaction Successful! ✅')} />
      {message ? (
        <Text style={{ marginTop: 24, fontSize: 18, color: 'green' }}>{message}</Text>
      ) : null}
      <StatusBar style="auto" />
    </View>
  );
}
