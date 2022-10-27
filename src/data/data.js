import axios from 'axios'

const ApiProducts = 'https://62a123797b9345bcbe46e31d.mockapi.io/Products';
const ApiUser = ''


// eslint-disable-next-line import/no-anonymous-default-export
export default {

  // ! Obtiener productos de la API
  async getProducts(){
    try {
        const response = await axios.get(ApiProducts)
        const data = await response.data
        return data
    } catch (error) {
        console.error(error)
    }
  },

  // ! Obtiener Usuarios de la API
  async getUsers(){
    try {
        const response = await axios.get(ApiUser)
        const data = await response.data
        return data
    } catch (error) {
        console.error(error)
    }
  }

}