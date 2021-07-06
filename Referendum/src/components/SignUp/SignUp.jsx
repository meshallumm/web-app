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

import Home from '../Home/Home.jsx';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stage: 1,
      askMobile: true,
      nextPageName: '',
      myFunction: '',
      componentArr: {
        pages: [<MobileNum />, <IdentNumber />, CreatePass],
        func: this.replaceComponent,
      },
    };
    this.signProcess = function () {};

    //  this.pages = [MobileNum, IdentNumber, CreatePass];
  }

  signProcess = function switcher(num) {
    switch (num) {
      case 2:
        return <IdentNumber afterSubmit={this.setState({ stage: 3 })} />;
        break;
      case 3:
        return <CreatePass afterSubmit={this.setState({ stage: 4 })} />;
      case 4:
        return <Home />;
        break;
      default:
        return <MobileNum afterSubmit={this.setState({ stage: 2 })} />;
    }
  };
  componentDidMount() {
    this.setState({ myFunction: this.signProcess });
    console.log(typeof myFunction);
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
            {this.state.myFunction}
            {/* {this.replaceComponent()} */}
          </Route>
        </div>
      </div>
    );
  }
}

export default Login;
