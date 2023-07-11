import { render } from "@testing-library/react";
import React from 'react';
import { Component } from 'react';
import { Chart, Series } from 'devextreme-react/chart';
const Parser = require('expr-eval').Parser;

class graphical extends Component{
        constructor(props)
        {
            super(props)
            this.state = {XL:'',XR:'',ErrorApox:'',func:''}
            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)    
        }

        BisectionCalcFunction(XL,XR,ErrorApox,Funct)
        {  
            const parser = new Parser();
            function fx(x)
            {
                let expr = parser.parse(Funct)
                console.log("fx = "+expr.evaluate({ x: (x) }))
                return expr.evaluate({ x: (x) })
            }

            let x=0
            let i = 0; //จำนวนรอบบ
            var arr=[]
            let xl = parseFloat(XL);
            let xr = parseFloat(XR);
            let xm,xold;
            let ans
            let oldans
            let ErrorApox_Answer=10000000; //set as default
            let inputerrorapox = parseFloat(ErrorApox)
            if(xl!=null && xr!=null && Funct!=null && inputerrorapox!=null){
                for(x=xl;x<=xr;x+=0.001)
                {
                    i++;
                    fx(x);
                    if(fx(x)>=0-ErrorApox && fx(x)<=0+ErrorApox)
                    {
                        break;
                    }
                    ans = Math.floor(x*1000000)/1000000;
                    ErrorApox_Answer = Math.abs((ans-oldans)/ans)*100
                    oldans = ans;
                    arr.push({err:ErrorApox_Answer,i:ans})
    
    
                    //render("Answer="+arr1+" at Iteration = "+arr2)
                }
                arr.push({i:i,err:ErrorApox_Answer})
                console.log("XL = "+xl)   //console log for debugging
                console.log("XM = "+xm)
                console.log("XR = "+xr)
                console.log("Errorapox = "+ErrorApox_Answer)
    

                render  (" ans = "+ans.toFixed(6)+" Errorapox = "+ErrorApox_Answer.toFixed(6)+" at iteration #"+i)
                    
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
        
        return "Input XL,XR,ErrorApox and Function first!!"
        }


        handleSubmit(event){
            const {XL,XR,ErrorApox,Funct} = this.state
        
            const xm = this.BisectionCalcFunction(XL,XR,ErrorApox,Funct)
            event.preventDefault()
            console.log("XL = "+XL)   //console log for debugging
            console.log("XR = "+XR)
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
                    <h2>Graphical</h2> 
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
                        <label htmlFor='XL'>&emsp;XL :&emsp;</label>
                        <input
                            name="XL"
                            placeholder="XL"
                            value = {this.state.XL}
                            onChange={this.handleChange}
                            size='30'
                        />

                    <div className="row2"></div>
                        <label className="XR">&emsp;XR :&emsp;</label>
                        <input
                            name="XR"
                            placeholder="XR"
                            value={this.state.XR}
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
export default graphical;