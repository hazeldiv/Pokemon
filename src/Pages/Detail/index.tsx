import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import GetPokemonDetail from "../../Api/GetPokemonDetail";
import PokemonDetailImage from "./Components/PokemonDetailImage";
import PokemonDetailStat from "./Components/PokemonDetailStat";
import { CircularProgress } from "@mui/material";
import { DetailData } from "../../Api/Entity/DetailDataProp";

const Detail = () => {
    const {id} = useParams();
    const [Data, setData] = useState<DetailData>();
    const [isLoading, setLoading] = useState(true)
    const {error,data} = GetPokemonDetail(id!)

    useEffect(() => {
        setData(data)
        setLoading(false)
    },[error,data]);

    return (
        
        <div className="container" style={
            {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "20px",
            }}>
            {
                isLoading? (
                    <CircularProgress/>
                ) : Data && (
                    <div style={
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
        </div>
    )
    
}

export default Detail