import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import PokemonCard from "./PokemonCard"
import { PokemonCardProp } from "../../../Api/Entity/PokemonCardProp"

const PokemonList = ({Data}:{Data: PokemonCardProp[]}) => {
    return (
        <Box sx={{flexGrow: 1, padding: 10, justifyContent: "center", display: "flex"}}>
            <Grid container spacing={4} sx={{justifyContent: "center", maxWidth: "1500px"}}>
                {Data?.map((item) => {
                    return (
                        <Grid item xl={3} lg={3} md={4} sm={7} xs = {8}>
                            <PokemonCard Data={item}/>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}

export default PokemonList