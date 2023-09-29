// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {value: true}

  onButton = () => {
    this.setState(prevState => ({value: !prevState.value}))
  }

  render() {
    const {value} = this.state
    const bg = value ? 'dark' : 'light'
    const onButton = value ? 'Light Mode' : 'Dark Mode'
    return (
      <div>
        <div className={`${bg}`}>
          <h1>Click to change mode</h1>
          <button type="button" onClick={this.onButton}>
            {onButton}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
