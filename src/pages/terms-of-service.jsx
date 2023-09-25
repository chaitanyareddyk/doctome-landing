import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import {Header} from '@/components/Header'
import { Footer } from '@/components/Footer'


const htmlString = ` <h1 class='text-[#000000] font-extrabold'>Terms & Services</h1>
<p>Updated at 2023-09-10</p>
<p> These Terms and Conditions ("Terms") govern your use of the DOCTOME mobile application (the "App"). This Terms of Use Agreement ("Agreement") is a legally binding contract between you ("User" or "you") and DOCTOME, its affiliates, and subsidiaries ("DOCTOME," “DOCTOME”, “we," "us," or "our"). By using the DOCTOME mobile application ("App") and its services, you agree to be bound by the terms and conditions of this Agreement. If you do not agree with these terms, do not use the App or its services.</p><br/> 

<h1 class='font-extrabold'>1.Services Provided</h1>
<p>DOCTOME provides a platform that allows users to book various healthcare services, including doctor consultations, nurse visits, lab tests, and medicine delivery (collectively, the "Services"), through the App. The availability and scope of these Services may vary and are subject to change at our discretion.
</p><br/> 

<h1 class='font-extrabold'>2.Eligibility </h1>
<p> You must be at least Eighteen [18] years old to use the App. By using the App, you represent and warrant that you meet the age requirement and that you have the legal capacity to enter into these Terms.</p><br/> 



<h1 class='font-extrabold'>3.User Account </h1>
<p>We use the information we collect for the following purposes:
<ul>
<h3 class="font-normal">3.1 Registration:</h3>
<li>TSome features of the App may require you to create an account. </li>

<li>You agree to provide accurate and complete information when creating your account and to update this information to keep it current.</li>

<h3 class="font-normal">3.2 Security:</h3>

<li>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>

<h3 class="font-normal">3.3 Termination:</h3>
<li>We reserve the right to terminate or suspend your account at our discretion, without notice, for any violation of these Terms or for any other reason.</li>

</ul>
</p><br/> 

<h1 class='font-extrabold'> 4. Appointment Booking Guidelines</h1>
<p>We use the information we collect for the following purposes:
<ul>
<h3>4.1 Appointment Booking Process:</h3>
<li>(a) The User may book a medical consultation through the App by selecting the attending physician's specialization, providing information about the symptoms and ailment, choosing a domicile, selecting an appointment time slot, and providing patient particulars, if relevant. </li>

<li>(b) The User agrees to the terms and conditions of this Agreement by completing the appointment booking process and paying the fees through the PhonePe payment gateway. </li>
<li>(c) DOCTOME may delegate the appointment booking process to an algorithmic agent or manually undertake the same. DOCTOME has the sole discretion to designate a physician, taking into account factors such as proximity and remuneration. </li><br/> 

<h4>4.1.1 Health Assistant Allocation</h4>

<li>DOCTOME may assign a health assistant (a nurse) to provide medical care to the User. The health assistant may record vital statistics, such as blood pressure, weight, temperature, oxygen saturation, and height, before the attending physician arrives.</li><br/> 

<h4>4.1.2 Health Assistant Allocation</h4>

<li>Upon arrival at the User's domicile, the attending physician will conduct a thorough examination and record the patient's grievances and medical history. The physician will then diagnose the patient and issue prescriptions or recommend diagnostic tests if necessary.</li><br/> 

<h4>4.1.3 Medicines and Diagnostic Tests</h4>

<li>Acquisition of Prescribed Medications: In the event that prescribed medications are advised by our medical professionals, and such medications are readily available through the health assistant affiliated with DOCTOME, the User may, at their discretion, procure said medications instantaneously and it is incumbent upon the User to bear any and all associated costs.</li>

<li>Undertaking of Diagnostic Tests: If you choose to undergo diagnostic tests facilitated by DOCTOME during your consultation, our Health Assistant will be available to collect the necessary samples as required. The User acknowledges that diagnostic tests may involve additional charges.</li><br/> 


<h4>4.1.4 Home Medical Treatment</h4>

<ul>
<p>In certain cases, following a consultation, if the attending physician determines that the patient requires home medical treatment, such as intravenous (IV) fluids, and the patient consents to such treatment: <p><br/> 
<li>
i.The physician will initiate the necessary medical treatment at the patient's location. A health assistant (nurse) will be assigned by Doctome to monitor and oversee the IV fluid infusion. The doctor will leave the patient's home once the treatment has been initiated.
</li><br/> 
<li>
ii.Please note that separate charges will apply for home medical treatment, and these charges will be communicated to the patient as part of the treatment arrangement.
</li><br/> 
<li>
iii.This additional service is offered to ensure the well-being and proper care of our patients, particularly in cases where immediate medical attention is required. It is important to note that all aspects of this home medical treatment, including fees and the scope of the treatment, will be clearly communicated to the patient before the treatment begins.
</li>

</ul><br/> 

<h4>4.1.5 Medicine Ordering</h4>

<li>If the prescribed medications are not immediately available through the health assistant, the User may order them through the App. The medications will be delivered to the User's domicile.</li>
<br/> 
<h4>4.1.6 Diagnostic Test Reports</h4>

<li>The results of diagnostic tests will be sent to the User through the App as soon as they are available.</li>
<br/> 
<h3>4.2 Booking Diagnostic Tests through the App</h3>
<li>Users can conveniently schedule laboratory tests using the App by selecting a suitable time slot and specifying their location. Following this, a health assistant will be dispatched to the user's chosen location to collect the required specimens, which will then be transported to the central hub. <br/> The samples will be sent to the affiliated diagnostic centres for thorough analysis. Once the analysis is complete, the test reports will be generated by the affiliated diagnostic centers and promptly made available on the user's App interface for their review and access. <br/>This streamlined process ensures users can efficiently access and manage their laboratory test results with ease and convenience.</li>
<li>The App is only a facilitator for booking lab tests. The App is not responsible for the accuracy or completeness of the test results. The User is responsible for reviewing the test results and consulting with a healthcare professional as needed. </li>
<br/> 

<h3>4.3 Booking Medicines through the App</h3>
<li>The App allows you to purchase the Products (prescription medicine) offered for sale on the App against a valid medical prescription issued by a medical expert/ doctor. In order to purchase Prescription Drugs from the App, you are required to upload a scanned copy of the valid prescription on the App. The order would not be processed by the DOCTOME until it receives a copy of a valid prescription. The DOCTOME will verify the prescription forwarded by You and in case we observe any discrepancy in the prescription uploaded by You, we will cancel the order immediately.</li>
<br/> 
<h3>4.4 Booking Nurse Visit through the App</h3>
<li>Through the App's functionality, users have the ability to complete the booking process for nurse visits. During this process, users can specify their preferred package, time slot, location, patient details (if applicable), and provide a comprehensive list of the required tasks. The entire payment process will be handled seamlessly through the App's interface.</li>
<li>The designated nurse shall carry out the assigned duties with a high level of diligence and expertise.</li>

</ul>
</p>

<br/> 
<h1 class='font-extrabold'>5.Payment</h1>
<p>5.1 User is responsible for paying all charges associated with the Services provided through the App. You agree to pay all fees and charges incurred in connection with your use of the App promptly.</p>
<p>5.2 Payment shall be made by users through the third party payment gateway integrated in the App.</p>
<p>5.3 The App uses third party payment gateways (namely………..) to process the transactions made on the App. The DOCTOME is not liable for any failed transactions. In the event of a failed transaction, the amount (if debited from a User account) will be refunded to the User’s account as per the corresponding payment gateway’s refund policy.</p>
<br/> 
<h1 class='font-extrabold'>6. Roles and Responsibilities</h1>
<p>Doctors are responsible for visiting patients, explaining standard operating procedures, taking complaints, diagnosing, prescribing, suggesting diagnostics, and administering home treatment if needed. They are also responsible for maintaining the confidentiality of patient information.</p>
<p>DOCTOME is a healthcare platform that facilitates booking healthcare services through the App, provides a platform to manage past health records, and manages payments for services. DOCTOME does not provide medical advice or diagnosis. It is the responsibility of the doctor to provide these services.</p>
<br/> 
<h1 class='font-extrabold'>7.Disclaimers</h1>
<p>7.1 DOCTOME is a platform that facilitates the booking of healthcare services. It does not provide medical services directly. The quality and outcome of medical services are the responsibility of the healthcare professionals involved. </p> <br/>
<p>7.2 Under no circumstances DOCTOME will be liable for mis-diagnosis, treatment deficiencies, and any damages to patience due medical malpractices.</p><br/>
<p>7.3 DOCTOME is solely responsible for providing you with an e-commerce platform to purchase prescription medicines. It is hereby clarified that that the manufacturers themselves are responsible for all compliances relating to the manufacturing of the prescription medicines including any labelling, mandatory declaration requirements, etc. under the applicable law. <br/>
 The manufacturers are liable to be compliant under the relevant provisions of applicable laws, including but not limited to the Legal Metrology Act, Drugs and Cosmetics Act, Food Safety and Standards Act, Drugs and Magic Remedies Act etc. and the rules made thereunder.</p><br/>
 <p>7.4 The products and the services are provided to you on an “as is” basis. We do not make any representations or warranties on behalf of the products and the physician services.<br/>
  The DOCTOME does not covenant or provide any representations and warranties in respect of quality, suitability, accuracy, reliability, performance, safety, merchantability, fitness for a particular purpose/consumption or the content (including product or pricing information and/or specifications) on the App and that the services will be made available at all times.</p><br/>

<h1 class='font-extrabold'>8. Privacy</h1>
<p>8.1 DOCTOME will collect and use your personal information in accordance with our Privacy Policy. By using the App, you consent to the collection, use, and sharing of your information as described in the Privacy Policy.</p> <br/>
<p>8.2 Health Information: At DOCTOME, we recognize the utmost importance of safeguarding your health information. We are committed to providing you with the assurance that your sensitive medical data will be protected and kept confidential. Our adherence to all relevant medical privacy regulations is unwavering. Your trust and privacy are paramount to us.</p> <br/>

<h1 class='font-extrabold'>9. Limitation of Liability </h1>
<p>DOCTOME is not liable for any damages, direct or indirect, incidental or consequential, that you may suffer as a result of using the App or the Services provided through the App. This includes, but is not limited to, any loss of data, income, or profit, or any other damages arising from your use of the App. </p> <br/>

<h1 class='font-extrabold'> 10. Changes to Terms</h1>
<p>DOCTOME reserves the right to update or modify these terms and conditions at any time. Users will be notified of changes through the app. Continued use of the app constitutes acceptance of the revised terms.</p> <br/>

<h1 class='font-extrabold'> 11. Termination</h1>
<p>DOCTOME may terminate or suspend your access to the App without notice if you violate these Terms.</p> <br/>

<h1 class='font-extrabold'>12. Proprietary Right</h1>
<p>The DOCTOME has proprietary right in the App, and you shall not copy or reproduce the App or any of its components in any manner. The DOCTOME also has right to
all trademarks and trade and specific layout of every page of the website, including calls to
action, text placement, images and other information amounting to intellectual property.</p> <br/>

<h1 class='font-extrabold'>13. User Responsibilities</h1>
<p>Users must provide accurate and complete information when booking appointments, prescriptions, or any other services through the App. Any misrepresentation of information may result in the termination of services..</p> <br/>

<h1 class='font-extrabold'>14. Code of Conduct</h1>
<p>Users are expected to maintain a respectful and professional demeanour when interacting with healthcare professionals and staff provided through the App. Disruptive or disrespectful behaviour may lead to the termination of services.</p> <br/>

<h1 class='font-extrabold'>15. RESTRICTIONS ON USE</h1>
<p>You shall not host, display, upload, modify, publish, transmit, update, or share any information that:</p>
<ol>
<li>(a) belongs to another person and to which you do not have any proprietary right or authorization;</li>
<li>(b) is grossly harmful, harassing, blasphemous, defamatory, obscene, pornographic, paedophilic, libellous, invasive of another's privacy, hateful, or racially, ethnically objectionable, disparaging, relating to or encouraging money laundering or gambling, or otherwise unlawful in any manner whatever;</li>
<li>(c) harms minors in any way;</li>
<li>(d) infringes any patent, trademark, copyright, or other proprietary rights;</li>
<li>(e) violates any law for the time being in force;</li>
<li>(f) deceives or misleads the addressee about the origin of such messages or communicates any information which is grossly offensive or menacing in nature;</li>
<li>(g) impersonates another person;</li>
<li>(h) contains software viruses or any other computer code, files, or programs designed to interrupt, destroy, or limit the functionality of any computer resource; or</li>
<li>(I) threatens the unity, integrity, defense, security, or sovereignty of India or any territory, friendly relations with foreign states, or public order, or causes incitement to the commission of any cognizable offense or prevents the investigation of any offense or is insulting to any other nation.</li>




</ol>
 <br/>

<h1 class='font-extrabold'>16. Emergency Situations</h1>
<p>In the case of a medical emergency, users are advised to call emergency services immediately. The App is not intended to handle critical or life-threatening situations.</p> <br/>

<h1 class='font-extrabold'>17. Health Records</h1>
<p>While the App provides the functionality to manage past health records, users are responsible for maintaining their own health records, and DOCTOME assumes no liability for the accuracy or completeness of user-provided health records.</p><br/>

<h1 class='font-extrabold'>18. Availability of Services</h1>
<p>Availability of services, doctors, nurses, and delivery of medicines may vary based on location and demand. DOCTOME does not guarantee the availability of services at all times.</p>

<br/>

<h1 class='font-extrabold'>19. Indemnification</h1>

<p>19.1 You shall indemnify, defend and hold harmless DOCTOME as well as each of its representatives, employees, contractors, agents, officers, directors, shareholders, affiliates and assigns from all liabilities, claims, damages, costs and expenses claims, damages, costs and expenses, including reasonable attorney fees and expenses in relation to all claims arising out of (a) a breach of the obligations undertaken by you under the terms of this Agreement; (b) use or misuse by you of the App and/ or its content; (c) breach of any intellectual property or other proprietary rights of any person or entity; or (d) the inaccuracy or incompleteness of any information or data you supplied on the App. </p><br/>

<p>19.2 If and when required, the DOCTOME may request written assurances from you regarding your commitment to indemnify the DOCTOME, and your failure to provide such assurances would constitute a material breach of this Agreement. The DOCTOME may also engage in any legal proceedings where you are defending against a third-party claim related to your use of the App. You must inform the DOCTOME of any third-party legal proceeding initiated in connection with the App or the Services in which you are involved as a party.</p><br/>

<h1 class='font-extrabold'>20. Waiver</h1>
<p>No waiver by the DOCTOME of any breach of this Agreement shall be a waiver of any preceding or succeeding breach. No waiver by the DOCTOME of any right under this Agreement shall be construed as a waiver of any other right.</p><br/>

  <h1 class='font-extrabold'>21. Governing Law, Dispute Resolution and Consent to Jurisdiction:</h1>
<p>21.1 This Agreement shall be governed by and construed in accordance with the laws of India, without regard to its conflicts of law principles. The competent Courts in Hyderabad alone shall have jurisdiction to try and decide any claim, dispute or difference arising out of or in relation to this agreement.</p><br/>
<p>21.2 In the event that any dispute, difference, claim or controversies (hereinafter jointly referred to as “Dispute”) arises between the Parties in connection with this Agreement, the construction of any provision of this Agreement and/or the rights, duties or liabilities of the Parties hereto under this Agreement, the Parties shall conduct mediation to solve such Dispute.  </p><br/>

<p>21.3 If mutual resolution cannot be reached within thirty (30) days after the commencement of such mediation then both parties agree to refer such Dispute to arbitration under the Indian Arbitration and Conciliation Act, 1996, as amended from time to time. The proceeding shall be conducted by a sole arbitrator who shall be appointed by mutual consensus of both parties.</p><br/>

<p>21.4 The venue of arbitration shall be Hyderabad, India. The arbitration proceedings shall be conducted in English. Any award made in such arbitration will be final and binding on the Parties.</p>


<h1 class='font-extrabold'>22. Severability</h1>
<p>If any provision of this Agreement is held to be invalid or unenforceable, such provision will be struck from this Agreement, and the remaining provisions will remain in full force and effect. .</p> <br/>

<h1 class='font-extrabold'>23. Contact</h1>
<p>For any questions or concerns regarding these Terms or the App, please contact us at <a href="mailto:support@doctome.in" class="text-blue-600"
> support@doctome.in</a>.</p> <br/> 

<p class="font-medium">By using the DOCTOME App, you acknowledge that you have read, understood, and agree to abide by these Terms and Conditions. By using the App, you acknowledge that you have read, understood, and agree to be bound by this Agreement. If you do not agree with any part of this Agreement, please do not use the App. This Agreement constitutes the entire agreement between you and DOCTOME concerning the subject matter herein and supersedes all prior or contemporaneous agreements, representations, warranties, and understandings. </p>




</ul>`

export default function Terms() {
  return (
    <>
        <Header/>

      <Head>
        <title>Doctome - Terms of Service</title>
      </Head>
      <div className="md:mx-8 mx-4 my-12 flex flex-col">
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </div>
  <Footer/>

    </>
  )
}
