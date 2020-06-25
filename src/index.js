import './file.css';
import React from "react";
import ReactDOM from "react-dom";
import Ajax from "./ajax";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
class App extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            headline:""
        };
    }

    componentDidMount(){
        fetch("https://cwpeng.github.io/live-records-samples/data/content.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        headline: result.headline,
                        
                    });
                },
                (error) => {
                    console.log("error!")
                }    
            );
    }

    render(){
        let headLine = this.state.headline;
        return <div>
            <div><Link to="/start">快速開始</Link></div>
            <div><Link to="/react">React 基礎</Link></div>
            <div><Link to="/redux">Redux 基礎</Link></div>
            
            
            <Route exact path="/"><h3>{headLine}</h3></Route>
            <Route path="/start"><Ajax page="0"/></Route>
            <Route path="/react"><Ajax page="1"/></Route>
            <Route path="/redux"><Ajax page="2"/></Route>
        </div>
    }
}



ReactDOM.render(
    <Router>
        <Switch>
            <App/>
        </Switch>
    </Router>,document.querySelector("#root")
    );

