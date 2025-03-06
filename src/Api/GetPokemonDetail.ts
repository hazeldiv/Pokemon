import CallApi from "./CallApi"

const GetPokemonDetail = (id:string) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const {error,data} = CallApi(url)
    return {error,data}
}

export default GetPokemonDetail
