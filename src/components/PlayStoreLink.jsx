import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'
import playStoreBadge from '@/images/google-play-badge.png'

export function PlayStoreLink({ color = 'black' }) {
  return (
    <Link
      href="https://play.google.com/store/apps/details?id=com.doctome.doctomePatient"
      aria-label="Download on the Play Store"
      className={clsx('rounded-lg transition-colors')}
      target="_blank"
    >
      <Image
        style={{ width: 145 }}
        src={playStoreBadge}
        alt={'Play Store Download Button'}
        unoptimized
      />
    </Link>
  )
}
