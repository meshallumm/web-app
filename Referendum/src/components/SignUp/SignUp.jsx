import React, { Component } from 'react';
import {
  // BrowserRouter as Router,
  // Redirect,
  Route,
  useParams,
  // Switch,
  // withRouter,
} from 'react-router-dom';
import Header from '../../containers/Header.jsx';
import MobileNum from './MobileNum.jsx';
import IdentNumber from './IdentificationNum.jsx';
import CreatePass from './CreatePassword.jsx';
import './SignUp.css';
import PasswordExample from './PasswordExample.jsx';
import JustASimpleComp from './JustASimple';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      askMobile: true,
      componentArr: {
        pages: [<MobileNum />, <IdentNumber />, CreatePass],
        func: this.replaceComponent,
      },
      nextPageName: '',
    };
    //  this.pages = [MobileNum, IdentNumber, CreatePass];
  }

  // componentDidMount() {
  //   // let element = document.getElementById('tempPage').innerHTML;
  //   // console.log('element inner', element);
  //   // console.log(document.querySelector('div p').outerHTML);
  // }

  // replaceComponent = (page = 0) => {
  //   console.log(typeof page, page);
  //   const pages = this.state.componentArr;
  //   console.log(pages);
  //   switch (page) {
  //     case 1:
  //       //return this.state.componentArr.pages[page];
  //       return <IdentNumber legit={this.replaceComponent} />;
  //       break;
  //     case 2:
  //       return <CreatePass />;
  //     default:
  //       console.log('MobileNum');
  //       this.setState({ nextPageName: pages.page[page] });
  //     // return this.state.nextPageName;
  //     //return <MobileNum legit={this.replaceComponent} />;
  //     // return this.state.componentArr.pages[page];
  //   }
  // };
  // return window.location.reload();

  // replaceComponent = (page = 0) => {
  //   let element = document.getElementById('tempPage');
  //   element.innerHTML = element.innerHTML.replace(
  //     /\D/g,
  //     this.state.componentArr[page]
  //   );
  //   console.log(page);
  //   //return this.setState({ nextPageName: this.state.componentArr[page] });
  //   //return this.state.componentArr[page];
  // };

  render() {
    return (
      <div>
        <Header />
        <div className='form-div'>
          <Route>
            <CreatePass />
            {/* {this.replaceComponent()} */}
          </Route>
        </div>
      </div>
    );
  }
}

export default Login;
