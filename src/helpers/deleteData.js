import axios from "axios"

const deleteData = (id) => {
   axios.delete(`https://app-pueba.herokuapp.com/products/${id}`)
}

export default deleteData