import { createSlice } from "@reduxjs/toolkit";

// Esse é o slice, ele define o estado inicial do objeto a ser mandado para a store
// e o mesmo possui os metodos para alterar este objeto.
export const slice = createSlice({
  name: 'jwt',
  initialState: {
    valor: '',
  },
  reducers: {
    setJwt (state, { payload }) { return {...state, valor: payload} },
  },
})

// Metodo de alteração do valor (define e altera o jwt)
export const { setJwt } = slice.actions

// Variável para facilitar o set do objeto
export const selectToken = (state: any) => state.jwt.valor
export default slice.reducer
