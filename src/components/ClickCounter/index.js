// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  //   onClickBtnIncrement = () => {
  //     this.setState(prevState => ({
  //       count: prevState.count + 1,
  //     }))
  //   }

  onClickBtnIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1>
          The button has been clicked
          <span className="count-element"> {count}</span> times
        </h1>
        <p>Click the button to increase the count</p>
        <button
          type="button"
          onClick={this.onClickBtnIncrement}
          className="btn"
        >
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
