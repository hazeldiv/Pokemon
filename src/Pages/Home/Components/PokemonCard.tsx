import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import { Link } from "react-router-dom"
import { PokemonCardProp } from "../../../Api/Entity/PokemonCardProp"

const PokemonCard = ({item}:{item: PokemonCardProp}) => {
    return (
        <div style={
            {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                width: "250px"
            }}>
            <Card  sx={{width: "100%", borderRadius: "30px"}}>
                <CardMedia
                    component="img"
                    height="250px"
                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${(item.url)?.substring(34,(item.url).length-1)}.png`}
                    />
            </Card>
            <Card sx={{width: "100%", outline: "1px gray solid"}}>
                <Link to={`/Detail/${(item.url)?.substring(34,(item.url).length-1)}`}>
                    <Button sx={{width: "100%"}}>{item.name}</Button>
                </Link>
            </Card>
        </div>
    )
}

export default PokemonCard