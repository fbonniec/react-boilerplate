import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

import { Container, Form, Input, Button } from './Styled'

class New extends React.Component {
  state = {
    begin: moment().format(),
    end: moment()
      .add(1, 'days')
      .format(),
    comment: '',
  }

  componentDidMount() {}

  componentWillUnmount() {}

  onSubmit = e => {
    e.preventDefault()
    const { onSave } = this.props
    onSave(this.state)
  }

  setDate = key => value => {
    this.setState({ [key]: value.format() })
  }

  setComment = e => {
    this.setState({ comment: e.target.value })
  }

  render() {
    const { begin, end, comment } = this.state
    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          <DatePicker
            required
            key="begin"
            selected={moment(begin)}
            onChange={this.setDate('begin')}
          />
          <DatePicker
            required
            key="end"
            selected={moment(end)}
            onChange={this.setDate('end')}
          />
          <Input value={comment} onChange={this.setComment} />
          <Button type="submit">Save</Button>
        </Form>
      </Container>
    )
  }
}

New.propTypes = {
  onSave: PropTypes.func.isRequired,
}

export default New
