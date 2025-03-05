import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import GetPokemonDetail from "../../Api/GetPokemonDetail";
import PokemonDetailImage from "../../Components/PokemonDetailImage";
import PokemonDetailStat from "../../Components/PokemonDetailStat";

interface move {
    move : {
        name: string
    }
}

export interface DetailData {
    moves: [move]
    weight: number,
    height: number,
    id: number,
    name: string,
}

const Detail = () => {
    const {id} = useParams();
    const [Data, setData] = useState<DetailData>();
    const {error,isLoading,data} = GetPokemonDetail(id!)

    // const fetchInfo = () => {
    //     return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
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
                <PokemonDetailImage id={id!}/>
                <PokemonDetailStat Data={Data!}/>
            </div>
        </div>
    )
    
}

export default Detail