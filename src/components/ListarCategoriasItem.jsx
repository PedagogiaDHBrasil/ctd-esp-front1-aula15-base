// Documentar
export const extractCategoriaId = (url) => {
  return url.split("item-category")[1].replace("/", "");
};

// Documentar e adicionar tipos para props
const ListarCategoriasItem = ({ categoria, selecionarCategoria }) => (
  <div onClick={() => selecionarCategoria(categoria)}>
    <strong>{categoria.name}</strong>
    <small> {categoria.url}</small>
  </div>
);

// Adicione prop-types para validar

export default ListarCategoriasItem;
