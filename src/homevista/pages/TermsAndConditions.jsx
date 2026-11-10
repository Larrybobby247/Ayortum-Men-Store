import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import LegalLayout from '../components/LegalLayout'
import { HV, routes } from '../config'

const sections = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    body: (
      <>
        <p>
          These Terms and Conditions ("Terms") govern your access to and use of HomeVista, including
          its mobile application, website and related services. By creating an account or using
          HomeVista, you confirm that you have read, understood and agreed to these Terms and our{' '}
          <Link to={routes.privacy}>Privacy Policy</Link>.
        </p>
        <p>If you do not agree, please do not use HomeVista.</p>
      </>
    ),
  },
  {
    id: 'about',
    title: 'About HomeVista',
    body: (
      <>
        <p>
          HomeVista is a real-estate discovery and transaction platform developed and operated by{' '}
          {HV.operator} ("we", "us", "our"). It provides a platform for property discovery and for
          connections between interested parties, including buyers, sellers, property owners and
          agents.
        </p>
        <p>
          HomeVista does not automatically guarantee property ownership, the accuracy of listings,
          property condition or availability.
        </p>
      </>
    ),
  },
  {
    id: 'eligibility',
    title: 'Eligibility Requirements',
    body: (
      <>
        <p>To use HomeVista you must:</p>
        <ul>
          <li>Be at least 18 years old and have the legal capacity to enter into binding contracts.</li>
          <li>Provide accurate and complete registration information.</li>
          <li>Not have been previously suspended or removed from HomeVista for breaching these Terms.</li>
          <li>Use HomeVista in compliance with all applicable laws.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'account-security',
    title: 'Account Registration and Security',
    body: (
      <>
        <p>
          You must register an account to access certain features and choose an account type (such
          as buyer, seller or agent). You are responsible for keeping your login credentials
          confidential and for all activity under your account.
        </p>
        <p>
          Notify us immediately if you suspect unauthorised access. We are not responsible for loss
          arising from your failure to keep your credentials secure.
        </p>
      </>
    ),
  },
  {
    id: 'user-responsibilities',
    title: 'User Responsibilities',
    body: (
      <>
        <p>You are responsible for the information and content you submit to HomeVista. You agree to:</p>
        <ul>
          <li>Keep your account information accurate and up to date.</li>
          <li>Only submit content you have the right to share.</li>
          <li>Communicate honestly and respectfully with other users.</li>
          <li>Comply with these Terms and all applicable laws and regulations.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'listings',
    title: 'Property Listings and Information Accuracy',
    body: (
      <>
        <p>
          Listings on HomeVista are created by users. We do not independently verify every listing
          and do not guarantee that listing information, including descriptions, images, prices,
          ownership details, condition or availability, is accurate, complete or current.
        </p>
        <p>
          Users must independently verify ownership documents, property information and legal status
          before entering into a transaction. HomeVista is not a substitute for professional legal,
          financial or property valuation advice, and you should consult qualified professionals
          before making any property decision.
        </p>
      </>
    ),
  },
  {
    id: 'roles',
    title: 'Buyer, Seller and Agent Responsibilities',
    body: (
      <>
        <h3>Sellers and property owners</h3>
        <ul>
          <li>Must be the owner of, or be duly authorised to list, any property they post.</li>
          <li>Must provide truthful, accurate and non-misleading listing information.</li>
          <li>Must update or remove listings that are no longer available.</li>
        </ul>
        <h3>Agents</h3>
        <ul>
          <li>Must hold any licences or authority required to act in the capacity represented.</li>
          <li>Must disclose accurately whom they represent and act in good faith.</li>
        </ul>
        <h3>Buyers</h3>
        <ul>
          <li>Must carry out their own due diligence on properties and counterparties.</li>
          <li>Must not rely solely on information shown on HomeVista when deciding to transact.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'enquiries',
    title: 'Property Enquiries and Communication',
    body: (
      <>
        <p>
          HomeVista lets users send enquiries and exchange messages about properties. Communications
          are between the users concerned. We are not a party to any agreement, negotiation or
          arrangement between users, and we are not responsible for what users say or promise to
          each other.
        </p>
        <p>
          Take care when sharing personal or financial information, and never share your password.
          Please report suspicious messages or listings to us.
        </p>
      </>
    ),
  },
  {
    id: 'payments',
    title: 'Payments and Financial Transactions',
    body: (
      <>
        <p>
          HomeVista offers supported payment transactions through integrated third-party payment
          services, including Paystack. Supported payment transactions may involve third-party
          processing charges, which will be shown or made available before you confirm a payment
          where applicable.
        </p>
        <p>
          Payments are subject to the terms of the relevant payment provider and to verification
          and security checks. Payment through HomeVista does not by itself guarantee the
          completion, legality or outcome of any underlying property transaction.
        </p>
      </>
    ),
  },
  {
    id: 'wallet',
    title: 'Wallet Services and Withdrawals',
    body: (
      <>
        <p>
          Where available, HomeVista provides a digital wallet showing applicable balances,
          transaction records and payout information. Wallet balances and payout services are
          subject to applicable verification, transaction and regulatory requirements.
        </p>
        <p>
          Withdrawals and payouts may require identity and bank-account verification, may be delayed
          or withheld while we investigate suspected fraud or a dispute, and are processed to
          verified accounts in your name. You are responsible for providing correct payout details.
        </p>
      </>
    ),
  },
  {
    id: 'fees',
    title: 'Applicable Transaction Fees',
    body: (
      <>
        <p>
          Certain transactions may attract fees, including HomeVista service fees and third-party
          processing charges. Applicable fees will be displayed in the app or otherwise made
          available to you before you confirm the relevant transaction.
        </p>
        <p>
          Fees may change from time to time; changes apply to transactions made after they take
          effect.
        </p>
      </>
    ),
  },
  {
    id: 'verification-fraud',
    title: 'Verification and Fraud Prevention',
    body: (
      <>
        <p>
          To protect users and comply with the law, we may ask for identity, bank-account or other
          verification information (including BVN where applicable), monitor activity for fraud and
          abuse, and decline, delay or reverse transactions we reasonably suspect to be fraudulent
          or unlawful.
        </p>
        <p>
          We may share relevant information with payment providers, verification providers and
          authorities where legally required. HomeVista may restrict accounts involved in fraudulent
          or prohibited activities.
        </p>
      </>
    ),
  },
  {
    id: 'prohibited',
    title: 'Prohibited Activities',
    body: (
      <>
        <p>You must not:</p>
        <ul>
          <li>Post fraudulent listings or misleading property information.</li>
          <li>Impersonate any person, agent or organisation, or misrepresent your authority.</li>
          <li>List property you do not own or are not authorised to list.</li>
          <li>Use HomeVista for money laundering, scams or any unlawful purpose.</li>
          <li>Harass, threaten or abuse other users.</li>
          <li>Attempt to gain unauthorised access to accounts, systems or data.</li>
          <li>Interfere with or disrupt the platform, or scrape or copy it without permission.</li>
          <li>Upload malicious code or content that infringes others' rights.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'third-party',
    title: 'Third-Party Services',
    body: (
      <p>
        HomeVista relies on third-party services such as payment processing (Paystack), email
        delivery (Resend) and hosting and infrastructure providers. Your use of those services may
        be subject to their own terms and privacy policies. We are not responsible for the acts,
        omissions or availability of third-party services, though we take reasonable care in
        choosing them.
      </p>
    ),
  },
  {
    id: 'ip',
    title: 'Intellectual Property Rights',
    body: (
      <>
        <p>
          HomeVista, its name, logo, design, software and content (other than user content) belong
          to {HV.operator} or its licensors and are protected by intellectual property laws. You
          receive a limited, non-exclusive, non-transferable, revocable licence to use HomeVista for
          its intended purpose.
        </p>
        <p>
          You keep ownership of content you submit, but you grant us a non-exclusive, worldwide,
          royalty-free licence to host, display and use it as needed to operate and promote the
          platform and its services. You confirm you have the rights to grant that licence.
        </p>
      </>
    ),
  },
  {
    id: 'suspension',
    title: 'Account Suspension and Termination',
    body: (
      <>
        <p>
          We may suspend, restrict or terminate your account, remove content or withhold payouts
          where we reasonably believe you have breached these Terms, engaged in fraudulent or
          prohibited activity, or where required by law.
        </p>
        <p>
          You may stop using HomeVista and request deletion of your account at any time through the{' '}
          <Link to={routes.deleteAccount}>Account and Data Deletion</Link> page. Provisions that by
          their nature should survive termination will continue to apply.
        </p>
      </>
    ),
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    body: (
      <>
        <p>
          HomeVista is provided on an "as is" and "as available" basis. To the fullest extent
          permitted by law, we are not liable for indirect, incidental, special or consequential
          losses, or for loss arising from inaccurate listings, disputes between users, the conduct
          of other users or third parties, or interruptions to the service.
        </p>
        <p>
          Nothing in these Terms excludes or limits any liability that cannot legally be excluded or
          limited, including liability for fraud or fraudulent misrepresentation, or for death or
          personal injury caused by negligence, to the extent applicable law does not permit
          exclusion.
        </p>
      </>
    ),
  },
  {
    id: 'indemnification',
    title: 'Indemnification',
    body: (
      <p>
        To the extent permitted by law, you agree to indemnify and hold harmless {HV.operator}, its
        officers, employees and partners from claims, losses and expenses (including reasonable legal
        fees) arising from your breach of these Terms, the content you submit, or your violation of
        any law or third-party right.
      </p>
    ),
  },
  {
    id: 'privacy',
    title: 'Privacy and Personal Data',
    body: (
      <p>
        We process personal data in accordance with our{' '}
        <Link to={routes.privacy}>Privacy Policy</Link> and the Nigeria Data Protection Act 2023.
        By using HomeVista you acknowledge that policy. You can request deletion of your account and
        data at any time on the <Link to={routes.deleteAccount}>deletion request page</Link>.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to These Terms',
    body: (
      <p>
        We may update these Terms from time to time. Updated Terms will be posted on this page with
        a revised effective date. If you continue to use HomeVista after changes take effect, you
        accept the updated Terms.
      </p>
    ),
  },
  {
    id: 'governing-law',
    title: 'Governing Law and Dispute Resolution',
    body: (
      <>
        <p>These Terms are governed by the laws of the Federal Republic of Nigeria.</p>
        <p>
          If a dispute arises, please contact us first so we can try to resolve it informally. If it
          cannot be resolved within a reasonable time, it may be referred to the courts of competent
          jurisdiction in Nigeria, unless the parties agree in writing to another method of
          resolution. This does not limit any statutory rights you have as a consumer.
        </p>
      </>
    ),
  },
  {
    id: 'contact',
    title: 'Contact Information',
    body: (
      <div className="rounded-2xl bg-[#faf7f2] p-6">
        <p className="!mb-2 font-semibold text-[#1f3a17]">{HV.operator} (operator of HomeVista)</p>
        <ul>
          <li>
            Email: <a href={`mailto:${HV.supportEmail}`}>{HV.supportEmail}</a>
          </li>
          {HV.phones.map((p) => (
            <li key={p}>
              Phone: <a href={`tel:${p.replace(/\s/g, '')}`}>{p}</a>
            </li>
          ))}
          <li>Address: {HV.address}</li>
        </ul>
      </div>
    ),
  },
]

export default function TermsAndConditions() {
  return (
    <>
      <Seo
        title="Terms and Conditions | HomeVista by Accurratte Hommes"
        description="The terms that apply when you use HomeVista, the real-estate discovery and transaction platform operated by Accurratte Hommes International."
        path={routes.terms}
      />
      <LegalLayout
        eyebrow="Legal"
        title="HomeVista Terms and Conditions"
        intro="Please read these terms carefully before using HomeVista."
        effectiveDate={HV.termsEffectiveDate}
        sections={sections}
        numbered
      />
    </>
  )
}
