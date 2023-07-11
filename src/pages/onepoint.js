import { render } from "@testing-library/react";
import React from 'react';
import { Component } from 'react';
import * as Math from 'mathjs';
import { Chart, Series } from 'devextreme-react/chart';
const Parser = require('expr-eval').Parser;


class onepoint extends Component{
        constructor(props)
        {
            super(props)
            this.state = {X:'',ErrorApox:'',func:''}
            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)    
        }

        BisectionCalcFunction(X,ErrorApox,Funct)
        {  
            const parser = new Parser();
            function fx(x)
            {
                let expr = parser.parse(Funct)
                console.log("fx = "+expr.evaluate({ x: (x) }))
                return expr.evaluate({ x: (x) })
            }

            let i = 0; //จำนวนรอบบ
            var arr=[]
            let x = parseFloat(X);
            let xnew;
            let ErrorApox_Answer=10000000;
            let f
             //set as default
            let inputerrorapox = parseFloat(ErrorApox)
            if(x!=null  && Funct!=null && inputerrorapox!=null){
                console.log('hello')
            while(ErrorApox_Answer>inputerrorapox)
                { 
                    xnew=x
                    fx(x)
                   x=fx(x)

                    ErrorApox_Answer = Math.abs((xnew-x)/xnew)*100
                i++
                arr.push({i:i,err:ErrorApox_Answer})
                console.log("X = "+x)   //console log for debugging
                console.log("Errorapox = "+ErrorApox_Answer)
    

                render  (" X = "+xnew.toFixed(6)+" Errorapox = "+ErrorApox_Answer.toFixed(6)+" at iteration #"+i)
                    
            }
            
             return (
                  <Chart id="chart" dataSource={arr}>
                    <Series
                      valueField="i"
                      argumentField="err"
                     name="My oranges"
                      type="line"
                      color="#ffaa66" />
                  </Chart>
               );
        }
        return "Input X,ErrorApox and Function first!!"
        }


        handleSubmit(event){
            const {X,ErrorApox,Funct} = this.state
        
            const xm = this.BisectionCalcFunction(X,ErrorApox,Funct)
            event.preventDefault()
            console.log("X = "+X)   //console log for debugging
            console.log("Function = "+Funct)
            console.log("Errorapox = "+ErrorApox)
            render(xm) //same here at line 53 i literally stuck at re-rendering


        }

        handleChange(event)
        {this.setState({
            [event.target.name] : event.target.value
            }) 
        }

        render(){
            return(
                <div className="container-fluid">
                    <form className="Submit" onSubmit={this.handleSubmit}>  
                    <h1>One point</h1> 
                    <div className="row0"></div>
                        <label htmlFor='Funct'>&emsp;Fx :&emsp;</label>
                        <input
                            name="Funct"
                            placeholder='F(x)'
                            value={this.state.Funct}
                            onChange={this.handleChange}
                            size='30'
                        />
                    <div className="row1"></div>
                        <label htmlFor='X'>&emsp;X :&emsp;</label>
                        <input
                            name="X"
                            placeholder="X"
                            value = {this.state.X}
                            onChange={this.handleChange}
                            size='30'
                        />

                    
                    <div className="row3"></div>
                        <label className="EX">&emsp;ER :&emsp;</label>
                        <input
                            name="ErrorApox"
                            placeholder="Error"
                            value={this.state.ErrorApox}
                            onChange={this.handleChange}
                            size='30'
                        />
                    <div className="row4"></div>
                        &emsp;&emsp;&emsp;&emsp;
                        <button className = "Numer-button"> 
                            Calculation
                        </button>
                    </form>
                </div> 

            )
        }
    }
export default onepoint;