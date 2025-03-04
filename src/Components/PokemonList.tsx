import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import PokemonCard from "./PokemonCard"
import { item } from "../Pages/Home"

interface PokemonListProps {
    Data: [item]
}

const PokemonList = ({Data}:PokemonListProps) => {
    return (
        <Box sx={{ flexGrow: 1, padding: 10 }}>
            <Grid container spacing={4}>
                {Data?.map((item, index) => {
                    return (
                        <Grid item>
                            <PokemonCard item={item}/>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}

export default PokemonList