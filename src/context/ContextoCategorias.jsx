import React, { useReducer } from "react";

// Devemos digitar nosso estado inicial.
const initialState = {
  categoriaSeleccionada: null,
};

const reducer = (state, action) => {
  // Implementar o reducer
};

export const ContextoCategorias = React.createContext();

const ProviderCategorias = ({ children }) => {
  const [categoriasState, dispatch] = useReducer(reducer, initialState);

  // Devemos digitar a seguinte função que carrega as categorias
  const selecionarCategoria = (categoria) => {
    dispatch({
      type: "SELECIONAR_CATEGORIA",
      payload: {
        categoria,
      },
    });
  };

  return (
    <ContextoCategorias.Provider
      value={{
        categoriasState,
        selecionarCategoria,
      }}
    >
      {children}
    </ContextoCategorias.Provider>
  );
};

export default ProviderCategorias;
