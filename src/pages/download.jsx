// pages/download.tsx

import { useEffect } from 'react'

const Download = () => {
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase()

    if (/android/.test(userAgent)) {
      window.location.href =
        'https://play.google.com/store/apps/details?id=com.doctome.doctomePatient'
    } else if (/iphone|ipad|ipod/.test(userAgent)) {
      window.location.href =
        'https://apps.apple.com/in/app/doctome-doctor-at-doorstep/id6456892185'
    } else {
      // Redirect to a default page or show a message for unsupported devices
      window.location.href = '/'
    }
  }, [])

  return <div>Redirecting...</div>
}

export default Download
