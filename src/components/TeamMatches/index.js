import {Component} from 'react'
import Loader from 'react-loader-spinner'
import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {clickMatchDetails: {}, recentMatches: [], url: '', id: ''}

  componentDidMount() {
    this.getLatestMatchDetails()
  }

  getLatestMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    this.setState({
      clickMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      url: data.team_banner_url,
      id: params.id,
    })
  }

  render() {
    const {clickMatchDetails, recentMatches, url, id} = this.state

    return (
      <>
        {recentMatches.length === 0 ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <div className={`team-match-bg ${id}`}>
            <img src={url} alt="team banner" className="team-banner-img" />
            <p className="latest-match"> Latest Match</p>
            <LatestMatch clickMatchDetails={clickMatchDetails} />
            <div className="match-container">
              <ul className="list">
                {recentMatches.map(each => (
                  <MatchCard card={each} key={each.id} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </>
    )
  }
}
export default TeamMatches
