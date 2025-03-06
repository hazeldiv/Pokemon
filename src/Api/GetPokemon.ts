import CallApi from "./CallApi"

const GetPokemon = (id:number) => {
    let url = `https://pokeapi.co/api/v2/pokemon/?offset=${id}&limit=20`
    const {error,data} = CallApi(url)
    return {error,data}
}

export default GetPokemon