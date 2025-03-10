import { useEffect, useState } from "react"
import Typography from '@mui/material/Typography';
import Pagination from "@mui/material/Pagination";
import PokemonList from "./Components/PokemonList";
import GetPokemon from "../../Api/GetPokemon";
import CircularProgress from "@mui/material/CircularProgress";
import { PokemonListProp } from "../../Api/Entity/PokemonListProp";


const Home = () => {
    const [id, setId] = useState(0)
    const [Data, setData] = useState<PokemonListProp>();
    const [isError, setError] = useState(false)
    const [isLoading, setLoading] = useState(true)
    const {error, data} = GetPokemon(id)
    useEffect(() => {
        setError(error)
        if (data) {
            setData(data)
            setLoading(false)
        }
    },[id,error,data]);

    return (
        <div className="container" style={
            {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "20px"
            }}>
            <Typography variant="h2">
                List Pokemon
            </Typography>
            {
                isLoading? (
                    <CircularProgress/>
                ) : isError ? (
                    <Typography variant="h2">Error</Typography>
                ) : Data && (
                    <PokemonList Data={Data?.results!}/>
                )
            }
            <Pagination sx={{marginBottom: "20px"}} count={Math.ceil((Data?.count||0)/20)} onChange={function(e,page) {
                setData(undefined)
                setLoading(false)
                setId(20*(page-1))
            }}></Pagination>
        </div>
    )
}
  
export default Home;