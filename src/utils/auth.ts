// import { selectProfile } from '../providers/slices/profileSlice';

/* Aqui basicamente verificamos se o valor do jwt existe,
caso seja nulo ou undefined, retornaremos false, caso ele exista será true,
com true poderemos acessar rotas privadas */
export const useAuthJwt = () => {
  const accessToken = localStorage.getItem("ACCESS_TOKEN")

  if (accessToken !== "") {
      return true
  } else {
      return false
  };
};


export const getAuthorizationHeader =  () => {
  const access = localStorage.getItem("ACCESS_TOKEN") || "";
  const refresh = localStorage.getItem("REFRESH_TOKEN") || "";

  return {
    "x-access-token": access,
    "x-refresh-token": refresh
  }
}

// // Função para autenticar a leitura (POST)
// export const useAuthWrite = (value: string) => {
//     const profile = useSelector(selectProfile);

//     if (profile.acessos.escrita.includes(value)) {
//         return true;
//     } else {
//         return false;
//     };
// };

// // Função para autenticar a leitura (GET)
// export const useAuthRead = (value: string) => {
//     const profile = useSelector(selectProfile);

//     if (profile.acessos.leitura.includes(value)) {
//         return true;
//     } else {
//         return false;
//     };
// };

// // Função para autenticar a leitura (PATCH)
// export const useAuthUpdate = (value: string) => {
//     const profile = useSelector(selectProfile);

//     if (profile.acessos.alteracao.includes(value)) {
//         return true;
//     } else {
//         return false;
//     };
// };

// // Função para autenticar a remoção (DELETE)
// export const useAuthRemove = (value: string) => {
//     const profile = useSelector(selectProfile);

//     if (profile.acessos.remocao.includes(value)) {
//         return true;
//     } else {
//         return false;
//     };
// };
