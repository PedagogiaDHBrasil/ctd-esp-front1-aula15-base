import { useContext } from "react";
import { ContextoCategorias } from "../context/ContextoCategorias";
import ListarItems from "./ListarItems";

// Documentar
const VerCategoria = () => {
  const { categoriasState } = useContext(ContextoCategorias);
  if (!categoriasState.categoriaSelecionada) return null;
  const categoria = categoriasState.categoriaSelecionada;

  return (
    <div id="verCategoria">
      <h3 className="titulo">Categoria: {categoria.name}</h3>
      <ListarItems categoria={categoria} />
    </div>
  );
};

export default VerCategoria;
