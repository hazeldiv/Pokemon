import { useEffect, useState } from "react"
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from "@mui/material/Grid"
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";


type data = {
    count: number,
    next: string,
    results: [{
        name: string,
        url: string,
    }],
}

const Home = () => {
    const [Data, setData] = useState<data>();

    const fetchInfo = () => {
        return fetch("https://pokeapi.co/api/v2/pokemon")
          .then((res) => res.json())
          .then((d) => setData(d))
    }

    useEffect(() => {
        if (!Data) {
            fetchInfo();
        }
        
    });

    return (
        <div className="container" 
        style={
            {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "20px"
            }
        }>
            <Typography variant="h2">
                List Pokemon
            </Typography>
            <Box sx={{ flexGrow: 1, padding: 10 }}>
                <Grid container spacing={6}>
                {Data?.results.map((item, index) => {
                    return (
                        <Grid item md={3} spacing={3}>
                            <div style={
                                {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "10px"
                                }
                            }>
                                <Card  sx={{width: "100%", borderRadius: "30px"}}>
                                    <CardMedia
                                        component="img"
                                        height="250px"
                                        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png`}
                                    >
                                    </CardMedia>
                                </Card>
                                <Card sx={{width: "100%", outline: "1px gray solid"}}>
                                <Link to={`/Detail/${index+1}`}>
                                    <Button sx={{width: "100%"}}>{item.name}</Button>
                                </Link>
                                </Card>
                            </div>
                        </Grid>
                    )
                })}
                </Grid>
            </Box>
            
        </div>
        
    )
}
  
export default Home;