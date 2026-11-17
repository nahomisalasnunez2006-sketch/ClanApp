import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UsuarioScreen from './src/screens/UsuarioScreen';
import ClanScreen from './src/screens/ClanScreen';
import AsignacionScreen from './src/screens/AsignacionScreen';

// Stack: las pantallas se apilan una encima de otra (y se puede regresar)
const Stack = createNativeStackNavigator();

// Estilo oscuro para la barra de titulo, parecido a Discord
const opciones = {
  headerStyle: { backgroundColor: '#2B2D31' },
  headerTintColor: '#fff',
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Usuario" screenOptions={opciones}>
        <Stack.Screen name="Usuario" component={UsuarioScreen} options={{ title: 'Mi perfil' }} />
        <Stack.Screen name="Clan" component={ClanScreen} options={{ title: 'Clan' }} />
        <Stack.Screen name="Asignacion" component={AsignacionScreen} options={{ title: 'Asignaciones' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
