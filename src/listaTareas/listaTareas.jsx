import { Component } from "react";
import App from "../App";

class ListaTareas extends Component{
    render = () =>{
        return(
            <>
                <h2>Things i need to do:</h2>
                <ul>
                    <li>Learn React</li>
                    <li>Climb Mt. Everest</li>
                    <li>Run a marathon</li>
                    <li>Feed the dogs</li>
                </ul>
            </>
        )
    }
}

export default ListaTareas;