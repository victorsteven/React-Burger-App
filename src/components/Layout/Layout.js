import React, {Component} from 'react';
import Aux from './../../hoc/Aux'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


  class Layout extends Component {

    state =  {
      showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
      this.setState({ showSideDrawer: false });
    }

    render() {
      const layoutStyles = {
        marginTop: '100px',
      }
      return (
        <Aux>
          <Toolbar />
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