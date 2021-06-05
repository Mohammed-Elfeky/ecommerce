import React, { Component } from 'react'
import {ImageContainer} from './renderErrorStyle'
export class ErrorBoundary extends Component {
    
    state={
        thereIsError:false
    }

    static getDerivedStateFromError(){
        return {thereIsError:true}
    }

    render() {
        return (
            <div>
                {
                  this.state.thereIsError ?
                   <ImageContainer>
                       <img src={`https://i.imgur.com/qIufhof.png`} alt="" />
                       <h3>some thing went wrong</h3>
                   </ImageContainer> :
                   this.props.children
                }
            </div>
        )
    }
}

export default ErrorBoundary
