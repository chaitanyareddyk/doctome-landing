import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Doctome - Privacy Policy</title>
      </Head>
      <div className="mx-36 my-12 flex flex-col">
        <div className="mx-auto max-w-7xl px-4 py-4 text-gray-900 sm:px-6 sm:py-8 lg:px-8 lg:pt-12">
          <div className="mx-auto max-w-2xl tracking-wide">
            <h2 className="pb-6 text-3xl leading-9 tracking-tight text-gray-900 sm:pb-10 sm:text-5xl sm:leading-10">
              Doctome Privacy Policy
            </h2>
            <p className="text-gray-600">Effective as of June 20, 2023</p>
            <p className="py-2 pt-4">
              This policy sets out our privacy practices and explains how we
              handle the information we collect when you visit and use our site,
              services, mobile applications, products, and content provided by
              Doctome, in existence now or in the future (“Doctome Services”).
            </p>
            <p className="py-2">
              A “Device” is any computer used to access Doctome Services,
              including without limitation a desktop, laptop, mobile phone,
              tablet, or other consumer electronic device. This Privacy Policy
              governs your access of the Doctome Service, regardless of how you
              access it, and by using our Services you consent to the
              collection, transfer, processing, storage, disclosure and other
              uses described in this Privacy Policy. All of the different forms
              of data, content, and information described below are collectively
              referred to as “information.”
            </p>

            <h3 className="pt-4 text-xl sm:text-3xl">
              Information We Collect and Store
            </h3>

            <p className="py-2">
              We may collect and store the following information when running
              the Doctome Service:
            </p>

            <ol className="ml-8 list-outside list-decimal py-1">
              <li>
                Information You Provide. When you register an account with
                Doctome, we start by collecting some personal information, such
                as your name and email address.
              </li>
              <li>
                Log Data. When you use the Service, we automatically record
                information from your Device, its software, and your activity
                using the Services. This may include the Device’s Internet
                Protocol (“IP”) address, browser type, the web page visited
                before you came to our website, search terms you submit to our
                website, geographic location, identification numbers associated
                with your Devices, date and time stamps associated with activity
                on the website, system configuration information, and other
                interactions with the Service.
              </li>

              <li>
                Cookies. We also use “cookies” to collect information and
                improve our Services. A cookie is a small data file that we
                transfer to your Device. We may use “persistent cookies” to save
                your registration ID and login password for future logins to the
                Service. We may use “session ID cookies” to enable certain
                features of the Service, to better understand how you interact
                with the Service and to monitor aggregate usage and web traffic
                routing on the Service. You can instruct your browser, by
                changing its options, to stop accepting cookies or to prompt you
                before accepting a cookie from the websites you visit. If you do
                not accept cookies, however, you may not be able to use all
                aspects of the Service.
              </li>
            </ol>

            <h3 className="pt-4 text-xl sm:text-3xl">
              How We Use Personal Information
            </h3>

            <p className="py-2">
              In the course of using the Service, we may collect personal
              information that can be used to contact or identify you (“Personal
              Information”). Personal Information is or may be used: (i) to
              provide and improve our Service, (ii) to administer your use of
              the Service, (iii) to better understand your needs and interests,
              (iv) to personalize and improve your experience, (v) to provide or
              offer software updates and product announcements, and (iv) to
              verify that users meet the criteria to use Doctome Services as
              provided in the Terms of Service.
            </p>

            <p className="py-2">
              Some Devices allow applications to access real-time location-based
              information (for example, GPS). Also, some of the information we
              collect from a Device, for example IP address, can sometimes be
              used to approximate a Device’s location. We may use this
              information to optimize your experience.
            </p>
            <p className="py-2">
              We also collect some information (ourselves or using third party
              services) using logging and cookies, such as IP address, which can
              sometimes be correlated with Personal Information in the form of
              analytics. We use this information for the above purposes and to
              monitor and analyze use of the Service, for the Service’s
              technical administration, to increase our Service’s functionality
              and user-friendliness, and to verify users have the authorization
              needed for the Service to process their requests.{' '}
            </p>

            <h3 className="pt-4 text-xl sm:text-3xl">
              Information Sharing and Disclosure
            </h3>
            <p className="py-2">
              The information we collect is used to provide and improve Doctome
              Services and content, and to prevent abuse. We do not sell your
              Personal Information to third parties. We may share or disclose
              your information with your consent, for example if you use a
              third-party application to access your account.
            </p>
            <p className="py-2">
              We may use certain trusted third-party companies and individuals
              to help us provide, analyze, and improve the Service (including
              but not limited to data storage, maintenance services, database
              management, web analytics, security, payment processing, and
              improvement of the Service’s features). These third parties may
              have access to your information only for purposes of performing
              these tasks on our behalf and under obligations similar to those
              in this Privacy Policy.
            </p>
            <p className="py-2">
              We may share your information with a third-party application with
              your consent. We are not responsible for what those parties do
              with your information, so you should make sure you trust the
              application and that it has a privacy policy acceptable to you.
            </p>
            <p className="py-2">
              We may disclose to parties outside Doctome information about you
              that we collect when we have a good faith belief that disclosure
              is reasonably necessary to (a) comply with a law, regulation, or
              compulsory legal request; (b) protect the safety of any person
              from death or serious bodily injury; (c) prevent fraud or abuse of
              Doctome or its users; or (d) to protect Doctome’s property rights.
            </p>
            <p className="py-2">
              We will independently object to requests for access to information
              about users of our website that we believe to be improper.
            </p>
            <p className="py-2">
              If we are involved in a merger, acquisition, or sale of all or a
              portion of our assets, your information may be transferred as part
              of that transaction, but we will notify you (for example, via
              email and/or a prominent notice on our website) of any change in
              control or use of your Personal Information, or if either become
              subject to a different Privacy Policy. We will also notify you of
              choices you may have regarding the information.
            </p>
            <p className="py-2">
              We may disclose your non-private, aggregated, or otherwise
              non-personal information, such as usage statistics of our Service.
            </p>

            <h3 className="pt-4 text-xl sm:text-3xl">
              Changing or Deleting Your Information
            </h3>
            <p className="py-2">
              If you are a registered user, you may review, update, correct or
              delete the Personal Information provided in your registration or
              account profile. If your personally identifiable information
              changes, or if you no longer desire our service, you may update or
              delete it by making the change on your account settings. In some
              cases, we may retain copies of your information if required by
              law. For questions about your Personal Information on our Service,
              please contact{' '}
              <a
                href="mailto:support@doctome.in"
                className="cursor-pointer text-blue-700 hover:underline"
              >
                support@doctome.in.
              </a>
            </p>

            <h3 className="pt-4 text-xl sm:text-3xl">Data Retention</h3>
            <p className="py-2">
              We will retain your information for as long as your account is
              active or as needed to provide you Services. If you wish to cancel
              your account or request we no longer use your information to
              provide you services, you may delete your account by sending a
              request to delete your account to{' '}
              <a
                href="mailto:support@doctome.in"
                className="cursor-pointer text-blue-700 hover:underline"
              >
                support@doctome.in.
              </a>{' '}
              We may retain and use your information as necessary to comply with
              our legal obligations, resolve disputes, and enforce our
              agreements. Consistent with these requirements, we will try to
              delete your information quickly upon request. Please note,
              however, that there might be latency in deleting information from
              our servers and backed-up versions might exist after deletion. In
              addition, we do not delete from our servers files that you have in
              common with other users.
            </p>

            <h3 className="pt-4 text-xl sm:text-3xl">Contacting Us</h3>
            <p className="py-2">
              If you have any questions about this Privacy Policy, please
              contact us at{' '}
              <a
                href="mailto:support@doctome.in"
                className="cursor-pointer text-blue-700 hover:underline"
              >
                support@doctome.in.
              </a>
            </p>

            <h3 className="pt-4 text-xl sm:text-3xl">
              Changes to Our Privacy Policy
            </h3>
            <p className="py-2">
              This Privacy Policy may change from time to time. If we make a
              change to this privacy policy we believe materially reduces your
              rights, we will provide you with notice (for example, by email).
              And we may provide notice of changes in other circumstances as
              well. By continuing to use the Service after those changes become
              effective, you agree to be bound by the revised Privacy Policy.
            </p>
            <p className="py-3 text-gray-600">
              This Agreement was last modified on June 20, 2023.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
