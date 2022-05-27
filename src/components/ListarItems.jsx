import { extractCategoriaId } from "./ListarCategoriasItem";
import { useQuery } from "react-query";
import { getItemCategory } from "../queries/items.queries";

// Documentar e adicionar tipos
const ListadoItems = ({ categoria }) => {
  const idCategoria = extractCategoriaId(categoria.url);
  const { data, isLoading, isError } = useQuery(
    ["itemCategory", idCategoria],
    () => getItemCategory(idCategoria)
  );

  if (isLoading) return <div>Carregando itens...</div>;
  if (isError) return <div>Não foi possível carregar os itens...</div>;

  return data ? (
    <div>
      <h4>Items</h4>

      {data.items.map((item) => (
        <div key={item.name}>{item.name}</div>
      ))}
    </div>
  ) : null;
};

// Adicionar validação de tipo

export default ListadoItems;
