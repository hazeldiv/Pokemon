import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"

const PokemonDetailImage = ({id}:{id : string}) => {
    return (
        <div style={{
            display: "flex", 
            flexDirection: "column", 
            gap: "20px", 
            height: "100%", 
            width: "400px"
            }}>
            <Card sx={{
                height: "50%", 
                alignItems: "center", 
                display: "flex", 
                flexDirection: "column"
                }}>
                <CardMedia
                    component="img"
                    height="100%"
                    sx={{width: "auto"}}  
                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                    />
            </Card>
            <Card sx={{
                height: "50%", 
                alignItems: "center", 
                display: "flex", 
                flexDirection: "column"
                }}>
                <CardMedia
                    component="img"
                    height="100%"
                    sx={{width: "auto"}}
                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                    />
            </Card>
        </div>
    )
    
}

export default PokemonDetailImage