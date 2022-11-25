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
import { useContext, useEffect, useState, CSSProperties } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import * as ROUTES from "../../Helpers/routes"
import Menu from '@mui/material/Menu';
import LoggedInTopBar from '../../Components/LoggedInTopBar';
import APICalls from '../../Helpers/api'
import ClipLoader from "react-spinners/ClipLoader";
import { blue } from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


export default function Dashboard() {

  const navigate = useNavigate();
  const [page,setPage] = useState(1);
  const [iterations, setIterations] = useState(1)
  const [isFirstLoading, setIsFirstLoading] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [loadIndex, setLoadIndex] = useState(10);



  const [finalList, setFinalList] = useState([])

    useEffect(() => {
      if(localStorage.getItem('userLoggedIn') == "false"){
        navigate(ROUTES.LOGIN)
      }
    });

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
    

    useEffect(() => {
      getFinalList()
    }, [])

    useEffect(()=> {
      console.log(finalList)
      setIsLoading(false)
    },[finalList])
    
    const getFinalList = async() => {
      var tempFinalList = finalList
      if(tempFinalList==0)
        setIsFirstLoading(true)
      
      var page  = Math.floor(1 + Math.random() * (234 - 1));
      var tracks = await getTracks(page)
      console.log(tracks)
      for(var i=0 ; i< tracks.length;i++)
      {

        var trackid = tracks[i]._id
        var duration = tracks[i].playback_duration
        var title = tracks[i].title

        var data = await getAlbum(tracks[i].album)

        var albumName = data.title
        var coverImage = data.cover_image
        var releaseYear = data.release_year

        // for(var j=0 ; j< tracks[i].artists.length;j++) 
        // { 
        //   var data = await getArtist(tracks[i].artists[j])
        //   var artistName = data.name
        // }

        // for(var j=0 ; j< tracks[i].genres.length;j++) 
        // { 
        //   var data = await getGenre(tracks[i].genres[j])
        //   var genre = data.title
        // }

        var trackDetails = {
          'id': trackid,
          'duration': duration,
          'title': title,
          'albumName' : albumName,
          'coverImage' : coverImage,
          'releaseYear':releaseYear,
          // 'artistName' : artistName,
          // 'genre' : genre
        }

        tempFinalList = [...tempFinalList,trackDetails]

        // console.log(trackid)
      }
      setFinalList(tempFinalList)
      setIsFirstLoading(false)
      // setPage(page+1)
      if(iterations<3)
        setIterations(iterations+1)

    }

    const getTracks = async(page) => {
      var tracks = await APICalls.GetTracks(page)
      // console.log(tracks)
      // setTracks(tracks)
      return tracks
    }

    const getAlbum = async(albumId) => {
      var album = await APICalls.GetAlbum(albumId)
      // console.log(album)
      return album
    }

    const getArtist = async(artistId) => {
      var artist = await APICalls.GetArtist(artistId)
      // console.log(artist)
      return artist
    }

    const getGenre = async(genreId) => {
      var genre = await APICalls.GetGenre(genreId)
      // console.log(genre)
      return genre
    }

    const handleLoadMoreButtonClick = () => {
      
      if(finalList.length<loadIndex + 10)
        setIsLoading(true)
        getFinalList()
      setLoadIndex(loadIndex + 10)
  }

    const loadingMoreSongs = () => {
      return(
        <ClipLoader
          color='blue'
          // loading={loading}
          // cssOverride={override}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
       />
      )
    }

    const loadingText = () => {
      return(
      <Box mt={8} style={{display:'flex',alignItems: 'center' , justifyContent: 'center', height: '100%'}}>
        <ClipLoader
          color='blue'
          // loading={loading}
          // cssOverride={override}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
       />
       <Box mr={2}></Box>
      <Typography variant='h4'>
        Preparing Recommendations for you
      </Typography>
      </Box>

    )}

    return(
        <Box>
          <LoggedInTopBar/>
          {isFirstLoading && loadingText()}
          {!isFirstLoading &&
          <Box m={4}>
            <Typography variant="h4">Some songs you might like!!</Typography>
          <Grid mt={2} container spacing={4} alignItems='center'>
                {finalList?.slice(0,loadIndex).map((track) => {
                    return(
                        <Grid item key={track.id} xs={12} sm={6} md={2}  >
                            <Card style={styles.card}  onClick={()=>navigate(ROUTES.SONGDETAILS + '/' + track.id)}
                                >
                                <CardMedia
                                    component="img"
                                    style = {{objectFit: 'cover'}}
                                    // style={styles.media}
                                    image={track.coverImage}
                                    alt={track.title}
                                />
                                <CardContent>
                                  <Typography>{track.title}</Typography>
                                </CardContent>
                                
                            </Card> 
                        </Grid>
                    )
                })}
                <Grid item xs={12} sm={6} md={2}>
                    <Box style={{display:'flex',alignItems: 'center' , justifyContent: 'center', height: '100%'}} > 
                        {!isLoading && <Button 
                            style={{fontSize: '30px' }} 
                            onClick={handleLoadMoreButtonClick}
                        >
                            Load more
                        </Button>
                          }
                        {isLoading && loadingMoreSongs()}
                      
                    </Box>
                </Grid>
              </Grid>
            </Box>
            }
        </Box>


    )
}

