
import React from "react";

class Opp extends React.Component {
  constructor() {
    console.log("Constructor running");
    super();
    this.state = {
      //   gitcard: {},
      //   gittext: "",
      //   followers: [],
      searchdata: [],
      searchtext: "",
      dataitself: {},
    };
  }
  //followrs_url = searches
  componentDidMount() {
    console.log("componentDidMount");
    fetch(`http://localhost:5000/api/players`)
      .then((res) => res.json())
      .then((ppl) => {
        console.log("ppl: ", ppl);
        this.setState({ ...this.state, searchdata: ppl });
        fetch(`${ppl.searches}`)
          .then((res) => res.json())
          .then((ppls) => this.setState({ ...this.state, dataitself: ppls }))
          .catch((err) => console.log("Err: ", err));
      })
      .catch((err) => {
        console.log("Err: ", err);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");

    // update the state
    console.log(prevState);

    if (prevState.searchdata !== this.state.searchdata) {
      this.fetchgit();
      console.log("ppl", this.state.dataitself);
    }
  }



  fetchgit = (e) => {
    console.log("ran");

    fetch(`${this.state.dataitself.searches}`)
      .then((res) => res.json())
      .then((ppls) => this.setState({ ...this.state, dataitself: ppls }))
      .catch((err) => console.log("Err: ", err));
    console.log(this.state.dataitself);
  };

  render() {
    return (
      <div>
        <h1 className="headers">Hello soccarettes!</h1>

        
        <div className="playernumactual">
          {this.state.searchdata.map(item =>{
            return(
                <p className='itemse'>{item.searches}</p>
            )
          })}
        </div>

         {/* <div>
        {this.state.dataitself.map((searchdata, index) => (
            <div key={index} className="soych">
              <p>{searchdata.searches}</p>
            </div>
          ))}
        </div>  */}
        
        {/* searchdata: {},
      searchtext: "",
      dataitself: [], */}
      
      </div>
    );
  }
}

export default Opp;
