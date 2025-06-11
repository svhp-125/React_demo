import { Component } from "react";

 class Login extends Component{

    constructor(props){
        super(props);
        this.state={username:'', password:'', result:'', touched:false, showPassword:false, selectedcolor:''}
        // this.usernameChange=this.usernameChange.bind(this);
        // this.passwordChange=this.passwordChange.bind(this);
        // this.onChangeHandler=this.onChangeHandler.bind(this);
        this.fnlogin=this.fnlogin.bind(this);
        // this.handlecolor=this.handlecolor.bind(this);

    }

// usernameChange = (e) => {
//     this.setState({username:e.target.value})
// }

// passwordChange=(e) => {
//     this.setState({password:e.target.value})
// }

// onChangeHandler(e) {
//     var source = e.target.id;
//     switch(source) {
//         case "txtUsername":
//             this.setState({username:e.target.value})
//             break;
//         case "txtPassword":
//              this.setState({password:e.target.value})
//              break;
//     }
// }

fnlogin() {
    this.setState({touched:true});
    var username = this.state.username;
    var password = this.state.password;
    if(username === password){
        this.setState({result:true})
    }else {
        this.setState({result:false})
    }
}

// handlecolor(e)
// {
//     this.setState({selectedcolor:e.target.value})
// }
    render(){
        return <div style={{backgroundColor:this.state.selectedcolor}}>
            {JSON.stringify(this.state)}
            <h3>{this.props.title}</h3>
            Username: <input id="txtUsername" type="text" className="form-control" onChange={(e) => this.setState({username:e.target.value})} />
            Password: <input id="txtPassword" type={this.state.showPassword ? "text" : "password"} className="form-control" onChange={(e)=> this.setState({Password:e.target.value})}/><br/>
            <h5>Select a color</h5>
            <select onClick={(e) => this.setState({selectedcolor:e.target.value})}>
                <option value="">Select</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
            </select>
            <br></br>
            
            <label for="check">Show Password</label>   <input id="check" type="checkbox" onChange={(e) => this.setState({showPassword:e.target.checked})}/><br></br>
            <input type="button" value="Login" className="btn btn-success" onClick={this.fnlogin}/>&nbsp;
            <input type="reset" value="Reset" className="btn btn-warning" /><br/>
        {
            this.state.result && <div style={{'color':'Green'}}>Success</div>
        }
        {
            this.state.touched && !this.state.result && <div style={{'color':'Red'}}>Failure</div>
        }
        
        </div>
  
    }
}

export default Login;