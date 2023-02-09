import axios from 'axios'

const ApiProducts = 'https://backend-e-commerce-react.onrender.com/api/products';
const ApiUser = 'https://backend-e-commerce-react.onrender.com/api/users';

// ! Obtiener productos de la API
export const getProducts = async () => {
  return await axios.get(ApiProducts)
}
// ! Obtiener Usuarios de la API
export const getUsers = async () => {
  return await axios.get(ApiUser)
}
// ! Loguar un usuario
export const loginUser = async ( User ) => {
  const { email , password } = User

    const response = await axios.get(ApiUser)

    const data = response.data
    const match = data.filter(u => u.email === email && u.password === password )

    if(match) return match[0]
<<<<<<< HEAD
<<<<<<< HEAD
}

// ! registrar un usuario a la API
export const registerUser = async (User) => {
  return await axios.post(ApiUser, User)
=======
  },

   // ! registrar un usuario a la API
   async registerUser( User ){
        return await axios.post(ApiUser, User)
  }
>>>>>>> e0d5a6b27d4a7a60888a452b524c0cfa394eb522
=======
}
// ! registrar un usuario a la API
export const registerUser = async (User) => {
  return await axios.post(ApiUser, User)
>>>>>>> parent of e0d5a6b (Revert "nejoras de codigo, agregue button component")
}