import './file.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
class Ajax extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            arr:[],
            isLoading:true
        }; 
    }
    componentDidMount(){
        fetch("https://cwpeng.github.io/live-records-samples/data/content.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        arr:result.chapters,
                        isLoading:false
                    });
                },
                (error) => {
                    console.log("error!")
                }    
            );
    }
    // componentDidUpdate(){
    //     console.log(this.state.arr[parseInt(this.props.page)].sections);
    // }
    render(){
        if (this.state.isLoading == false){
            // console.log(this.state.arr[parseInt(this.props.page)].sections);
            // console.log("render here");
            let renderArray = this.state.arr[parseInt(this.props.page)].sections;
            let content = renderArray.map((section,index)=><li key={index}>{section}</li>);
            return <div>
                    <ul>{content}</ul>
                    <div><Link to="/">回首頁</Link></div>
                </div>
        }else{
            return null
        } 
    }
}

class Render extends React.Component{

}

export default Ajax;

