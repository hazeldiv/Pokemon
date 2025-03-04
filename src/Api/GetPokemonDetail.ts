import useApi from "./useApi"

const GetPokemonDetail = (id:string) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const {error,isLoading,data} = useApi(url)
    return {error,isLoading,data}
}

export default GetPokemonDetail
