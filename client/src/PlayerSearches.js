
import React from "react";

class Opp extends React.Component {
  constructor() {
    // console.log("Constructor running");
    super();
    this.state = {
      //   gitcard: {},
      //   gittext: "",
      //   followers: [],
      searchdata: [],
      searchtext: "",
   
    };
  }
  //followrs_url = searches
  componentDidMount() {
    console.log("componentDidMount");
    fetch(`http://localhost:5000/api/players`)
      .then((res) => res.json())
      .then((ppl) => {
        // console.log("ppl: ", ppl);
        this.setState({ ...this.state, searchdata: ppl });
      })
      .catch((err) => {
        // console.log("Err: ", err);
      });
  }


  render() {
    return (
      <div>
        <h1 className="headers">Hello soccarettes!</h1>

        
        <div data-testid="numsfordays" className="playernumactual">
          {this.state.searchdata.map(item =>{
            return(
                <p className='itemse'  style={{color:'blue'}} key={item.id} >{item.searches}</p>
            )
          })}
        </div>

      
      </div>
    );
  }
}

export default Opp;
