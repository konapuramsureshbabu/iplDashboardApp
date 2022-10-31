import './index.css'

const MatchCard = props => {
  const {card} = props
  const colorToggle = card.match_status === 'Won' ? 'green' : 'red'
  return (
    <li className="listItem01">
      <img
        className="img112"
        src={card.competing_team_logo}
        alt={`competing team ${card.competing_team}`}
      />
      <p className="competing_team1">{card.competing_team}</p>
      <p className="competing_team2">{card.result}</p>
      <p className={colorToggle}>{card.match_status}</p>
    </li>
  )
}
export default MatchCard
