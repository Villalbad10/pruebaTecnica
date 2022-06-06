import axios from "axios"

const postData = (objeto) => {
   axios.post(`https://app-pueba.herokuapp.com/products`, objeto)
}

export default postData