import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import {Header} from '@/components/Header'
import { Footer } from '@/components/Footer'

const htmlString = ` <h1 class='text-[#000000] font-extrabold'>Privacy Policy</h1>
<p>Updated at 2023-09-10</p>
<p class='font-extrabold'>Summary:</p>
<p>This Privacy Policy ("Policy") outlines the manner in which DOCTOME ("we," "us," or "our") collects, uses, discloses, and protects the information provided by users (“you”, “your”, or “User”) of the DOCTOME mobile application ("App"). Protecting your privacy is a fundamental concern for us, and we are committed to safeguarding the personal and health-related data you share with us. By accessing or using the DOCTOME App, you consent to the practices described in this Privacy Policy.</p>




<h1 class='font-extrabold'>1.Information We Collect</h1>
<p>We collect the following categories of information:</p>
<ul>
<h3>1.1 Personal Information:</h3>
<li>When you register for an account, we may collect personal information, including your name, date of birth, contact details, and payment information.</li>

<li>If you use our healthcare services, we collect health-related information, including medical history, prescriptions, and consultation notes.</li>

<h3>1.2 Device Information:</h3>

<li>We may automatically collect technical information about the device you use to access the App, such as device type, operating system, and unique device identifiers.</li>

<h3>1.3 Location Information:</h3>
<li>With your consent, we collect and use location information to provide accurate healthcare services, including locating nearby doctors and healthcare professionals.</li>

<h3>1.4 Usage Information:</h3>
<li>We gather information about how you use the App, including the services you access, and your interactions with healthcare professionals.</li>



<h1 class='font-extrabold'> 2. Use of Information</h1>
<p>We use the information we collect for the following purposes:
<ul>
<h3>2.1 Providing Healthcare Services:</h3>
<li>To facilitate bookings for medical consultations, lab tests, medicines, and nurse visits through the App.</li>

<li>To enable healthcare professionals to provide personalized healthcare services and treatment.</li>

<h3>2.2 Communication:</h3>

<li>To communicate with you about your appointments, prescriptions, and healthcare-related matters.</li>

<h3>2.3 Improving Services:</h3>
<li>To analyze and enhance the functionality and quality of our services.</li>

<h3>2.4 Compliance:</h3>
<li>To ensure compliance with applicable laws and regulations.</li>

<h3>2.5 Research and Development:</h3>
<li>To conduct research and development activities aimed at improving healthcare services.</li>

</ul>
</p>

<h1 class='font-extrabold'> 3.Disclosure of Information</h1>
<p>We may disclose your information under the following circumstances:
<ul>
<h3>3.1 With Healthcare Providers:</h3>
<li>We share your information with healthcare professionals to facilitate medical consultations and treatments.</li>


<h3>3.2 Service Providers:</h3>

<li>We may engage third-party service providers to assist us in delivering our services, including payment processing, data analytics, and technical support.</li>

<h3>3.3 Legal Obligations:</h3>
<li>We may disclose your information to comply with legal obligations, respond to lawful requests, and protect our rights and interests.</li>

<h3>3.4 Business Transfers:</h3>
<li>In the event of a merger, acquisition, or sale of all or part of our assets, your information may be transferred as part of the transaction.</li>

<h3>3.5 Consent:</h3>
<li>We may share your information with your explicit consent.</li>

</ul>
</p>

<h1 class='font-extrabold'>4. Data Security</h1>
<p>We take reasonable measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no data transmission over the internet or electronic storage is completely secure, and we cannot guarantee the absolute security of your information. In the absence of negligence on our part we cannot be held liable for any loss you may suffer if a third party procures unauthorized access to any data you provide when accessing or ordering from the Website.</p>

<h1 class='font-extrabold'>5. Data Retention</h1>
<p>We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy and as required by applicable laws and regulations.</p>



<h1 class='font-extrabold'>6.  Your Data Privacy </h1>
<ul>
<li>6.1 Access and update your personal information: You can access and update your personal information through your account settings in the App.</li>



<li>6.2 Request the deletion of your account and associated data: If you no longer wish to use the app, you can request the deletion of your account and all associated data by contacting us as outlined in Section 8 of our Terms of Service..</li>


</ul> <br/>

<h1 class='font-extrabold'>7.  Children's Privacy</h1>
<p>The DOCTOME App is not intended for use by individuals under the age of 18. We do not knowingly collect information from children under this age.</p> <br/>

<h1 class='font-extrabold'> 8.  Contact Us</h1>
<p>If you have questions or concerns about this Privacy Policy, wish to access or delete your personal information, or have any privacy-related inquiries, please contact us at <a href="mailto:support@doctome.in" class="text-blue-600"
> support@doctome.in</a>.</p> <br/>

<h1 class='font-extrabold'>9. Changes to this Privacy Policy</h1>
<p>We reserve the right to update or modify this Privacy Policy at any time. Updates will be posted in the App, and the effective date will be amended accordingly. Your continued use of the App following the posting of changes constitutes your acceptance of those changes.</p> <br/>

<h1 class='font-extrabold'>10 Governing Law</h1>
<p>This Privacy Policy is governed by and construed in accordance with the laws of India.

</p> <br/>

<p class="font-semibold">By using the DOCTOME App, you acknowledge that you have read, understood, and agree to this Privacy Policy. Your use of the App signifies your acceptance of this Policy.</p>


</ul>`

export default function Privacy() {
  return (
    <>
    <Header/>
    
      <Head>
        <title>Doctome - Privacy Policy</title>
      </Head>
      <div className="md:mx-8  mx-4 my-12 flex flex-col">

        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </div>
  <Footer/>
    </>
  )
}
