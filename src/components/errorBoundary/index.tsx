import { Component } from "react";

interface IProps {
    children: any
}

interface IState {
    hasError: boolean
}

class ErrorBoundary extends Component<IProps,IState> {

    constructor(props: IProps){
        super(props)
        this.state = {hasError: false};
    }

    //DETECTA EL ERROR PARA ACTUAR EL STATE
    static getDerivedStateFromError(error: any){
        return { hasError: true};
    }

    componentDidCatch(error: any, errorInfo: any){
        console.log("ERROR:")
        console.log(error)
        console.log("error Info:")
        console.log(errorInfo)
    }

    render() {

        if(this.state.hasError){
            return <h1>Something went wrong</h1>
        }

        return this.props.children
    }
}

export default ErrorBoundary