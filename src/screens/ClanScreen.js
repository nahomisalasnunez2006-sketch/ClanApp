import { View, Text, FlatList, Pressable, Alert, StyleSheet } from 'react-native';
import TarjetaUsuario from '../components/TarjetaUsuario';
import { clanes } from '../data';

// Pantalla 2: miembros del clan y si cumplieron sus tareas
export default function ClanScreen({ route, navigation }) {
  // Recibimos el id que mando la pantalla Usuario
  const { clanId } = route.params;
  const clan = clanes.find((c) => c.id === clanId);

  return (
    <View style={styles.pantalla}>
      {/* Encabezado: titulo a la izquierda y boton de llamada a la derecha */}
      <View style={styles.encabezado}>
        <Text style={styles.titulo}>Miembros</Text>
        <Pressable
          style={styles.botonLlamada}
          onPress={() => Alert.alert('Llamada grupal', `Llamando a ${clan.nombre}...`)}
        >
          <Text style={styles.textoBoton}>📞 Llamada grupal</Text>
        </Pressable>
      </View>

      {/* FlatList: la lista de miembros es la unica parte que hace scroll */}
      <FlatList
        data={clan.miembros}
        keyExtractor={(m) => m.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          // Reutilizamos el mismo componente de la pantalla Usuario
          <TarjetaUsuario
            nombre={item.nombre}
            subtitulo={item.subtitulo}
            color={item.color}
            derecha={
              // Estado activo / inactivo segun si cumplio sus tareas
              <Text style={item.cumplio ? styles.activo : styles.inactivo}>
                {item.cumplio ? '✔ Cumplio' : '⏳ Pendiente'}
              </Text>
            }
          />
        )}
      />

      {/* Barra inferior fija: esta FUERA del FlatList, por eso no se mueve al hacer scroll
          flexDirection row: Chat y Asignaciones uno al lado del otro */}
      <View style={styles.barraInferior}>
        <Pressable
          style={styles.botonBarra}
          onPress={() => Alert.alert('Chat', 'Proximamente')}
        >
          <Text style={styles.icono}>💬</Text>
          <Text style={styles.textoBarra}>Chat</Text>
        </Pressable>
        <Pressable
          style={styles.botonBarra}
          onPress={() => navigation.navigate('Asignacion', { clanId })}
        >
          <Text style={styles.icono}>🎮</Text>
          <Text style={styles.textoBarra}>Asignaciones</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: '#1E1F22' },
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between', // uno a cada extremo
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  titulo: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  botonLlamada: { backgroundColor: '#3BA55D', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 20 },
  textoBoton: { color: '#fff', fontWeight: '600' },
  activo: { color: '#3BA55D', fontWeight: '600' },
  inactivo: { color: '#B5BAC1' },
  barraInferior: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#2B2D31',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#3F4147',
  },
  botonBarra: { alignItems: 'center' },
  icono: { fontSize: 26 },
  textoBarra: { color: '#fff', fontSize: 12 },
});
