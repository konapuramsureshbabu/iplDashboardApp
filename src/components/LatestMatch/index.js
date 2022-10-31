import './index.css'

const LatestMatch = props => {
  const {clickMatchDetails} = props

  return (
    <div className="latestMatchBg1">
      <div className="cardLeft">
        <p className="heading1">{clickMatchDetails.competing_team}</p>
        <p>{clickMatchDetails.date}</p>
        <p>{clickMatchDetails.venue}</p>
        <p>{clickMatchDetails.result}</p>
      </div>
      <img
        className="teamLogo"
        src={clickMatchDetails.competing_team_logo}
        alt={`latest match ${clickMatchDetails.competing_team}`}
      />
      <div className="cardRight">
        <p>First Innings</p>
        <p>{clickMatchDetails.first_innings}</p>
        <p>Second Innings</p>
        <p>{clickMatchDetails.second_innings}</p>
        <p>Man of The Match</p>
        <p>{clickMatchDetails.man_of_the_match}</p>
        <p>Umpires</p>
        <p>{clickMatchDetails.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
