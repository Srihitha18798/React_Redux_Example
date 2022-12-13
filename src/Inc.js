import React from "react";
import { connect } from "react-redux";
import { increase,decrease } from "./action";

const Inc=({count,increase,decrease})=>{

    return(
        <div>
            Count from Inc component: {count} <br/> <hr/>
            <button onClick={()=>increase()}>Increment</button> &nbsp;&nbsp;
            <button onClick={()=>decrease()}>Decrement</button> &nbsp;&nbsp;
        </div>
    );
}

 const mapStateToProps=state=>({
    count:state
  })

  const mapDispatchToProps=dispatch=>{
    return {

    increase:()=>dispatch({type:'INCREMENT'}),
    decrease:()=>dispatch({type:'DECREMENT'})

  }
  }
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(Inc);