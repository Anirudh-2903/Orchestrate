import { IEvent } from '@/lib/database/models/event.model';
import { formatDateTime } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Search from '../../public /assets/icons/arrow.svg';
import Edit from '../../public /assets/icons/edit.svg';
import { auth } from '@clerk/nextjs';
import { Delete } from 'lucide-react';
import { DeleteConfirmation } from './DeleteConfirmation';

type CardProps = {
  event: IEvent;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
}

const Card = ({event,hasOrderLink,hidePrice}: CardProps) => {

  const {sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  const isEventCreator = userId === event.organizer._id.toString();


  return (
    <div className="group relative flex min-h-[380px] md:min-h-[438px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg">
      <Link href={`/events/${event._id}`} style={{backgroundImage: `url(${event.imageUrl})`}} className='flex-center flex-grow bg-grey-50 bg-cover bg-center text-grey-500' />
      {/* IS EVENT CREATOR */}
      {isEventCreator && !hidePrice && (
        <div className='absolute top-2 right-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all'>
            <Link href={`/events/${event._id}/update`}>
                <Image src={Edit} alt='edit' width={20} height={20} />
            </Link>
            <DeleteConfirmation eventId={event._id} />
        </div>
      )}
      <Link href={`/events/${event._id}`} className='flex min-h-[230px] flex-col gap-3 md:gap-4 p-5'>
        {!hidePrice && <div className='flex gap-2'>
            <span className='p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-60'>{event.isFree ? 'FREE' : `₹${event.price}`}</span>
            <p className='p-semibold-14 rounded-full bg-grey-500/10 px-4 py-1 text-grey-500'>{event.category.name}</p>
        </div>}
        <p className='p-medium-16 md:p-medium-18 text-grey-500'>{formatDateTime(event.startDateTime).dateTime}</p>
        <p className='p-medium-16 md:p-medium-20 text-black line-clamp-2 flex-1'>{event.title}</p>
        <div className='flex-between w-full'>
            <p className='p-medium-14 md:p-medium-16 text-grey-600'>{event.organizer.firstName} {event.organizer.lastName}</p>
            {hasOrderLink && (
                <Link href={`/orders?eventId=${event._id}`} className='flex gap-2'>
                    <p className='text-primary-500'>Order Details</p>
                    <Image src={Search} alt='search' width={10} height={10} />
                </Link>
            )}
        </div>
      </Link>
    </div>
  )
}

export default Card;
