import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import PokemonCard from "./PokemonCard"
import { PokemonCardProp } from "../../../Api/Entity/PokemonCardProp"

const PokemonList = ({Data}:{Data: PokemonCardProp[]}) => {
    return (
        <Box sx={{ flexGrow: 1, padding: 10 }}>
            <Grid container spacing={4}>
                {Data?.map((item) => {
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