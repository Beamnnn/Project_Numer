import React from "react";
import {Input,Tooltip,Button} from 'antd'
const Parser = require('expr-eval').Parser;

class ProductList extends React.Component{
  constructor(props){
    super(props);
    // X=[];
    // Y=[];
    this.state={
          Arr:[],
          xl:"",
          xr:1,
          E:"",
          error:"",
          X:[],
          Y:[],
          submitted:true
        };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.BisectionMethod=this.BisectionMethod.bind(this);
  }

  handleSubmit(event) {
    
    const {xl,xr,E} = this.state
    this.setState({submitted:false});   
    this.BisectionMethod(xl,xr,E)
    event.preventDefault()
    
    
    
  }
  handleChange(event){
    this.setState({[event.target.name] : event.target.value})
    // this.setState({submitted:false});
    
    }
  BisectionMethod(xl,xr,E){
      var X=this.state.X;
      var Y=this.state.Y;
      const parser = new Parser();
      function func(x)
      {
        let expr = parser.parse(E)
        console.log("fx = "+expr.evaluate({ x: (x) }))
        return expr.evaluate({ x: (x) })
      }
      var err=(x0,x1)=>{return Math.abs((x0-x1)/x0)};
      var arr;
      var data={xl:0,xr:0,xm:0,err:0,fxl:0,fxr:0,fxm:0,count:1};
      // var t=true;
      var xOld=0;
      data.xl=parseFloat(xl);
      X.push(data.err);
      data.xr=parseFloat(xr);
      
      while(data.count<30){
        
        data.xm=((data.xl*func(data.xr))-(data.xr*func(data.xl)))/(func(data.xr)-func(data.xl));
        data.fxl=(func(data.xl)).toFixed(6);
        data.fxr=(func(data.xr)).toFixed(6);
        data.fxm=(func(data.xm)).toFixed(6);
        data.err=err(data.xm,xOld);
        X.push(data.err);
        arr=this.state.Arr;
        arr.push({xl:data.xl.toFixed(6),xr:data.xr.toFixed(6),xm:data.xm.toFixed(6),err:data.err.toFixed(6),fxl:data.fxl,fxr:data.fxr,fxm:data.fxm,count:data.count});
        if(func(data.xm)===0||data.count===30){
          break;
        }
        else if(func(data.xl)*func(data.xm)<0){
          xOld=data.xr;
          data.xr=data.xm;
        }
        else if(func(data.xl)*func(data.xm)>0){
          xOld=data.xl;
          data.xl= data.xm;
        }
        data.count++;
        
          
          
        
        
      }
      
      
      
      
      
       
  }
  

  render(){
    const DataRow=(props)=>{return (<tr><td>{props.data.count}</td>
                                        <td>{props.data.xl}</td>
                                        <td>{props.data.xr}</td>
                                        <td>{props.data.xm}</td>
                                        <td>{props.data.fxl}</td>
                                        <td>{props.data.fxr}</td>
                                        <td>{props.data.fxm}</td>
                                        <td>{props.data.err}</td></tr>);
                            }
    let rows=this.state.Arr.map(x =>{return <DataRow key={x.count} data={x}/>});
    
    return (
      <div>
      <form >
        <div className="head">
          <div>
              <h1>&emsp;Test&emsp;</h1>
              <label htmlFor='XL'>&emsp;XL :&emsp;</label>
              <Tooltip  title={'Input XL!'} placement="topLeft" overlayClassName="numeric-input">
                  <Input
                  style={{
                    width: '20%',
                  }}
                  name='xl'
                  type="number"
                  placeholder='Starting XL'
                  value = {this.state.xl}
                  onChange={this.handleChange}
                  size='8'
                  />
                </Tooltip>
              {/* <input
                name='xl'
                type="number"
                placeholder='Starting XL'
                value = {this.state.xl}
                onChange={this.handleChange}
                size='8'
              /> */}
              <label htmlFor='XR'>&emsp;XR :&emsp;</label>
              <Tooltip  title={'Input XR!'} placement="topLeft" overlayClassName="numeric-input">
                  <Input
                  style={{
                    width: '20%',
                  }}
                  name='xr'
                  type="number" 
                  placeholder='Starting XR'
                  value={this.state.xr}
                  onChange={this.handleChange}
                  size='8'
                  />
                </Tooltip>
              {/* <input
                name='xr'
                type="number" 
                placeholder='Starting XR'
                value={this.state.xr}
                onChange={this.handleChange}
                size='8'
              /> */}
              
            </div>
            <p></p>
            <div>
            <label htmlFor='E'>&emsp;Funct :&emsp;</label>
            <Tooltip  title={'Input function here!'} placement="topLeft" overlayClassName="numeric-input">
                <Input
                style={{
                  width: '30%',
                }}
                name='E'
                type="text" 
                placeholder='Input function here!'
                value={this.state.E}
                onChange={this.handleChange}
                size='30'
                />
              </Tooltip>
            {/* <input
              name='E'
              type="text" 
              placeholder='Input function here!'
              value={this.state.E}
              onChange={this.handleChange}
              size='30'
            /> */}
            
              </div>
              <p></p>
              <div>
              &emsp;<Button onClick={this.handleSubmit}>Calculate</Button>
              
              </div>
          </div>
      
  
    <p></p>
    <div>{(this.state.submitted)?<div></div>:<div>
                                                  <div><center>
                                                    <table >
                                                    <thead>
                                                    <tr><th>iteration</th>
                                                        <th>XL</th>
                                                        <th>XR</th>
                                                        <th>XM</th>
                                                        <th>Func(Xl)</th>
                                                        <th>Func(Xr)</th>
                                                        <th>Func(Xm)</th>
                                                        <th>Error</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                      {rows}
                                                    </tbody>
                                                    </table></center>
                                                    </div>
                                                  </div>
              }
</div>
        <br></br>        
      
        </form>
      </div>
    );
  }
}




export default ProductList;