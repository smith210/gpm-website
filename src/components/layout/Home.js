import React, { Component } from 'react';
import ApplyFAQ from './ApplicationFAQ.js';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Collapsible from './Collapsible.js';
import Footer from './footer/Footer.js';
import './Collapsible.css';
import Header from './header/Header.js';
import './FAQ.css';


export default class Home extends Component{
  render() {
    return (
      <div className='page'>
	<Header></Header>
        {/* Banner image */}

        {/* <div className='banner'></div> */}

	<main className='body'>

          <div className='Content'>
            {/* <h1 className='page-title'>CS Graduate Program Manager</h1> */}
	
	   {/*
            <a href='/admin'>
              <button id='bypass' className='button'>
                BYPASS
              </button>
            </a> */}

            <h2 className='page-title'>Important Information</h2>


          </div>

      </main>
		<Footer></Footer>
      </div>
    );
  }
}