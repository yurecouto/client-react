import { createSlice } from "@reduxjs/toolkit";

// Esse é o slice, ele define o estado inicial do objeto a ser mandado para a store
// e o mesmo possui os metodos para alterar este objeto.
export const slice = createSlice({
  name: 'user',
  initialState: {
    data: {},
  },
  reducers: {
    setUser (state, { payload }) { return {...state, data: payload} },
  },
});

// Metodo de alteração do valor (define e altera o jwt)
export const { setUser } = slice.actions;

// Variável para facilitar o set do objeto
export const selectUser = (state: any) => state.user.data;
export default slice.reducer;
