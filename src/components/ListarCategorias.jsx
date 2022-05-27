import { useQuery } from "react-query";
import { getItemCategories } from "../queries/items.queries";

const ListarCategorias = () => {
  const {
    data: categorias,
    isLoading,
    isError,
  } = useQuery("itemCategories", getItemCategories);

  if (isLoading) return <div>Carregando categorias...</div>;
  if (isError) return <div>Falha ao carregar categorias...</div>;

  return (
    <div id="listarCategorias">
      <div>Aqui devemos mostrar as categorias</div>
    </div>
  );
};

export default ListarCategorias;
