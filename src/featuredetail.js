import { Container } from 'react-bootstrap';
import Card from './card';
import ReactPlayer from 'react-player'
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Featuredetail extends Component{
    constructor(props){
        super(props)
        this.state = {
            title:'',
            videokey:'',
            overview:''
          };
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/'+this.props.match.params.id+'?api_key=55f8686a83422ba313fc6620a21abd8b&language=th')
        .then(response =>  response.json())
        .then(resData => {
           this.setState({ title : resData.original_title });
           this.setState({ overview : resData.overview });
           console.log(resData)
        })

        fetch('https://api.themoviedb.org/3/movie/'+this.props.match.params.id+'/videos?api_key=55f8686a83422ba313fc6620a21abd8b&language=en-US')
        .then(response =>  response.json())
        .then(resData => {
           this.setState({ videokey : resData.results[0].key });
           console.log(this.state.videokey)
        })
    }

    render(){
        return( 
            <Container>
             {/* style={{background:"gray", padding:""}} */}
                {/* <h1 style={{margin:"20px"}}>Detail</h1> */}
            

                <center style={{margin:"50px"}}>
                    <ReactPlayer url={'https://www.youtube.com/watch?v='+this.state.videokey} playing />
                </center>
                <h1 style={{margin:"30px"}}>{this.state.title}</h1>

                <p>{this.state.overview}</p>

            </Container>
        )
    }
    
}

export default withRouter(Featuredetail);
