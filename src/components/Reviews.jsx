import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

import { Container } from '@/components/Container'

const reviews = [
  {
    title: 'Lifesaver!',
    body: "Doctome's been incredible for me & family. At-home doctor visits, meds, lab tests in one app. A nurse at home during illness is a blessing. 500 INR per consult, highly recommend!",
    author: 'Prakash Reddy',
    rating: 5,
  },
  {
    title: 'Impressive Services',
    body: "Extremely impressed with 'Doctome' app's services. Book doctors at home easily. Ordering meds & tests is super convenient. Nurse service during fever was timely & efficient. Kudos!",
    author: 'Harish Kumar',
    rating: 5,
  },
  {
    title: 'Revolutionizing Healthcare',
    body: "Doctome's revolutionized healthcare in Hyderabad. Effortless doctor visits, medicine delivery & nurse care at home. Flat 500 INR price is very reasonable. Thank you, Doctome!",
    author: 'Aditya',
    rating: 5,
  },
  {
    title: 'Highly Reliable & Convenient',
    body: "Can't speak highly enough of 'Doctome.' Booking is a breeze, doctors are knowledgeable, & home care nurse is compassionate & skilled. Highly recommended in Hyderabad!",
    author: 'Ravi Teja',
    rating: 5,
  },
  {
    title: 'A Must-Have App',
    body: "As a busy professional, Doctome's a game-changer. Easy doctor bookings at preferred time. Meds & lab tests delivered at home. Comprehensive healthcare at an affordable price.",
    author: 'Vaishnavi',
    rating: 5,
  },
  {
    title: 'Life-Saver App!',
    body: "Doctome's an incredible life-saver. Home doctor visits, meds, and lab tests from one app. A nurse at home during illnesses is a true blessing. 500 INR per consultation is highly affordable. I really recommend it!",
    author: 'Sreeja Reddy',
    rating: 5,
  },
  {
    title: 'Outstanding Medical Services',
    body: "I'm extremely impressed with the 'Doctome' app's services. It's super easy to book a doctor to visit our home, and the doctors are experienced and highly professional. The option to order medicines and lab tests through the app is a great advantage. I recently had a fever, and they promptly assigned a caring nurse to take care of me at home. I'm deeply grateful for their timely and efficient medical management. Big thumbs up to the 'Doctome' team!",
    author: 'Priyanka',
    rating: 4,
  },
  {
    title: 'Revolutionizing Healthcare',
    body: "The 'Doctome' app has completely revolutionized healthcare access in Hyderabad. With just a few taps, I can effortlessly arrange a doctor's visit, get essential medicines delivered to my doorstep, and even have a nurse attend to my loved ones when they are unwell. The flat rate of 500 INR is remarkably reasonable and makes quality healthcare accessible to all. Thank you, 'Doctome,' for making our lives so much easier!",
    author: 'Srinivas Raju',
    rating: 5,
  },
  {
    title: 'Highly Convenient & Reliable',
    body: "I cannot speak highly enough of 'Doctome' for their outstanding service. The app is user-friendly, and booking a doctor's appointment is a breeze. The doctors are highly knowledgeable, and I feel extremely confident in their medical advice. Having the option to order medicines and lab tests is a huge time-saver. I recently used their nurse service for my elderly mother, and the nurse was both compassionate and highly skilled. I highly recommend 'Doctome' to everyone in Hyderabad!",
    author: 'Ramana V',
    rating: 5,
  },
  {
    title: 'A Must-Have App for Every Home',
    body: "As a busy professional, 'Doctome' has been a game-changer for me. No more waiting in long queues at clinics! I can easily book a doctor at my preferred time, and they promptly show up at my doorstep. It's absolutely amazing! The option to order medicines and lab tests is an added bonus. I haven't seen any other app offering such comprehensive medical services at such an affordable price. 'Doctome' is undoubtedly a must-have app for every household in Hyderabad.",
    author: 'Potha Reddy',
    rating: 4,
  },
  {
    title: 'Excellent Healthcare App',
    body: "Doctome has exceeded my expectations in every way. Booking doctor consultations is extremely easy, and the doctors are highly qualified. The option to order medicines and lab tests from home is a huge time-saver. The nurse service for home care is a godsend during illnesses. The pricing is very reasonable, making healthcare accessible to all. I'm thrilled with the 'Doctome' app!",
    author: 'Shashidhar N',
    rating: 5,
  },
  {
    title: 'Efficient and Convenient',
    body: "I am thoroughly impressed with 'Doctome.' The app's efficiency in booking doctor consultations and delivering medicines is top-notch. The doctors are experienced, and their advice is reliable. Having a nurse take care of patients at home is a brilliant service. The flat rate for consultations is very pocket-friendly. I highly recommend this app for anyone seeking hassle-free healthcare services!",
    author: 'Narsing Rao',
    rating: 5,
  },
  {
    title: 'Game-Changer in Medical Services',
    body: "Doctome is a true game-changer! The app's seamless user experience allows me to book doctor appointments effortlessly. The quality of medical services is excellent, and the doctors are well-trained. I've availed of their nurse service for my father, and it was a huge relief during his illness. The flat rate for consultations is a steal deal. I am highly satisfied with 'Doctome.'",
    author: 'Ayesha',
    rating: 5,
  },
  {
    title: 'Reliable Healthcare Solution',
    body: "I can't thank 'Doctome' enough for their reliable healthcare solutions. The app is intuitive and easy to navigate. The doctors are skilled and provided great medical advice. Having the option to order medicines and lab tests online is a big plus. The nurse service is commendable and takes away the worry during illnesses. I wholeheartedly endorse 'Doctome' to everyone in Hyderabad!",
    author: 'Sravani',
    rating: 5,
  },
  {
    title: 'Exceptional Medical Assistance',
    body: "The 'Doctome' app offers exceptional medical assistance. Booking doctors for home visits is smooth, and the doctors are highly professional. The ability to order medicines and lab tests with ease is praiseworthy. The nurse service is a blessing for patients who need care at home. At just 500 INR, this app provides incredible value for money. Highly recommended!",
    author: 'Swapna Patil',
    rating: 5,
  },
  {
    title: 'Highly Efficient and Reliable',
    body: 'Doctome has been highly efficient and reliable for me and my family. The ease of booking at-home doctor consultations, ordering medicines, and lab tests from a single app is simply amazing. The option to have a nurse provide home care during illnesses is a true blessing. The flat rate of 500 INR for consultations is incredibly affordable. I would definitely recommend it to everyone!',
    author: 'Anjali Rathod',
    rating: 4,
  },
  {
    title: 'Top-notch Medical Services',
    body: "The 'Doctome' app's medical services are top-notch. It's so simple to book a doctor for home visits, and the doctors are highly skilled and professional. The option to order medicines and lab tests from the comfort of my home is a game-changer. The nurse service is exceptional and provides excellent care. 'Doctome' is truly a one-stop solution for all medical needs!",
    author: 'Md Muqtar',
    rating: 5,
  },
  {
    title: 'Revolutionary Healthcare Access',
    body: "With 'Doctome,' healthcare access has been truly revolutionary in Hyderabad. It's extremely convenient to arrange doctor visits and get essential medicines delivered right to your doorstep. Having a nurse available for home care is a remarkable service. The affordable flat rate of 500 INR for consultations is unbeatable. Thank you, 'Doctome,' for making healthcare accessible to everyone!",
    author: 'Jayanth',
    rating: 5,
  },
  {
    title: 'Great Convenience and Dependability',
    body: "I'm highly impressed with the great convenience and dependability of 'Doctome.' Booking is a breeze, doctors are knowledgeable, & home care nurse is compassionate & skilled. Highly recommended for reliable healthcare solutions!",
    author: 'Sujith',
    rating: 5,
  },
  {
    title: 'An Exceptional Healthcare Platform',
    body: "Doctome truly stands out as an exceptional healthcare platform. The app's user interface is intuitive, making it easy to book doctor visits. The doctors are highly qualified, and their medical advice is invaluable. The option to order medicines and lab tests online is a major plus. The nurse service for home care is top-notch. At just 500 INR, this app is worth every penny!",
    author: 'Karunakar',
    rating: 5,
  },
]

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-cyan-500' : 'fill-gray-300'
          )}
        />
      ))}
    </div>
  )
}

function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  className,
  reviews,
  reviewClassName = () => {},
  msPerPixel = 0,
}) {
  let columnRef = useRef()
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current.offsetHeight)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef()
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  columns = [columns[0], columns[1], splitArray(columns[2], 2)]

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...columns[0], ...columns[2].flat(), ...columns[1]]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= columns[0].length + columns[2][0].length &&
                  'md:hidden',
                reviewIndex >= columns[0].length && 'lg:hidden'
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...columns[1], ...columns[2][1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= columns[1].length && 'lg:hidden'
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={columns[2].flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pb-16 pt-20 sm:pb-24 sm:pt-32"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          Healthcare, at your doorstep.
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          Hear from the users in our pilot program.
        </p>
        <ReviewGrid />
      </Container>
    </section>
  )
}
