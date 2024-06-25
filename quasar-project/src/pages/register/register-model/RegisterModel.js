import axios from 'axios'

export default {
  async registerUser (registerData) {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await axios.post('http://54.82.62.218:8080/auth/registrar', registerData)
      return response
    } catch (error) {
      throw error
    }
  }
}
