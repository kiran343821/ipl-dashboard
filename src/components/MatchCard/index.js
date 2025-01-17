// Write your code here
import './index.css'
import {Component} from 'react'

class MatchCard extends Component {
  render() {
    const {matchData} = this.props
    const {result, competing_team, competing_team_logo, matchStatus} = matchData
    return (
      <li className={`match-card ${matchStatus}`}>
        <img
          className="match-card-logo"
          src={competing_team_logo}
          alt=  {competing_team}
        />
        <h1 className="match-card-name">{competing_team}</h1>
        <p className="match-card-result">{result}</p>
        <p className="match-status">{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
