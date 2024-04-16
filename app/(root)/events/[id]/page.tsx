import { getEventById } from '@/lib/actions/event.actions';
import { SearchParamProps } from '@/types'
import React from 'react'

const EventDetails = async ({params: {id}}: SearchParamProps) => {
  const event = await getEventById(id);
  return (
    <div>{event.description}</div>
  )
}

export default EventDetails
