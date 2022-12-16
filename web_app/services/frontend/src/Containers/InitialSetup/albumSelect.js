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
import LoggedInTopBar from '../../Components/LoggedInTopBar';

import APICalls from '../../Helpers/api';


const theme = createTheme();

export default function AlbumSelect() {

    const navigate = useNavigate();


    const TopBar = () => {
        return(
            <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          backgroundColor: '#1976d2',
          color: 'white',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            MusicDom - Music Recommendation System
          </Typography>
        </Toolbar>
      </AppBar>
        );
    };

    const getTopGenresDetails = async() => {

        var detail = await APICalls.GetArtist("ARGXIE31187FB55B48")
        console.log(detail)

    }

    useEffect(() => {
        getTopGenresDetails()

    }, [])

    const [albums, setAlbums] = useState( 
    [
        {
            "id" : "ARTH9041187FB43E1F",
            "name": "Eminem",
            "imgUrl" : "https://www.biography.com/.image/t_share/MTQ3NjM5MTEzMTc5MjEwODI2/eminem_photo_by_dave_j_hogan_getty_images_entertainment_getty_187596325.jpg"
        },
        {
            "id" : "ARNHMFD1187FB3B3F6",
            "name": "LL Cool J",
            "imgUrl" : "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTd_TxvcPaGMuWAWFXhwqpKj9wglxMvszAjUtq1DePKuDcqvMiB7lIHUykldvWmJ60peNpTr8eBmyOUcmk"
        },
        {
            "id" : "AR3MSAN1187B98F06B",
            "name": "OutKast",
            "imgUrl" : "https://i.guim.co.uk/img/media/80c9d0e44610c160bfc9065f28f6b26af4356cd1/0_294_2366_1419/master/2366.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=03bf76917d038f98a246116a54a8b49b"
        },
        {
            "id" : "ARLHO5Z1187FB4C861",
            "name": "Beastie Boys",
            "imgUrl" : "https://images-prod.dazeddigital.com/1800/azure/dazed-prod/1190/5/1195187.jpg"
        },
        {
            "id" : "ARX5TXV1187B9966DF",
            "name": "Looptroop",
            "imgUrl" : "https://i.discogs.com/Z5D2629MQxkOlTrxE_p3KOn6oIFweBwUbppiaf9I2DY/rs:fit/g:sm/q:90/h:400/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTkyMDIw/LTEzNjU2MjI2MzEt/NjUwMy5qcGVn.jpeg"
        },
        {
            "id" : "ARVJBQA1187B9B7481",
            "name": "Evergrey",
            "imgUrl" : "https://evergrey.net/wp-content/uploads/2022/03/EVERGREY-MAIN-500x500.jpg"
        },
        {
            "id" : "AR8RXRI1187FB4104B",
            "name": "The Roots",
            "imgUrl" : "https://m.media-amazon.com/images/M/MV5BMjM1NzQ0OTkwMF5BMl5BanBnXkFtZTgwMDE5MzgyOTE@._V1_.jpg"
        },
        {
            "id" : "ARTXGGI1187B9B3D58",
            "name": "Blackalicious",
            "imgUrl" : "https://i.ytimg.com/vi/xxmmGToZlns/maxresdefault.jpg"
        },
        {
            "id" : "ARF84A41187B9A34E7",
            "name": "Rancid",
            "imgUrl" : "https://townsquare.media/site/838/files/2019/06/rancid-2016.jpg?w=980&q=75"
        },
        {
            "id" : "ARGXIE31187FB55B48",
            "name": "Tech N9ne",
            "imgUrl" : "https://cdn.strangemusicinc.com/wp-content/uploads/2017/08/Tech-N9ne_Main-500x433.jpg"
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




    const [selectedAlbums, setSelectedAlbums] = useState([]);
    const [loadIndex, setLoadIndex] = useState(10);
    const cardElement = useRef(new Array());

    const handleLoadMoreButtonClick = () => {
        setLoadIndex(loadIndex + 4)
    }

    const handleProceedButton = () => {
        navigate(ROUTES.DASHBOARD)
    }

    const handleAlbumeSelect = (album) => {

        if(selectedAlbums.indexOf(album) < 0 && selectedAlbums.length <5 )
        setSelectedAlbums([...selectedAlbums,album])
        else
        {
            var index = selectedAlbums.indexOf(album)
            if(index>-1)
            setSelectedAlbums([...selectedAlbums.slice(0, index),...selectedAlbums.slice(index+1)]);

            // var array = selectedGenres; // make a separate copy of the array
            // var index = array.indexOf(genre)
            // if (index !== -1) {
            //     array.splice(index, 1);
            //     setSelectedGenres(array);
            // }
        }

        console.log(selectedAlbums)
    }

    return(
        <ThemeProvider theme={theme}>
        <LoggedInTopBar/>
        <Box m={(4)}>
            <Typography variant="h3">Select Five Artists you Like</Typography>
            <Grid mt={2} container spacing={4} alignItems='center'>
                {albums?.slice(0,loadIndex).map((album) => {
                    return(
                        <Grid item key={albums.id} xs={12} sm={6} md={2}  >
                            <Card style={selectedAlbums.indexOf(album) >-1 ?styles.selectedCard:styles.card}  onClick={()=>handleAlbumeSelect(album)}
                                >
                                <CardMedia
                                    component="img"
                                    style = {{objectFit: 'cover'}}
                                    // style={styles.media}
                                    image={album.imgUrl}
                                    // image={`https://picsum.photos/seed/${album.name}/400`}
                                    alt={album.name}
                                />
                                <CardContent >
                                   <Typography style={{fontSize:'24px', textAlign:'center', fontWeight:'bolder'}}>{album.name}</Typography>
                                </CardContent>
                                {/* <div style={styles.overlay}>{genre.name}</div> */}
                            </Card> 
                        </Grid>
                    )
                })}

                <Grid item xs={12} sm={6} md={2}>
                    <div > 
                    
                    {selectedAlbums.length == 5 && (
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
                        Get Recommendations
                    </Button>
                )}
                
                     
                    </div>
                </Grid>
            </Grid>
            

        </Box>
        </ThemeProvider>
    )

}