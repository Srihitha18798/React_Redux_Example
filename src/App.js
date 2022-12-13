import React from "react";
import { connect} from "react-redux";
import Inc from "./Inc";

const App=({count})=>{
  return (
    <div>
      <center>
        Count from App component :{count} <br/><hr/>
        <Inc/>
      </center>

    </div>
  );
}

const mapStateToProps=state=>({
  count:state
})



export default connect(mapStateToProps)(App);
