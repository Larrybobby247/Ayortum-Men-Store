// Central HomeVista configuration.
// Everything that is a "fact" about the product (contact details, store links,
// effective dates) lives here so it can be verified and updated in one place.

export const HV = {
  name: 'HomeVista',
  operator: 'Accurratte Hommes International',
  operatorShort: 'Accurratte Hommes',
  tagline: 'Real-estate discovery and transactions in one platform.',

  // Verified contact details, taken from the existing Accurratte Hommes website
  // (Footer / Contact page). Replace supportEmail if HomeVista gets its own
  // dedicated support mailbox.
  supportEmail: 'accurratteh@gmail.com',
  phones: ['+234 708 140 2661', '+234 706 605 2919'],
  address:
    'PA Adebesin Plaza, Opp. Quarry Imperial Hotel, Quarry Road, Abeokuta, Ogun State, Nigeria',

  // App store listings. Leave EMPTY until the real listings exist: the UI
  // shows a disabled "Coming soon" state instead of a fake link.
  // e.g. 'https://play.google.com/store/apps/details?id=...'
  playStoreUrl: '',
  appStoreUrl: '',

  // Where "Explore Properties" goes: the existing property listings page.
  explorePath: '/properties',

  // Backend endpoint for deletion requests (see /api/homevista/delete-request.js).
  deletionEndpoint:
    import.meta.env.VITE_HOMEVISTA_DELETION_ENDPOINT || '/api/homevista/delete-request',

  siteUrl: import.meta.env.VITE_SITE_URL || '',

  privacyEffectiveDate: '10 November 2026',
  termsEffectiveDate: '10 November 2026',
}

export const downloadUrl = HV.playStoreUrl || HV.appStoreUrl || ''

export const routes = {
  home: '/homevista',
  privacy: '/homevista/privacy-policy',
  terms: '/homevista/terms-and-conditions',
  deleteAccount: '/homevista/delete-account',
}
