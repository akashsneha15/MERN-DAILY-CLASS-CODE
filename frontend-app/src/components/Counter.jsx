import { Component } from "react";

//Component is a parent class 
//Counter is child class


export class Counter extends Component{
    constructor(){
        super();

        //state is used to hold the data 
        this.state={
            count:0,
        };
    }
    render(){
        return(
            <>
                <h1>Count: {this.state.count}</h1>
                <button onClick={()=>{
                    this.setState((pre)=>{            //pre is stored in arrow fun to fetch previous value
                        return {count: pre.count+1};
                    })
                }}>Increment++</button><br /><br />
                <button onClick={()=>{
                    this.setState((pre)=>{
                        return {count:0}
                    })
                }}>Reset</button><br /><br />
                <button onClick={()=>{
                    this.setState((pre)=>{
                        return {count:pre.count-1};

                    })
                }}>Decrement--</button>

            </>
        )

    } 
        
}
//export default Counter;
