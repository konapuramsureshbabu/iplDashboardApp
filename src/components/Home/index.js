import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

const teamsApiUrl = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {iplData: [], isLoader: true}

  componentDidMount() {
    this.getIplData()
  }

  getIplData = async () => {
    const response = await fetch(teamsApiUrl)
    const data = await response.json()
    const {teams} = data
    const updatedData = teams.map(each => ({
      id: each.id,
      team: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({iplData: updatedData, isLoader: false})
  }

  render() {
    const {iplData, isLoader} = this.state
    return (
      <div className="bg-container">
        {isLoader ? (
          <div testid="loader>
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <>
            <div className="ipl-logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                className="logo"
                alt="ipl logo"
              />
              <h1 className="heading">IPL Dashboard</h1>
            </div>
            <ul className="list-container">
              {iplData.map(each => (
                <TeamCard key={each.id} cardDetails={each} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
