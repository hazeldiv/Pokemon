import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import GetPokemonDetail from "../../Api/GetPokemonDetail";
import PokemonDetailImage from "./Components/PokemonDetailImage";
import PokemonDetailStat from "./Components/PokemonDetailStat";
import { CircularProgress } from "@mui/material";
import { DetailDataProp } from "../../Api/Entity/DetailDataProp";

const Detail = () => {
    const {id} = useParams();
    const [Data, setData] = useState<DetailDataProp>();
    const [isLoading, setLoading] = useState(true)
    const [isError, setErorr] = useState(false)
    const {error,data} = GetPokemonDetail(id!)

    useEffect(() => {
        setErorr(error)
        if (data) {
            setData(data)
            setLoading(false)
        }
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
                ) : isError? (
                    <Typography variant="h2">Error</Typography>
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