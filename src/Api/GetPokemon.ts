import useApi from "./useApi"

const GetPokemon = (id:number) => {
    let url = `https://pokeapi.co/api/v2/pokemon/?offset=${id}&limit=20`
    const {error,isLoading,data} = useApi(url)
    return {error,isLoading,data}
}

export default GetPokemon