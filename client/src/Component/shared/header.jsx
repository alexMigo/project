import React,{Component} from 'react'
import { Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
class  Header extends Component {

  handleLogout = () => {
    // console.log(this.props)
    this.props.logout();
    this.props.history.push('/login');
  }


  renderAuthButtons(isAuth) {
    if (isAuth) {
      return <a className='nav-item nav-link clickable' onClick={this.handleLogout}>Logout</a>
    }

    return (
        <React.Fragment>
          <Link className='nav-item nav-link' to='/login'>Login <span className='sr-only'>(current)</span></Link>
          <Link className='nav-item nav-link' to='/register'>Register</Link>
        </React.Fragment>
      )
  }


  render () {

    const {isAuth} = this.props.auth;

   

    return (
      <nav className='navbar navbar-dark navbar-expand-lg'>
      <div className='container'>
        <Link className='navbar-brand' to="/">BookWithMe</Link>
        <form className='form-inline my-2 my-lg-0'>
          <input className='form-control mr-sm-2 bwm-search' type='search' placeholder='Try ' aria-label='Search'></input>
          <button className='btn btn-outline-success my-2 my-sm-0 btn-bwm-search' type='submit'>Search</button>
        </form>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav ml-auto'>
          {this.renderAuthButtons(isAuth)}
          </div>
        </div>
      </div>
    </nav>
    
    )

  }
 
}

const mapStateToProps = (state) => {
   
  return {
     auth:state.auth
   }
}

export default withRouter(connect(mapStateToProps)(Header));
