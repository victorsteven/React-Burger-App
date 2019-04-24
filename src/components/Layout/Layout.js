import React, {Component} from 'react';
import Aux from './../../hoc/Aux'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


  class Layout extends Component {

    state =  {
      showSideDrawer: false 
    }

    sideDrawerClosedHandler = () => {
      this.setState({ showSideDrawer: false });
    }

    // drawerToggleCliked ()
    sideDrawerToggleHandler = () => {
      this.setState((prevState) => {
          return { showSideDrawer: !prevState.showSideDrawer }
      })
    }

    render() {
      const layoutStyles = {
        marginTop: '100px',
      }
      return (
        <Aux>
          <Toolbar drawerToggleCliked={this.sideDrawerToggleHandler}/>
          <SideDrawer 
            open={this.state.showSideDrawer}
            closed={this.sideDrawerClosedHandler}
          /> 
          <div className="Content">
            <main style={layoutStyles}> 
              {this.props.children}
            </main>
          </div>
        </Aux>
      )
    }
  }


export default Layout;