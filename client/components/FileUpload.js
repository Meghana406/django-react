import React from "react"

class Greetings extends React.Component{

    constructor(){
        super();
        this.state = {
            userList:[]
        };
    }

    componentWillMount() { 
      axios.get('/public/data.json') // JSON File Path 
          .then( response => { 
            this.setState({ 
            userList: response.data 
          }); 
        }) 
        .catch(function (error) { 
          console.log(error); 
        }); 
      } 

    render(){
        const userList =this.state.userList;
        return (
           <div className="jumbotron">
                {!this.props.auth.isAuthenticated &&
                <h1>Don't Have an account ? Sign Up </h1>}
                {this.props.auth.isAuthenticated &&
                <form>
                   <input type="file" id="myFile" name="filename"  accept = ".json"/>
                   <input type="submit" />
                </form>
                }

           </div>
        )
    }
}

export default Greetings