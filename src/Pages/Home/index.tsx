import { useEffect, useState } from "react"
import Typography from '@mui/material/Typography';
import Pagination from "@mui/material/Pagination";
import PokemonList from "../../Components/PokemonList";
import GetPokemon from "../../Api/GetPokemon";
import CircularProgress from "@mui/material/CircularProgress";

export interface item {
    name: string,
    url: string,
}

interface data {
    count: number,
    next: string,
    results: [item],
}

const Home = () => {
    const [id, setId] = useState(0)
    const [Data, setData] = useState<data>();
    
    const {error,isLoading,data} = GetPokemon(id)

    // const fetchInfo = () => {
    //     return fetch(`https://pokeapi.co/api/v2/pokemon?offset=${id}&limit=20`)
    //       .then((res) => res.json())
    //       .then((d) => setData(d))
    // }

    useEffect(() => {
        setData(data)
    },[error,isLoading,data]);

    return (
        <div className="container" 
        style={
            {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "20px"
            }
        }>
            <Typography variant="h2">
                List Pokemon
            </Typography>
            {
                isLoading? (
                    <CircularProgress/>
                ) : Data && (
                    <PokemonList Data={Data?.results!}/>
                )
            }
            <Pagination sx={{marginBottom: "20px"}} count={Math.ceil((Data?.count||0)/20)} onChange={function(e,page) {
                setId(20*(page-1))
            }}></Pagination>
        </div>
        
    )
}
  
export default Home;