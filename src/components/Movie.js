import React, { Component } from 'react'
import '../App.css';
// import Card from 'react-bootstrap/Card'
// import ListGroup from 'react-bootstrap/ListGroup'



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
                        <img src={val.imageUrl} />  
                        <p>popularity: {val.popularity}</p>    
                        <p>release_date: {val.release_date}</p>  


                        {/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>   */}

    
        </div>
                )
            })
        }
        </div>
        )
    }
}

export default Movie
