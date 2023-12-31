import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Support() {
  return (
    <>
      <Head>
        <title>Doctome - Support</title>
      </Head>
      <Header/>
      <div className="md:mx-8  mx-4 my-12 flex flex-col">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    Get in touch
                  </h2>
                  {/* <p className="mt-4 leading-7 text-gray-600">
                    Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac
                    pellentesque.
                  </p> */}
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                  <div className="rounded-2xl bg-gray-50 p-10">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">
                      Support
                    </h3>
                    <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                      <div>
                        <dt className="sr-only">Email</dt>
                        <dd>
                          <a
                            className="font-semibold text-indigo-600"
                            href="mailto:support@doctome.in"
                          >
                            support@doctome.in
                          </a>
                        </dd>
                      </div>
                      <div className="mt-1">
                        <dt className="sr-only">Phone number</dt>
                        <dd>+91 9100572486</dd>
                      </div>
                    </dl>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-10">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">
                      User Account Deletion
                    </h3>
                    <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                      <div>
                        <dt className="sr-only">Email</dt>
                        <dd>
                          <a
                            className="font-semibold text-indigo-600"
                            href="mailto:deletemydata@doctome.in"
                          >
                            deletemydata@doctome.in
                          </a>
                        </dd>
                      </div>
                      <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                        <p>Write us an email with below subject:</p>
                        <p>Delete my account - [Phone Number]</p>
                      </address>
                    </dl>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-10">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">
                      Join our team
                    </h3>
                    <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                      <div>
                        <dt className="sr-only">Email</dt>
                        <dd>
                          <a
                            className="font-semibold text-indigo-600"
                            href="mailto:careers@doctome.in"
                          >
                            careers@doctome.in
                          </a>
                        </dd>
                      </div>
                      {/* <div className="mt-1">
                        <dt className="sr-only">Phone number</dt>
                        <dd>+1 (555) 905-4567</dd>
                      </div> */}
                    </dl>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-10">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">
                      Say hello
                    </h3>
                    <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                      <div>
                        <dt className="sr-only">Email</dt>
                        <dd>
                          <a
                            className="font-semibold text-indigo-600"
                            href="mailto:hello@doctome.in"
                          >
                            hello@doctome.in
                          </a>
                        </dd>
                      </div>
                      {/* <div className="mt-1">
                        <dt className="sr-only">Phone number</dt>
                        <dd>+1 (555) 905-5678</dd>
                      </div> */}
                    </dl>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    Location
                  </h2>
                  {/* <p className="mt-4 leading-7 text-gray-600">
                    Consequat sunt cillum cillum elit sint. Qui occaecat nisi in
                    ipsum commodo.
                  </p> */}
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                  <div className="rounded-2xl bg-gray-50 p-10">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">
                      Hyderabad
                    </h3>
                    <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                      <p>Plot No 27, KGM Enclave</p>
                      <p>Bachupally, Hyd, IN 500090</p>
                    </address>
                  </div>
                  {/* <div className="rounded-2xl bg-gray-50 p-10">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">
                      New York
                    </h3>
                    <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                      <p>886 Walter Street</p>
                      <p>New York, NY 12345</p>
                    </address>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-10">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">
                      Toronto
                    </h3>
                    <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                      <p>7363 Cynthia Pass</p>
                      <p>Toronto, ON N3Y 4H8</p>
                    </address>
                  </div> */}
                  {/* <div className="rounded-2xl bg-gray-50 p-10">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">
                      Chicago
                    </h3>
                    <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                      <p>726 Mavis Island</p>
                      <p>Chicago, IL 60601</p>
                    </address>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
