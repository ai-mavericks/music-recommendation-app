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
import { useNavigate, useParams } from 'react-router-dom';
import * as ROUTES from "../../Helpers/routes"
import APICalls from '../../Helpers/api';



export default function GenreSelect() {


    const navigate = useNavigate();

    const topGenres = [
        {"genres": "GR8JIQ0MT3H66P6VJK", "total": 1304},
         {"genres": "GR7RWUBIXEKKRALCRM", "total": 1093},
          {"genres": "GRWTN6SP41VUYFWK15", "total": 8},
           {"genres": "GRV6EIQOAXN8F529SX", "total": 7},
            {"genres": "GR717HV903KVD6SXXL", "total": 7}
        ];
    
    const getTopGenresDetails = async() => {

        var detail = await APICalls.GetGenre("GR717HV903KVD6SXXL")
        console.log(detail)

    }

    useEffect(() => {
        getTopGenresDetails()

    }, [])
    

    const [genres, setGenres] = useState( 
    [
        {
            "id" : "GR8JIQ0MT3H66P6VJK",
            "name": "RAP",
            "imgUrl" : "https://eastside-online.org/wp-content/uploads/2019/01/Rap-copy-900x600.jpg"
        },
        {
            "id" : "GR7RWUBIXEKKRALCRM",
            "name": "POP ROCK",
            "imgUrl" : "https://yt3.ggpht.com/ytc/AMLnZu9qpll29_akZqlcWYUtIzU2KIzFr1yvfPG2YDPx=s900-c-k-c0x00ffffff-no-rj"
        },
        {
            "id" : "GRWTN6SP41VUYFWK15",
            "name": "ELECTRONIC",
            "imgUrl" : "https://www.dancemusicnw.com/wp-content/uploads/2017/03/Electronic-Music-Art-Wallpaper-Electronic-wallpaper-1600-x-e1488600068366.jpg"
        },
        {
            "id" : "GRV6EIQOAXN8F529SX",
            "name": "RnB",
            "imgUrl" : "https://play-lh.googleusercontent.com/CLd32TFqjbxz4Jig44FKncd4tBWnQ2RW4xwKBZpem4Q7tv678fmYatjOW9TGyiisRXg=w240-h480-rw"
        },
        {
            "id" : "GR717HV903KVD6SXXL",
            "name": "JAZZ",
            "imgUrl" : "https://media1.fdncms.com/rochester/imager/u/original/10434163/large-magnum.jpg"
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
            border: 'solid 15px green'
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
    const [loadIndex, setLoadIndex] = useState(10);
    const cardElement = useRef(new Array());

    const handleLoadMoreButtonClick = () => {
        setLoadIndex(loadIndex + 4)
    }

    const handleProceedButton = async() => {
        navigate(ROUTES.ALBULSELECT)
        const selected = []
        for(var genre in selectedGenres){
            selected.push(genre.id)
        }
        console.log("genresPreference",selectedGenres)
        console.log(selected)
        // localStorage.setItem('genresPreference', selected)


    }

    const handleGenreSelect = (genre) => {

        if(selectedGenres.indexOf(genre) < 0 && selectedGenres.length <2 )
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
            <Typography variant="h3">Select Two Genres you Like</Typography>
            <Grid mt={2} container spacing={4} alignItems='center'>
                {genres?.slice(0,loadIndex).map((genre) => {
                    return(
                        <Grid item key={genre.id} xs={12} sm={6} md={3}  >
                            <Card style={selectedGenres.indexOf(genre) >-1 ?styles.selectedCard:styles.card}  onClick={()=>handleGenreSelect(genre)}
                                >
                                <CardMedia
                                    component="img"
                                    style = {{objectFit: 'cover'}}
                                    // style={styles.media}
                                    image={genre.imgUrl}
                                    // image={`https://picsum.photos/seed/${genre.name}/400`}
                                    alt={genre.name}
                                />
                                {/* <CardContent >
                                   <Typography style={{fontSize:'24px', textAlign:'center', fontWeight:'bolder'}}>{genre.name}</Typography>
                                </CardContent> */}
                                {/* <div style={styles.overlay}>{genre.name}</div> */}
                            </Card> 
                        </Grid>
                    )
                })}

                <Grid item xs={12} sm={6} md={2}>
                    <div > 
                    
                    {selectedGenres.length == 2 && (
                        // <Button 
                        //     style={{fontSize: '30px' }} 
                        //     onClick={handleLoadMoreButtonClick}
                        // >
                        //     Load more
                        // </Button>
                        <Button 
                        style={{fontSize: '30px', backgroundColor:'#28b337', color:'black' }} 
                        onClick={handleProceedButton}
                    >
                        PROCEED
                    </Button>
                )}
                
                     
                    </div>
                </Grid>
            </Grid>
            

        </Box>
    )

}