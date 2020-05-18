import React, { Component } from 'react';
import axios from 'axios'
import gallery from './Gallery.js'



const APIKEY = 'ba44692c';
const movieList = ['tt6751668','tt1675434','tt5311514','tt1187043','tt0119217','tt1596363','tt2802144','tt4154756']
const movies = []

function showPic(picture){
    var background = document.getElementById("background");
    var pic = document.createElement("img");
    background.style.display = "flex"
    background.style.flexDirection = "row"
    var child = background.lastElementChild;
    while (child){
        background.removeChild(child);
        var child = background.lastElementChild;
    }

    pic.src=movies[picture].poster
    pic.className = "center"
    
    var name = document.createElement("h1")
    var dir = document.createElement("h3")
    var rate = document.createElement("h3")
    name.textContent = movies[picture].title
    dir.textContent = movies[picture].director
    rate.textContent = movies[picture].rating

    background.appendChild(name)
    background.appendChild(pic);
    background.appendChild(dir)
    background.appendChild(rate)
}

function exitBigPicture(){
    if (document.getElementById("background").style.display == "flex"){
        document.getElementById("background").style.display = "none"
    }
}

async function getMovieData(){
    for (let i=0;i<movieList.length; i++){
        axios.get(`http://www.omdbapi.com/?apikey=${APIKEY}&i=${movieList[i]}`)
            .then(res=> {
                movies.push( {
                    title:res.data.Title, 
                    director:res.data.Director, 
                    poster:res.data.Poster, 
                    rating:res.data.imdbRating
                })
            })   
    }
}

export class Movies extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
        //bind handlers here
        //this.getPoster = this.getPoster.bind(this)
    }

    async componentDidMount(){
        //getMovieData()
        try{
            for (let i=0;i<movieList.length; i++){
                const response = await axios.get(`http://www.omdbapi.com/?apikey=${APIKEY}&i=${movieList[i]}`)
                const json = await response
                movies.push( {
                    title:json.data.Title, 
                    director:json.data.Director, 
                    poster:json.data.Poster, 
                    rating:json.data.imdbRating,
                    numID: i
                })
                this.setState({data:movies})
            }
        } 
        catch(error){
            console.error(error)
        }
    }

    componentDidUpdate(prevProps, prevState){

    }

    // getPoster(movie){
    //     axios.get(`http://www.omdbapi.com/?apikey=${APIKEY}&i=${movieList[movie]}`)
    //         .then(res=> {
    //             console.log(res.data.Poster)
    //             return(<img src={res.data.Poster} alt="pic of trip!" title="HIII" onClick={() => showPic('t',2)}></img>)
    //         }) 
    // }

    render() {
        return (
            <div>
                <div class="galSections">
                    <h4>Some of my Favorite Movies</h4>
                    <div class="gallery">
                        {movies.map( (mov) => {
                            return (
                                <div class="expand">
                                    <img src={mov.poster} alt="a movie" onClick={() => showPic(mov.numID)}></img>
                                </div>
                            );
                        }
                        )}
                    </div>
                </div>
                <div class="bigBackground" id="background" onClick={exitBigPicture}>
                    <div class="bigPicture" id="pict">
                    </div>
                </div>
            </div>
        );
    }
}

export default Movies;