import { Container } from 'react-bootstrap';
import Card from './card';
import React, { Component } from 'react';

class Features extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: [],
          };
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=55f8686a83422ba313fc6620a21abd8b&language=th&page=1')
        .then(response =>  response.json())
        .then(resData => {
           this.setState({ data: resData.results });
           console.log((this.state.data))
        })
    }

    render(){
        const items = []
        this.state.data.forEach(element => {
            items.push(<Card id={element.id} title ={element.original_title}
                       imageUrl={"https://image.tmdb.org/t/p/w500/"+element.poster_path} 
                       pathUrl={"/features/"+element.id}/>)
        });
        return( 
        <Container style={{padding:"20px"}}>
            <h1>Upcoming</h1>
            <div  style={{background:"gray",display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
             {items}
            </div>
        </Container>
        )
    }
    
}


export default Features
