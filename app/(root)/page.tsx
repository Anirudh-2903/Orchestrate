import Link from 'next/link';
import {Button} from '../../components/ui/button';
import Image from 'next/image';
import Hero from '../../public /assets/images/hero.png';


export default function Home() {
  return (
    <>
      <section className='bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10'>
        <div className='wrapper grid grid-cols-1 md:grid-cols-2 gap-5 2xl:gap-0'>
          <div className='flex flex-col justify-center gap-8'>
            <h1 className='h1-bold'>From Spark to Spectacle: <span className="text-primary-500">Orchestrate</span>  your events with ease!</h1>
            <p className='p-regular-20 md:p-regular-24'>With our support, you can spend less time managing spreadsheets and more time crafting an event that sparks
               lasting memories. Let's turn your vision into a spectacle, together.</p>
            <Button size="lg" asChild className='button w-full sm:w-fit'>
              <Link href="#events">
                Explore Now
              </Link>
            </Button>
        </div>
        <Image src={Hero} alt='hero' className='max-h-[70h] 2xl:max-h-[50h] object-contain object-center'/>
        </div>
      </section>

      <section id="events" className='wrapper my-8 flex flex-col gap-8 md:gap-12'>
        <h2 className='h2-bold'>Trusted by <br /> Thousands of Events</h2>
        <div className='w-full gap-5 flex flex-col md:flex-row'>
          Search
          CategoryFilter
        </div>
      </section>
    </>
  );
}
