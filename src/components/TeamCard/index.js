import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {cardDetails} = props
  const {id, teamImageUrl, team} = cardDetails
  return (
    <li className="list-container">
      <Link className="list-item" to={`/team-matches/${id}`}>
        <img src={teamImageUrl} alt={team} className="team-img" />
        <p className="team-text">{team}</p>
      </Link>
    </li>
  )
}
export default TeamCard
