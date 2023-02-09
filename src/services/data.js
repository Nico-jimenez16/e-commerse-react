import axios from 'axios'

const ApiProducts = 'https://backend-e-commerce-react.onrender.com/api/products';
const ApiUser = 'https://backend-e-commerce-react.onrender.com/api/users';

// ! Obtiener productos de la API
export const getProducts = async (User) => {
  return await axios.get(ApiProducts)
}
// ! Loguar un usuario
export const loginUser = async (User) => {
  const { email , password } = User

    const response = await axios.get(ApiUser)

    const data = response.data
    const match = data.filter(u => u.email === email && u.password === password )

    if(match) return match[0]
}
// ! registrar un usuario a la API
export const registerUser = async (User) => {
      return await axios.post(ApiUser, User)
}
