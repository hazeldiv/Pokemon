import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import { DetailData } from "../../../Api/Entity/DetailDataProp"

const PokemonDetailStat = ({Data}:{Data : DetailData}) => {
    return (
        <Card sx={{width: "380px", padding: "20px", display: "flex", flexDirection: "column", gap: "10px"}}>
            <Typography variant="h5">Pokedex ID: {Data?.id}</Typography>
            <Typography variant="h5">Height: {Data?.height}</Typography>
            <Typography variant="h5">Weight: {Data?.weight}</Typography>
            <Typography variant="h5" sx={{marginTop: "50px"}}>Move:</Typography>
            {Data?.moves.map((item, index) => {
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
    )
    
}

export default PokemonDetailStat