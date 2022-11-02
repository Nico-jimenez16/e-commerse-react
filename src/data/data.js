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
  },

  // ! Loguar un usuario
  
  async loginUser( User ) {

    const response = await axios.post('https://randomuser.me/api' , User)
    const data = response.data.results[0]
    return data

    // const email = response.data.results[0].email
    // const password = response.data.results[0].login.password

    // const User = {
    //   email ,
    //   password
    // }
    // return User;
  },

   // ! registrar un usuario a la API
   async registerUser( User ){
      try {
        await axios.post( ApiUser, User )
      } catch (error) {
          console.error(error)
      }
  }
}