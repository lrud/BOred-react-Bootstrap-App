import React from "react"
import Card from 'react-bootstrap/Card'


class BoredCard extends React.Component {
  render() {
    const { activity, accessibility } = this.props;
        return(
            <div>
                <Card style={{ width: '18rem'}}>
                    <Card.Body>
                        <Card.Header>{activity}</Card.Header>
                        <Card.Text>{accessibility}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
          )
      }
}

export default BoredCard
