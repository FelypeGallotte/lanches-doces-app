import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  titulo: { fontSize: 26, fontWeight: "bold", marginBottom: 20, color: "black" },
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 14,
    elevation: 2,
  },
  nome: { fontSize: 18, fontWeight: "600" },
  valor: { marginTop: 6 },
  original: {
    textDecorationLine: "line-through",
    color: "#888",
    fontSize: 15,
    marginRight: 10,
  },
  promocional: {
    color: "#249c3d",
    fontWeight: "bold",
    fontSize: 16,
  },
  botao: {
    backgroundColor: "#249c3d",
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 8,
    marginLeft: 16,
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;