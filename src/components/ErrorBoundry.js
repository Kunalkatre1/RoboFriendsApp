import React, {Component} from 'react';

//Error Boundary is introduced in React 16. 
class ErrorBoundary extends Component{
    constructor(props){
        super();
        this.state = {
            hasError : false,
        }
    }

    //componentDidcatch is a lifecycle hook that catches errors if there is any error while rendering the view. It takes 2 parameter, i.e errors & the info. So, if there is any error we can set the state of our app accrodingly & handle the error.
    componentDidCatch(error, info){
        this.setState({hasError: true});
    }

//While rendering the app if there is any error, the state of the app will be set as defined in the DidCatch lifecycle hook & we can accrodingly render the view of the application.
    render(){
        if (this.state.hasError){
            return <h1>Oops! Something went wrong...</h1>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;