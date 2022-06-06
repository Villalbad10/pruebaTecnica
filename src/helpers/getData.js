
const getData = async () => {
   const data = await (await fetch(`https://app-pueba.herokuapp.com/products`)).json();
   return data;
}

export default getData