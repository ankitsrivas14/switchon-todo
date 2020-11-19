import Axios from "axios"

const fetchToken = async (email,password) => {
    return await Axios.post('https://reqres.in/api/login',{
        email: email,
        password: password
    })
    .then(response => {
        fetchUser()
        return response.data
      })
    .catch(error => {
        console.log(error)
        return error.response.data
    })
}

const fetchUser = async () => {
    await Axios.get('https://reqres.in/api/users/2')
    .then(function (response) {
        localStorage.setItem("user",JSON.stringify(response.data.data))
      })
    .catch(error => {
        console.log(error.data.error)
    })
}


export const auth = async(email,password) => {
    return await fetchToken(email,password)
}

