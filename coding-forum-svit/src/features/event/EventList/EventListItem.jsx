import React, { Component } from 'react'
import { Segment, Icon, Item, Button, List } from 'semantic-ui-react';

import EventListAttendee from '../EventList/EventListAteendee'

class EventListItem extends Component {
  render() {

    const { event } = this.props;

    return (
           <Segment.Group>
              <Segment>
                <Item.Group>
                  <Item>
                    <Item.Image size="tiny" circular={true} src={event.hostPhotoURL} />
                    <Item.Content>
                      <Item.Header as="a">{event.title}</Item.Header>
                      <Item.Description>
                        Hosted by <a href='#simple'>{event.hostedBy}</a>
                      </Item.Description>
                    </Item.Content>
                  </Item>
                </Item.Group>
              </Segment>
              <Segment>
                <span>
                  <Icon name="clock" /> {event.date} |
                  <Icon name="marker" /> {event.venue}
                </span>
              </Segment>
              <Segment secondary>
                <List horizontal>
                <EventListAttendee />
                <EventListAttendee />
                <EventListAttendee />
                <EventListAttendee />
                </List>
              </Segment>
              <Segment clearing>
                <span>{event.description}</span>
                <Button as="a" color="teal" floated="right" content="View" />
              </Segment>
            </Segment.Group>
    )
  }
}

export default EventListItem
