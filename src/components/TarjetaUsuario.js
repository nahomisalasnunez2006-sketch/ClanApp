import { View, Text, StyleSheet } from 'react-native';

// Componente reutilizable: muestra la informacion basica de un usuario
// Se usa en la pantalla Usuario (perfil) y en la pantalla Clan (cada miembro)
// "derecha" es opcional: permite poner algo extra del lado derecho (ej. estado de tareas)
export default function TarjetaUsuario({ nombre, subtitulo, color, derecha }) {
  return (
    <View style={styles.tarjeta}>
      {/* Avatar: circulo con la inicial del nombre */}
      <View style={[styles.avatar, { backgroundColor: color }]}>
        <Text style={styles.inicial}>{nombre[0]}</Text>
      </View>

      {/* flex: 1 hace que el texto ocupe todo el espacio sobrante */}
      <View style={{ flex: 1 }}>
        <Text style={styles.nombre}>{nombre}</Text>
        <Text style={styles.subtitulo}>{subtitulo}</Text>
      </View>

      {derecha}
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    flexDirection: 'row', // avatar y texto uno al lado del otro
    alignItems: 'center', // centrados verticalmente
    backgroundColor: '#2B2D31',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  inicial: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  nombre: { color: '#fff', fontSize: 16, fontWeight: '600' },
  subtitulo: { color: '#B5BAC1', fontSize: 13 },
});
