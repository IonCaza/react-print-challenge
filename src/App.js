import React, { Component } from 'react';
import './App.css';
import { 
  drawPageLines, 
  identifyChildrenWithNoChildren, 
  identifyChildrenWithNoChildrenBetweenGuideLines,
  identifyGuideLineAreas,
  insertBreakPointsAndUpdate, 
  countPagesEnd, 
  countPagesStart
  } 
  from './App.functions';

  // http://ryanve.com/lab/resolution/

class App extends Component {
  componentDidMount() {
    countPagesStart();
    drawPageLines();
    identifyChildrenWithNoChildren();
    identifyGuideLineAreas();
    identifyChildrenWithNoChildrenBetweenGuideLines();
    insertBreakPointsAndUpdate();
    drawPageLines();
    identifyChildrenWithNoChildren();
    identifyGuideLineAreas();
    identifyChildrenWithNoChildrenBetweenGuideLines();
    insertBreakPointsAndUpdate();
  }

  render() {
    return (
      <div className="Main" style={{paddingTop:'0.2in'}}>
        <div className="App">
          <div style={{height:'15px', display:'block'}}>Paragraph1</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
        </div>
        <div className="App">
          <div style={{height:'15px', display:'block'}}>Paragraph2</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
        </div>
        <div className="App">
          <div style={{height:'15px', display:'block'}}>Paragraph3</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
        </div><div className="App">
          <div style={{height:'15px', display:'block'}}>Paragraph1</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
        </div>
        <div className="App">
          <div style={{height:'15px', display:'block'}}>Paragraph2</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
        </div>
        <div className="App">
          <div style={{height:'15px', display:'block'}}>Paragraph3</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
        </div>
        <div className="App">
          <div style={{height:'15px', display:'block'}}>Paragraph4</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
        </div>
        <div className="App">
          <div style={{height:'15px', display:'block'}}>Paragraph5</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
        </div>
        <div className="App">
          <div style={{height:'15px', display:'block'}}>Paragraph6</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
        </div>
        <div className="App">
          <div style={{height:'15px', display:'block'}}>Paragraph7</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
          <div style={{height:'15px', display:'block'}}>line</div>
        </div>
      </div>
    );
  }
}

export default App;
