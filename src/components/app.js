import React, { Component } from 'react';
import MadlibForm from './madlib_form'


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='backgroundSkew'>
          <div className='madLibHeadings container'>
            <h1 className='madLibMainHeading'>React Mad Libs
            </h1>
            <h2 className='madLibSubHeading'>
              FIll out the fields below and click the generate button to see the Mad Lib Story
            </h2>
          </div>
          <MadlibForm/>
        </div>
      </div>
    );
  }
}
