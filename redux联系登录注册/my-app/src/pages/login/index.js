import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actionCreators from '../../store/actions/login'
 class Login extends Component{
    render(){
        return(
            <div>   
                login
            </div>
        )
    }
}
const mapStateToProps = state=>{
    return{
        loginstate:state.Login
    }
}
const mapDispatchToProps = dispatch=>{
    return{
      actions:bindActionCreators(actionCreators,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);