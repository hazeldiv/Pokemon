import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import GetPokemonDetail from "../../Api/GetPokemonDetail";

type data = {
    moves: [{
        move: {
            name: string
        }
    }]
    weight: number,
    height: number,
    id: number,
    name: string,
}

const Detail = () => {
    const {id} = useParams();
    const [Data, setData] = useState<data>();
    const {error,isLoading,data} = GetPokemonDetail(id!)

    // const fetchInfo = () => {
    //     return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    //       .then((res) => res.json())
    //       .then((d) => setData(d))
    // }

    useEffect(() => {
        setData(data)
    },[error,isLoading,data]);

    console.log(Data)
    return (
        <div className="container" 
            style={
                {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "20px",
                }
            }>
            <Typography variant="h2">{Data?.name}</Typography>
            <div style={
                {
                    display: "flex",
                    flexDirection: "row",
                    gap: "75px",
                    height: "450px",
                    marginTop: "20px"
                }
            }>
                <div style={{display: "flex", flexDirection: "column", gap: "20px", height: "100%", width: "400px"}}>
                    <Card sx={{height: "50%", alignItems: "center", display: "flex", flexDirection: "column"}}>
                        <CardMedia
                            component="img"
                            height="100%"
                            sx={{width: "auto"}}
                            
                            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Data?.id}.png`}
                        >
                        </CardMedia>
                    </Card>
                    <Card sx={{height: "50%", alignItems: "center", display: "flex", flexDirection: "column"}}>
                        <CardMedia
                            component="img"
                            height="100%"
                            sx={{width: "auto"}}
                            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Data?.id}.png`}
                        >
                        </CardMedia>
                    </Card>
                </div>
                <Card sx={{width: "380px", padding: "20px", display: "flex", flexDirection: "column", gap: "10px"}}>
                    <Typography variant="h5">Pokedex ID: {Data?.id}</Typography>
                    <Typography variant="h5">Height: {Data?.height}</Typography>
                    <Typography variant="h5">Weight: {Data?.weight}</Typography>
                    <Typography variant="h5" sx={{marginTop: "50px"}}>Move:</Typography>
                    {Data?.moves.map((item, index) => {
                        console.log(item.move.name)
                        if (index>=2) {
                            return null
                        }
                        return (
                            <Card sx={{
                                textAlign: "center",
                                padding: "15px"
                            }}>
                                {item.move.name}
                            </Card>
                        )
                    })}
                </Card>
            </div>
        </div>
    )
    
}

export default Detail