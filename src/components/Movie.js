import React, { Component } from 'react'
import '../App.css';


export class Movie extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (<div>
            <h2 class="header">About  Movies:</h2>
            { this.props.movieData.map((val,index)=>{
                return(
                    <div key={index}>
              
                        <p>title:{val.title}</p>  
                        <p>overview: {val.overview}</p>    
                        <p>vote_average: {val.vote_average}</p>    
                        <p>vote_count: {val.vote_count}</p>    
                        <p>poster_path: {val.poster_path}</p>    
                        <p>popularity: {val.popularity}</p>    
                        <p>release_date: {val.release_date}</p>    

    
        </div>
                )
            })
        }
        </div>
        )
    }
}

export default Movie
