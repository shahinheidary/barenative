import { Text, View, Button, StyleSheet } from "react-native";
import { useAuth } from './authContext'; // Assuming authContext is in the same app directory

export default function Index() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    // Navigation to /login will be handled by the logic in _layout.tsx
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App!</Text>
      <Text style={styles.subtitle}>This is the main application screen.</Text>
      <View style={styles.buttonContainer}>
        <Button title="Logout" onPress={handleLogout} color="#ff6347" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff', // AliceBlue for a light, friendly background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    width: '60%',
    borderRadius: 8, // Rounded corners for the button container (visual only if button itself doesn't support it)
    overflow: 'hidden', // Ensures button respects container's border radius if it has its own styling
  }
});
