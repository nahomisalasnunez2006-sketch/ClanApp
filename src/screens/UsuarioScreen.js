import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';
import TarjetaUsuario from '../components/TarjetaUsuario';
import { usuario, juegos, clanes } from '../data';

// Pantalla 1: perfil del usuario, sus juegos y sus clanes
export default function UsuarioScreen({ navigation }) {
  return (
    <ScrollView style={styles.pantalla} contentContainerStyle={{ padding: 16 }}>
      {/* Componente reutilizable con la info basica del usuario */}
      <TarjetaUsuario {...usuario} />

      <Text style={styles.titulo}>Juegos</Text>
      {/* horizontal: la lista se desliza a la derecha
          flexWrap nowrap: los juegos no bajan de linea, siguen en la misma fila
          alignItems center: centrados verticalmente */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filaJuegos}
      >
        {juegos.map((juego) => (
          <View key={juego.id} style={[styles.juego, { backgroundColor: juego.color }]}>
            <Text style={styles.textoJuego}>{juego.nombre}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.titulo}>Clanes</Text>
      {clanes.map((clan) => (
        // Al tocar un clan navegamos a la pantalla Clan y le mandamos su id
        <Pressable
          key={clan.id}
          style={({ pressed }) => [styles.clan, pressed && { opacity: 0.6 }]}
          onPress={() => navigation.navigate('Clan', { clanId: clan.id })}
        >
          {/* Imagen del clan a la izquierda */}
          <View style={[styles.imagenClan, { backgroundColor: clan.color }]} />
          <View>
            <Text style={styles.nombreClan}>{clan.nombre}</Text>
            <Text style={styles.puesto}>{clan.puesto} · {clan.juego}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: '#1E1F22' },
  titulo: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginVertical: 12 },
  filaJuegos: { flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center', gap: 10 },
  juego: {
    width: 110,
    height: 110,
    borderRadius: 14,
    justifyContent: 'flex-end',
    padding: 8,
  },
  textoJuego: { color: '#fff', fontWeight: 'bold' },
  clan: {
    flexDirection: 'row', // imagen a la izquierda, texto a la derecha
    alignItems: 'center',
    backgroundColor: '#2B2D31',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },
  imagenClan: { width: 60, height: 60, borderRadius: 12, marginRight: 12 },
  nombreClan: { color: '#fff', fontSize: 16, fontWeight: '600' },
  puesto: { color: '#B5BAC1' },
});
