import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import LegalLayout from '../components/LegalLayout'
import { HV, routes } from '../config'

const ContactBlock = () => (
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
)

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    body: (
      <>
        <p>
          HomeVista is a real-estate platform developed and operated under {HV.operator}. We value
          your privacy and are committed to protecting your personal information.
        </p>
        <p>
          This policy explains the information we collect, how we use it, how it may be shared and
          the rights available to users.
        </p>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    body: (
      <>
        <p>Depending on how you use HomeVista, we may collect the following categories of information.</p>
        <h3>Personal Information</h3>
        <ul>
          <li>First name and last name.</li>
          <li>Email address.</li>
          <li>Phone number.</li>
          <li>Residential address.</li>
          <li>City, state and country.</li>
        </ul>
        <h3>Account Information</h3>
        <ul>
          <li>Login credentials.</li>
          <li>Account type and profile details.</li>
          <li>Account preferences.</li>
        </ul>
        <h3>Property Information</h3>
        <ul>
          <li>Property titles and descriptions.</li>
          <li>Property images.</li>
          <li>Property prices.</li>
          <li>Listing and ownership-related information submitted by users.</li>
        </ul>
        <h3>Communication Information</h3>
        <ul>
          <li>Property enquiries.</li>
          <li>Messages exchanged between buyers, sellers and agents.</li>
        </ul>
        <h3>Financial Information</h3>
        <ul>
          <li>Payment records.</li>
          <li>Wallet transaction information.</li>
          <li>Payout requests.</li>
          <li>Bank account details.</li>
          <li>BVN and other verification information where applicable.</li>
        </ul>
        <h3>Technical Information</h3>
        <ul>
          <li>Device and application information.</li>
          <li>Usage and diagnostic information where collected.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'how-we-use-your-information',
    title: 'How We Use Your Information',
    body: (
      <>
        <p>We use your information to:</p>
        <ul>
          <li>Create and maintain accounts.</li>
          <li>Provide property discovery services.</li>
          <li>Facilitate communication between users.</li>
          <li>Process supported payments.</li>
          <li>Manage wallet and payout services.</li>
          <li>Verify users and prevent fraud.</li>
          <li>Provide customer support.</li>
          <li>Improve platform performance.</li>
          <li>Send necessary service notifications.</li>
        </ul>
        <p>
          We process personal data only where we have a lawful basis to do so under the Nigeria Data
          Protection Act 2023 (NDPA), such as your consent, performance of a contract with you,
          compliance with a legal obligation, or our legitimate interests (for example, fraud
          prevention and platform security) where these are not overridden by your rights.
        </p>
      </>
    ),
  },
  {
    id: 'payment-processing',
    title: 'Payment Processing',
    body: (
      <>
        <p>HomeVista uses Paystack for supported financial transactions.</p>
        <p>
          Payment processing may involve third-party service providers, such as payment processors,
          banks and card networks. Financial processing is subject to the applicable terms and
          privacy policies of those providers, which we encourage you to read.
        </p>
        <p>
          Payment details you enter to complete a card payment are handled by the payment provider.
          HomeVista does not state or promise that it stores complete card information.
        </p>
      </>
    ),
  },
  {
    id: 'information-sharing',
    title: 'Information Sharing',
    body: (
      <>
        <p>We do not sell your personal information. We may share information with:</p>
        <ul>
          <li>Property owners and agents, when necessary to facilitate your enquiries.</li>
          <li>Payment processors, including Paystack.</li>
          <li>Email delivery providers, including Resend.</li>
          <li>Hosting and infrastructure providers.</li>
          <li>Security and verification providers.</li>
          <li>Government and regulatory authorities where legally required.</li>
        </ul>
        <p>
          Some of these providers may process data outside Nigeria. Where that happens, we take
          steps to ensure your information remains protected in line with applicable data
          protection law.
        </p>
      </>
    ),
  },
  {
    id: 'data-security',
    title: 'Data Security',
    body: (
      <>
        <p>
          We implement reasonable technical and organisational measures designed to protect personal
          information against unauthorised access, loss, misuse or alteration. These include
          encrypted connections (HTTPS) for data in transit, restricting access to personal data to
          people who need it to perform their duties, and relying on reputable infrastructure and
          payment providers.
        </p>
        <p>
          No method of transmission or storage is completely secure, so we cannot guarantee absolute
          security. Please keep your login credentials confidential and tell us promptly if you
          suspect unauthorised use of your account.
        </p>
      </>
    ),
  },
  {
    id: 'data-retention',
    title: 'Data Retention',
    body: (
      <p>
        We retain information only for as long as necessary for the purposes for which it was
        collected, subject to applicable legal, financial, regulatory and security obligations.
        When information is no longer required, we delete or anonymise it. Certain transaction and
        compliance records may be retained after account deletion, as explained on the{' '}
        <Link to={routes.deleteAccount}>Account and Data Deletion</Link> page.
      </p>
    ),
  },
  {
    id: 'your-privacy-rights',
    title: 'User Privacy Rights',
    body: (
      <>
        <p>
          Under the Nigeria Data Protection Act 2023 and other applicable data protection laws, you
          have the right to:
        </p>
        <ul>
          <li>Access your personal information.</li>
          <li>Request corrections to inaccurate or incomplete information.</li>
          <li>Request deletion of your personal information.</li>
          <li>Withdraw consent where processing is based on consent.</li>
          <li>Object to certain processing activities.</li>
          <li>Request information about how your personal data is processed.</li>
        </ul>
        <p>
          To exercise these rights, contact us using the details below. We may need to verify your
          identity first, and some rights are subject to legal exceptions (for example, records we
          must keep by law). If you are unhappy with how we handle your data, you may also complain
          to the Nigeria Data Protection Commission.
        </p>
      </>
    ),
  },
  {
    id: 'account-deletion',
    title: 'Account Deletion',
    body: (
      <>
        <p>
          You can ask us to permanently delete your HomeVista account and associated eligible
          personal information at any time, without logging in:
        </p>
        <p>
          <Link
            to={routes.deleteAccount}
            className="inline-flex items-center gap-2 rounded-full bg-[#f58f20] px-6 py-3 !text-white !no-underline transition-colors hover:bg-[#d97a0e]"
          >
            Request account and data deletion
            <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
          </Link>
        </p>
        <p>
          Page address: <Link to={routes.deleteAccount}>{routes.deleteAccount}</Link>
        </p>
      </>
    ),
  },
  {
    id: 'childrens-privacy',
    title: "Children's Privacy",
    body: (
      <>
        <p>
          HomeVista is not intended for children under 18, and we do not knowingly collect personal
          information from them. People under 18 must not create an account or use the platform.
        </p>
        <p>
          If we discover that we have collected information relating to a child under 18, we will
          delete it promptly, unless we are legally required to keep it, and close any associated
          account. If you believe a child has provided us with information, please contact us.
        </p>
      </>
    ),
  },
  {
    id: 'policy-updates',
    title: 'Policy Updates',
    body: (
      <p>
        We may update this policy from time to time. Updates will be published on this page with a
        revised effective date. Where changes are significant, we will take reasonable steps to
        notify users. Continued use of HomeVista after an update means you accept the revised
        policy.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact Information',
    body: (
      <>
        <p>For privacy questions or to exercise your rights, contact us:</p>
        <ContactBlock />
      </>
    ),
  },
]

export default function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy | HomeVista by Accurratte Hommes"
        description="How HomeVista, operated by Accurratte Hommes International, collects, uses, shares and protects personal information, and the rights available to users under the Nigeria Data Protection Act 2023."
        path={routes.privacy}
      />
      <LegalLayout
        eyebrow="Legal"
        title="HomeVista Privacy Policy"
        intro="What we collect, how we use it, who we share it with, and the choices you have."
        effectiveDate={HV.privacyEffectiveDate}
        sections={sections}
      />
    </>
  )
}
