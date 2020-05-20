import React, {Component} from "react"
import BoredCard from "./components/BoredCard"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Jumbotron from 'react-bootstrap/Jumbotron'


class App extends Component {
    constructor() {
        super()
        this.state = {
            activity: [],
            buttonHit: false
        }
        this.fetchAdvice=this.fetchAdvice.bind(this)
    }

    componentDidMount() {
          this.fetchAdvice()
        }

    fetchAdvice() {
        fetch("https://www.boredapi.com/api/activity")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    activity: data
                }, () => {
                  console.log(this.state.buttonHit)
                })
          })
    }
    render() {
      const { activity, buttonHit } = this.state
          return (
            <div className="app">
                <div className="title">
                    <h1>
                        Bored?
                    </h1>
                </div>
                    <div className="button"><Button size='lg' onClick={this.fetchAdvice}>
                        Bored?</Button></div>
                      <div className="card">
                        <Card border="primary" bg="light" style={{ width: '18rem'}}>
                            <Card.Body>
                                <Card.Header>Still bored?</Card.Header>
                                <Card.Title>Activity: {this.state.activity.activity}
                                    </Card.Title>
                                {this.state.activity.accessibility ?
                                    <Card.Text>Accessibility: {this.state.activity.accessibility}
                                        </Card.Text>:
                                    null}
                            </Card.Body>
                        </Card>
                      </div>
                  </div>
        )
    }
}

export default App
