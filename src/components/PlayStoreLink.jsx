import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'
import playStoreBadge from '@/images/google-play-badge.png'

export function PlayStoreLink({ color = 'black' }) {
  return (
    <Link
      href="#"
      aria-label="Download on the Play Store"
      className={clsx('rounded-lg transition-colors')}
    >
      <Image
        style={{ width: 145 }}
        src={playStoreBadge}
        alt={'Play Store Badge'}
        unoptimized
      />
    </Link>
  )
}
