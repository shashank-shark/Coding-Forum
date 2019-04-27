import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react'

class EventListAttendee extends Component {
  render() {
    return (
      <List.Item>
          <Image as='user-image' size='tiny' circular={true} src='https://randomuser.me/api/portraits/women/40.jpg' />
      </List.Item>
    )
  }
}

export default EventListAttendee
