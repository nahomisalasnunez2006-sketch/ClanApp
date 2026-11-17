import { useState } from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import { clanes } from '../data';

// Pantalla 3: imagen del juego y lista de tareas del clan
export default function AsignacionScreen({ route }) {
  const { clanId } = route.params;
  const clan = clanes.find((c) => c.id === clanId);

  // useState guarda las tareas; al cambiar, React vuelve a dibujar la pantalla
  const [tareas, setTareas] = useState(clan.tareas);

  // Marca o desmarca una tarea (activa / inactiva)
  const cambiarTarea = (id) => {
    setTareas(tareas.map((t) => (t.id === id ? { ...t, hecha: !t.hecha } : t)));
  };

  const hechas = tareas.filter((t) => t.hecha).length;

  return (
    <ScrollView style={styles.pantalla} contentContainerStyle={styles.contenido}>
      {/* Imagen del juego: no usa flex, solo tiene tamano fijo */}
      <View style={[styles.imagenJuego, { backgroundColor: clan.color }]}>
        <Text style={styles.nombreJuego}>{clan.juego}</Text>
      </View>

      <Text style={styles.progreso}>
        {hechas} de {tareas.length} tareas completadas
      </Text>

      {/* Lista de tareas alineada a la izquierda */}
      <View style={styles.lista}>
        {tareas.map((tarea) => (
          <Pressable key={tarea.id} style={styles.fila} onPress={() => cambiarTarea(tarea.id)}>
            {/* Casilla: se rellena cuando la tarea esta hecha */}
            <View style={[styles.casilla, tarea.hecha && styles.casillaActiva]}>
              {tarea.hecha && <Text style={styles.palomita}>✓</Text>}
            </View>
            <Text style={[styles.textoTarea, tarea.hecha && styles.tachado]}>{tarea.texto}</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: '#1E1F22' },
  // justifyContent center: el contenido se acomoda al centro siguiendo el flex
  contenido: { padding: 16, justifyContent: 'center', alignItems: 'center' },
  imagenJuego: {
    width: '100%',
    height: 160,
    borderRadius: 16,
    justifyContent: 'flex-end',
    padding: 12,
  },
  nombreJuego: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
  progreso: { color: '#B5BAC1', marginVertical: 14 },
  lista: { width: '100%', alignItems: 'flex-start' }, // alineado a la izquierda
  fila: {
    flexDirection: 'row', // casilla y texto en la misma fila
    flexWrap: 'nowrap',
    alignItems: 'center', // casilla y texto centrados entre si
    marginBottom: 14,
  },
  casilla: {
    width: 26,
    height: 26,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#B5BAC1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  casillaActiva: { backgroundColor: '#5865F2', borderColor: '#5865F2' },
  palomita: { color: '#fff', fontWeight: 'bold' },
  textoTarea: { color: '#fff', fontSize: 16 },
  tachado: { textDecorationLine: 'line-through', color: '#80848E' },
});
