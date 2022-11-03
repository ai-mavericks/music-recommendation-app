import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { useContext, useEffect, useState, useRef } from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { border, style } from '@mui/system';


export default function GenreSelect() {

    const [genres, setGenres] = useState( 
    [
        {
            "id" : 1,
            "name": "rock",
            "imgUrl" : "https://image.shutterstock.com/image-vector/creative-logo-design-unique-symbol-260nw-643568482.jpg"
        },
        {
            "id" : 2,
            "name": "rock",
            "imgUrl" : "https://image.shutterstock.com/image-vector/creative-logo-design-unique-symbol-260nw-643568482.jpg"
        },
        {
            "id" : 3,
            "name": "rock",
            "imgUrl" : "https://image.shutterstock.com/image-vector/creative-logo-design-unique-symbol-260nw-643568482.jpg"
        },
        {
            "id" : 4,
            "name": "rock",
            "imgUrl" : "https://image.shutterstock.com/image-vector/creative-logo-design-unique-symbol-260nw-643568482.jpg"
        },
        {
            "id" : 5,
            "name": "rock",
            "imgUrl" : "https://image.shutterstock.com/image-vector/creative-logo-design-unique-symbol-260nw-643568482.jpg"
        },
        {
            "id" : 6,
            "name": "rock",
            "imgUrl" : "https://image.shutterstock.com/image-vector/creative-logo-design-unique-symbol-260nw-643568482.jpg"
        },
        {
            "id" : 7,
            "name": "rock",
            "imgUrl" : "https://image.shutterstock.com/image-vector/creative-logo-design-unique-symbol-260nw-643568482.jpg"
        },
        {
            "id" : 15,
            "name": "rock",
            "imgUrl" : "https://image.shutterstock.com/image-vector/creative-logo-design-unique-symbol-260nw-643568482.jpg"
        },
        {
            "id" : 8,
            "name": "rock",
            "imgUrl" : "https://image.shutterstock.com/image-vector/creative-logo-design-unique-symbol-260nw-643568482.jpg"
        },
        {
            "id" : 9,
            "name": "rock",
            "imgUrl" : "https://image.shutterstock.com/image-vector/creative-logo-design-unique-symbol-260nw-643568482.jpg"
        },
        {
            "id" : 10,
            "name": "rock",
            "imgUrl" : "https://image.shutterstock.com/image-vector/creative-logo-design-unique-symbol-260nw-643568482.jpg"
        },
        {
            "id" : 11,
            "name": "rock",
            "imgUrl" : "https://image.shutterstock.com/image-vector/creative-logo-design-unique-symbol-260nw-643568482.jpg"
        },
        {
            "id" : 12,
            "name": "rock",
            "imgUrl" : "https://image.shutterstock.com/image-vector/creative-logo-design-unique-symbol-260nw-643568482.jpg"
        },
        {
            "id" : 13,
            "name": "rock",
            "imgUrl" : "https://image.shutterstock.com/image-vector/creative-logo-design-unique-symbol-260nw-643568482.jpg"
        },
        {
            "id" : 14,
            "name": "rock",
            "imgUrl" : "https://image.shutterstock.com/image-vector/creative-logo-design-unique-symbol-260nw-643568482.jpg"
        },

    ]);

    const styles = {
        media: {
            // height: '50px',
            // width : '100px'
        },
        card: 
        {
            position: 'relative',
            cursor: 'pointer',
            // opacity : '0.9',
            // background: 'black'
            
        },
        selectedCard: {
            position: 'relative',
            cursor: 'pointer',
            border: 'solid 5px green'
        },
        overlay: {
            position: 'absolute',
            top: '80%',
            left: '50%',
            color: 'black',
            

        },
        overlayText : {
            size: '20px'
        },
    }

    const genreView = () => {
        <Box>
            <Card >
                <div style={{ position: "relative" }}>      
                    <CardMedia style={{ height: "250px", paddingTop: "2%" }}   component="img" image={"/pancakes.jpg"} title="Pancakes" alt="Pancakes"/> 
                    <div style={{position: "absolute", color: "white",top: 10,left: "50%",transform: "translateX(-50%)",}}> Some text</div>  
                </div>
            </Card>
        </Box>
    }


    const [selectedGenres, setSelectedGenres] = useState([]);
    const [loadIndex, setLoadIndex] = useState(11);
    const cardElement = useRef(new Array());

    const handleLoadMoreButtonClick = () => {
        setLoadIndex(loadIndex + 6)
    }

    const handleGenreSelect = (genre) => {

        if(selectedGenres.indexOf(genre) < 0 && selectedGenres.length <5 )
            setSelectedGenres([...selectedGenres,genre])
        else
        {
            var index = selectedGenres.indexOf(genre)
            if(index>-1)
                setSelectedGenres([...selectedGenres.slice(0, index),...selectedGenres.slice(index+1)]);

            // var array = selectedGenres; // make a separate copy of the array
            // var index = array.indexOf(genre)
            // if (index !== -1) {
            //     array.splice(index, 1);
            //     setSelectedGenres(array);
            // }
        }

        console.log(selectedGenres)
    }

    return(
        <Box m={(4)}>
            <Typography variant="h3">Select Five Genres you Like</Typography>
            <Grid mt={2} container spacing={4} alignItems='center'>
                {genres?.slice(0,loadIndex).map((genre) => {
                    return(
                        <Grid item key={genre.id} xs={12} sm={6} md={2}  >
                            <Card style={selectedGenres.indexOf(genre) >-1 ?styles.selectedCard:styles.card}  onClick={()=>handleGenreSelect(genre)}
                                >
                                <CardMedia
                                    component="img"
                                    style = {{objectFit: 'cover'}}
                                    // style={styles.media}
                                    image={genre.imgUrl}
                                    alt={genre.name}
                                />
                                <div style={styles.overlay}>{genre.name}</div>
                            </Card> 
                        </Grid>
                    )
                })}
                <Grid item xs={12} sm={6} md={2}>
                    <div > 
                    
                    {loadIndex < genres?.length && (
                        <Button 
                            style={{fontSize: '30px' }} 
                            onClick={handleLoadMoreButtonClick}
                        >
                            Load more
                        </Button>
                )}
                
                     
                    </div>
                </Grid>
            </Grid>
            

        </Box>
    )

}