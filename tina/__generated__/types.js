export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const HeroPartsFragmentDoc = gql`
    fragment HeroParts on Hero {
  __typename
  title
  subtitle
  bannerImage
  bannerAlt
  donationUrl
  donationSwitchLabel
  donationButtonLabel
}
    `;
export const StorySnapshotPartsFragmentDoc = gql`
    fragment StorySnapshotParts on StorySnapshot {
  __typename
  badgeText
  title
  paragraphs
  buttonText
  image
  imageAlt
}
    `;
export const CasePagePartsFragmentDoc = gql`
    fragment CasePageParts on CasePage {
  __typename
  heroTitle
  heroSubtitle
  overviewBadge
  overviewTitle
  overviewDescription
  overviewLinkText
  overviewButtonText
  timeline {
    __typename
    date
    title
    description
  }
  contractTitle
  contractParagraphs {
    __typename
    text
  }
  whyTitle
  whyText
  caseSummaryLinkText
  evidenceBadge
  evidenceTitle
  evidenceDescription
  evidenceNote
  evidenceCards {
    __typename
    route
    image
    imageAlt
    navigationLabel
    title
    description
  }
}
    `;
export const CaseDetailsPartsFragmentDoc = gql`
    fragment CaseDetailsParts on CaseDetails {
  __typename
  badgeText
  title
  description
  timeline {
    __typename
    date
    title
    description
  }
  campaignTitle
  campaignParagraphs {
    __typename
    text
  }
  quote
  quoteNote
}
    `;
export const EvidenceGalleryPartsFragmentDoc = gql`
    fragment EvidenceGalleryParts on EvidenceGallery {
  __typename
  badgeText
  title
  description
  cards {
    __typename
    type
    route
    image
    imageAlt
    navigationLabel
    title
    description
  }
}
    `;
export const PressPartsFragmentDoc = gql`
    fragment PressParts on Press {
  __typename
  pageTitle
  pageDescription
  heroSection {
    __typename
    section
    title
    subtitle
  }
  introduction {
    __typename
    badge
    title
    paragraphs {
      __typename
      text
    }
  }
  caseReference {
    __typename
    badge
    title
    description
    fields {
      __typename
      key
      label
      value
    }
  }
  resources {
    __typename
    badge
    title
    description
    cards {
      __typename
      key
      title
      description
      linkText
      route
    }
  }
  editorialNote {
    __typename
    badge
    title
    paragraphs {
      __typename
      text
    }
  }
}
    `;
export const VideosPartsFragmentDoc = gql`
    fragment VideosParts on Videos {
  __typename
  pageTitle
  pageDescription
  intro {
    __typename
    description
    caseLinkText
    documentsLinkText
    photosLinkText
  }
  videos {
    __typename
    title
    videoSrc
    poster
    videoAlt
    description
    duration
  }
  relatedResources {
    __typename
    label
    title
    description
    buttonText
    route
  }
  futureVideos {
    __typename
    title
    cardTitle
    description
  }
}
    `;
export const VideosPreviewPartsFragmentDoc = gql`
    fragment VideosPreviewParts on VideosPreview {
  __typename
  badgeText
  title
  description
  buttonText
  buttonRoute
  image
  imageAlt
}
    `;
export const PhotosPreviewPartsFragmentDoc = gql`
    fragment PhotosPreviewParts on PhotosPreview {
  __typename
  badgeText
  title
  description
  buttonText
  buttonRoute
  image
  imageAlt
}
    `;
export const DocumentsPreviewPartsFragmentDoc = gql`
    fragment DocumentsPreviewParts on DocumentsPreview {
  __typename
  badgeText
  title
  description
  buttonText
  buttonRoute
  cardTitle
  cardSubtitle
  cardButtonText
  cardLink
}
    `;
export const DownloadsPreviewPartsFragmentDoc = gql`
    fragment DownloadsPreviewParts on DownloadsPreview {
  __typename
  badgeText
  title
  description
  buttonText
  buttonRoute
  cardTitle
  cardSubtitle
  cardButtonText
  cardLink
}
    `;
export const ImpactProgressPartsFragmentDoc = gql`
    fragment ImpactProgressParts on ImpactProgress {
  __typename
  badgeText
  title
  description
  raisedAmount
  goalAmount
  totalGoalLabel
  amountRaisedLabel
  expenses {
    __typename
    title
    amount
    description
  }
}
    `;
export const UpdatesPreviewPartsFragmentDoc = gql`
    fragment UpdatesPreviewParts on UpdatesPreview {
  __typename
  badgeText
  title
  cards {
    __typename
    category
    date
    title
    excerpt
    image
    imageAlt
    link
  }
  buttonText
  buttonRoute
}
    `;
export const SupportersPreviewPartsFragmentDoc = gql`
    fragment SupportersPreviewParts on SupportersPreview {
  __typename
  badgeText
  title
  testimonials {
    __typename
    quote
    name
    role
  }
}
    `;
export const ContactSectionPartsFragmentDoc = gql`
    fragment ContactSectionParts on ContactSection {
  __typename
  badgeText
  title
  description
  preferEmailText
  reachUsText
  email
  image
  imageAlt
  donationButtonText
  donationUrl
}
    `;
export const FinalCtaPartsFragmentDoc = gql`
    fragment FinalCTAParts on FinalCTA {
  __typename
  title
  description
  donationButtonText
  shareButtonText
  supportText
  shareTitle
  donationUrl
}
    `;
export const OurStoryPartsFragmentDoc = gql`
    fragment OurStoryParts on OurStory {
  __typename
  heroTitle
  heroSubtitle
  title
  subtitle
  description
  exploreCaseText
  propertyPhotosText
  documentsText
  videosText
  chapters {
    __typename
    heading
    paragraphs {
      __typename
      text
    }
    image
    imageAlt
  }
  closingStatement
  closingSupportingText
  closingExploreCaseText
  closingDocumentsText
  closingPhotosText
}
    `;
export const CaseDocumentsPartsFragmentDoc = gql`
    fragment CaseDocumentsParts on CaseDocuments {
  __typename
  slug
  title
  description
  category
  date
  file
}
    `;
export const DocumentsPartsFragmentDoc = gql`
    fragment DocumentsParts on Documents {
  __typename
  pageTitle
  pageDescription
  caseDocumentsTitle
  emptyStateText
  futureDocumentsTitle
  futureDocumentsCardTitle
  futureDocumentsDescription
  documents {
    __typename
    slug
    title
    description
    category
    date
    file
  }
}
    `;
export const DownloadsPartsFragmentDoc = gql`
    fragment DownloadsParts on Downloads {
  __typename
  heroTitle
  heroSubtitle
  contextLabel
  contextTitle
  contextDescription
  documentsLinkText
  caseLinkText
  featuredLabel
  featuredTitle
  featuredDescription
  featuredFormatLabel
  featuredStatusLabel
  featuredButtonText
  featuredDocument {
    ... on CaseDocuments {
      __typename
      slug
      title
      description
      category
      date
      file
    }
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
  }
  sections {
    __typename
    key
    title
    description
    documents {
      __typename
      key
      title
      description
      buttonText
      documentReference {
        ... on CaseDocuments {
          __typename
          slug
          title
          description
          category
          date
          file
        }
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
      }
    }
  }
  relatedLabel
  relatedTitle
  relatedDescription
  relatedCards {
    __typename
    key
    label
    title
    description
    buttonText
  }
}
    `;
export const PhotosPartsFragmentDoc = gql`
    fragment PhotosParts on Photos {
  __typename
  heroTitle
  heroSubtitle
  contextLabel
  contextTitle
  contextDescription
  contextLinks {
    __typename
    story
    case
    videos
  }
  highlights {
    __typename
    title
    description
  }
  before {
    __typename
    title
    description
  }
  after {
    __typename
    title
    description
  }
  food {
    __typename
    title
    subtitle
    description
  }
  beforePhotos {
    __typename
    id
    image
    thumbnail
    alt
    caption
    width
    height
  }
  afterPhotos {
    __typename
    id
    image
    thumbnail
    alt
    caption
    width
    height
  }
  foodPhotos {
    __typename
    id
    image
    thumbnail
    alt
    caption
    width
    height
  }
  resources {
    __typename
    label
    title
    description
    cards {
      __typename
      label
      title
      description
      buttonText
      route
    }
  }
}
    `;
export const PrivacyPartsFragmentDoc = gql`
    fragment PrivacyParts on Privacy {
  __typename
  pageTitle
  pageDescription
  heroSubtitle
  lastUpdated
  sections {
    __typename
    id
    title
    content {
      __typename
      text
    }
  }
}
    `;
export const TermsPartsFragmentDoc = gql`
    fragment TermsParts on Terms {
  __typename
  pageTitle
  pageDescription
  heroSubtitle
  lastUpdated
  sections {
    __typename
    id
    title
    content {
      __typename
      text
    }
  }
}
    `;
export const DisclaimerPartsFragmentDoc = gql`
    fragment DisclaimerParts on Disclaimer {
  __typename
  pageTitle
  pageDescription
  heroSubtitle
  lastUpdated
  sections {
    __typename
    id
    title
    content {
      __typename
      text
    }
  }
}
    `;
export const ContactPartsFragmentDoc = gql`
    fragment ContactParts on Contact {
  __typename
  pageTitle
  pageDescription
  heroTitle
  heroSubtitle
  contactContentTitle
  contactContentDescription
  form {
    __typename
    title
    description
    fullNameLabel
    fullNamePlaceholder
    emailLabel
    emailPlaceholder
    phoneLabel
    phonePlaceholder
    inquiryTypeLabel
    inquiryPlaceholder
    inquiryOptions {
      __typename
      key
      label
    }
    subjectLabel
    subjectPlaceholder
    messageLabel
    messagePlaceholder
    submitButtonText
    privacyNotice
    successTitle
    successMessage
  }
  contactInformation {
    __typename
    title
    emailLabel
    email
    phoneLabel
    phone
    campaignLabel
    campaignName
    campaignSubtitle
  }
  support {
    __typename
    title
    description
    emphasis
    gofundmeText
    caseDocumentsButtonText
    caseDocumentsRoute
  }
  share {
    __typename
    title
    description
    emphasis
    platforms {
      __typename
      key
      label
    }
    copySuccessText
    instructionText
  }
  resources {
    __typename
    eyebrow
    title
    description
    cards {
      __typename
      key
      eyebrow
      title
      description
      buttonText
      route
    }
  }
}
    `;
export const CaseProgressPartsFragmentDoc = gql`
    fragment CaseProgressParts on CaseProgress {
  __typename
  badgeText
  title
  description
  timeline {
    __typename
    number
    title
  }
  statistics {
    __typename
    value
    label
  }
}
    `;
export const UpdatesPagePartsFragmentDoc = gql`
    fragment UpdatesPageParts on UpdatesPage {
  __typename
  pageTitle
  pageDescription
  caseProgress {
    __typename
    badgeText
    title
    description
    timeline {
      __typename
      number
      title
    }
    statistics {
      __typename
      value
      label
    }
  }
  relatedResources {
    __typename
    label
    title
    description
    buttonText
    route
  }
  futureUpdates {
    __typename
    badgeText
    title
    description
    cards {
      __typename
      type
      title
      description
      buttonText
      route
      external
    }
  }
}
    `;
export const SiteSettingsPartsFragmentDoc = gql`
    fragment SiteSettingsParts on SiteSettings {
  __typename
  canonicalUrl
  donationUrl
  petitionUrl
  socialLinks {
    __typename
    platform
    url
  }
}
    `;
export const NavbarPartsFragmentDoc = gql`
    fragment NavbarParts on Navbar {
  __typename
  navigation {
    __typename
    label
    route
  }
  donationButton {
    __typename
    topText
    bottomText
    url
  }
  shareLabel
}
    `;
export const FooterPartsFragmentDoc = gql`
    fragment FooterParts on Footer {
  __typename
  brandDescription
  navigate {
    __typename
    label
    route
  }
  takeAction {
    __typename
    label
    url
    external
  }
  petitionButtonText
  petitionButtonUrl
  legal {
    __typename
    label
    route
  }
  copyrightText
  socialLinks {
    __typename
    platform
    url
  }
  legalDisclaimer
}
    `;
export const UpdatesPartsFragmentDoc = gql`
    fragment UpdatesParts on Updates {
  __typename
  slug
  title
  summary
  content {
    __typename
    text
  }
  category
  status
  date
  featured
  image
}
    `;
export const HeroDocument = gql`
    query hero($relativePath: String!) {
  hero(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HeroParts
  }
}
    ${HeroPartsFragmentDoc}`;
export const HeroConnectionDocument = gql`
    query heroConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HeroFilter) {
  heroConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HeroParts
      }
    }
  }
}
    ${HeroPartsFragmentDoc}`;
export const StorySnapshotDocument = gql`
    query storySnapshot($relativePath: String!) {
  storySnapshot(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...StorySnapshotParts
  }
}
    ${StorySnapshotPartsFragmentDoc}`;
export const StorySnapshotConnectionDocument = gql`
    query storySnapshotConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: StorySnapshotFilter) {
  storySnapshotConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...StorySnapshotParts
      }
    }
  }
}
    ${StorySnapshotPartsFragmentDoc}`;
export const CasePageDocument = gql`
    query casePage($relativePath: String!) {
  casePage(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...CasePageParts
  }
}
    ${CasePagePartsFragmentDoc}`;
export const CasePageConnectionDocument = gql`
    query casePageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: CasePageFilter) {
  casePageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...CasePageParts
      }
    }
  }
}
    ${CasePagePartsFragmentDoc}`;
export const CaseDetailsDocument = gql`
    query caseDetails($relativePath: String!) {
  caseDetails(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...CaseDetailsParts
  }
}
    ${CaseDetailsPartsFragmentDoc}`;
export const CaseDetailsConnectionDocument = gql`
    query caseDetailsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: CaseDetailsFilter) {
  caseDetailsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...CaseDetailsParts
      }
    }
  }
}
    ${CaseDetailsPartsFragmentDoc}`;
export const EvidenceGalleryDocument = gql`
    query evidenceGallery($relativePath: String!) {
  evidenceGallery(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...EvidenceGalleryParts
  }
}
    ${EvidenceGalleryPartsFragmentDoc}`;
export const EvidenceGalleryConnectionDocument = gql`
    query evidenceGalleryConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: EvidenceGalleryFilter) {
  evidenceGalleryConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...EvidenceGalleryParts
      }
    }
  }
}
    ${EvidenceGalleryPartsFragmentDoc}`;
export const PressDocument = gql`
    query press($relativePath: String!) {
  press(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PressParts
  }
}
    ${PressPartsFragmentDoc}`;
export const PressConnectionDocument = gql`
    query pressConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PressFilter) {
  pressConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PressParts
      }
    }
  }
}
    ${PressPartsFragmentDoc}`;
export const VideosDocument = gql`
    query videos($relativePath: String!) {
  videos(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...VideosParts
  }
}
    ${VideosPartsFragmentDoc}`;
export const VideosConnectionDocument = gql`
    query videosConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: VideosFilter) {
  videosConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...VideosParts
      }
    }
  }
}
    ${VideosPartsFragmentDoc}`;
export const VideosPreviewDocument = gql`
    query videosPreview($relativePath: String!) {
  videosPreview(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...VideosPreviewParts
  }
}
    ${VideosPreviewPartsFragmentDoc}`;
export const VideosPreviewConnectionDocument = gql`
    query videosPreviewConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: VideosPreviewFilter) {
  videosPreviewConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...VideosPreviewParts
      }
    }
  }
}
    ${VideosPreviewPartsFragmentDoc}`;
export const PhotosPreviewDocument = gql`
    query photosPreview($relativePath: String!) {
  photosPreview(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PhotosPreviewParts
  }
}
    ${PhotosPreviewPartsFragmentDoc}`;
export const PhotosPreviewConnectionDocument = gql`
    query photosPreviewConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PhotosPreviewFilter) {
  photosPreviewConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PhotosPreviewParts
      }
    }
  }
}
    ${PhotosPreviewPartsFragmentDoc}`;
export const DocumentsPreviewDocument = gql`
    query documentsPreview($relativePath: String!) {
  documentsPreview(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...DocumentsPreviewParts
  }
}
    ${DocumentsPreviewPartsFragmentDoc}`;
export const DocumentsPreviewConnectionDocument = gql`
    query documentsPreviewConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: DocumentsPreviewFilter) {
  documentsPreviewConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...DocumentsPreviewParts
      }
    }
  }
}
    ${DocumentsPreviewPartsFragmentDoc}`;
export const DownloadsPreviewDocument = gql`
    query downloadsPreview($relativePath: String!) {
  downloadsPreview(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...DownloadsPreviewParts
  }
}
    ${DownloadsPreviewPartsFragmentDoc}`;
export const DownloadsPreviewConnectionDocument = gql`
    query downloadsPreviewConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: DownloadsPreviewFilter) {
  downloadsPreviewConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...DownloadsPreviewParts
      }
    }
  }
}
    ${DownloadsPreviewPartsFragmentDoc}`;
export const ImpactProgressDocument = gql`
    query impactProgress($relativePath: String!) {
  impactProgress(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ImpactProgressParts
  }
}
    ${ImpactProgressPartsFragmentDoc}`;
export const ImpactProgressConnectionDocument = gql`
    query impactProgressConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ImpactProgressFilter) {
  impactProgressConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ImpactProgressParts
      }
    }
  }
}
    ${ImpactProgressPartsFragmentDoc}`;
export const UpdatesPreviewDocument = gql`
    query updatesPreview($relativePath: String!) {
  updatesPreview(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...UpdatesPreviewParts
  }
}
    ${UpdatesPreviewPartsFragmentDoc}`;
export const UpdatesPreviewConnectionDocument = gql`
    query updatesPreviewConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: UpdatesPreviewFilter) {
  updatesPreviewConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...UpdatesPreviewParts
      }
    }
  }
}
    ${UpdatesPreviewPartsFragmentDoc}`;
export const SupportersPreviewDocument = gql`
    query supportersPreview($relativePath: String!) {
  supportersPreview(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...SupportersPreviewParts
  }
}
    ${SupportersPreviewPartsFragmentDoc}`;
export const SupportersPreviewConnectionDocument = gql`
    query supportersPreviewConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SupportersPreviewFilter) {
  supportersPreviewConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...SupportersPreviewParts
      }
    }
  }
}
    ${SupportersPreviewPartsFragmentDoc}`;
export const ContactSectionDocument = gql`
    query contactSection($relativePath: String!) {
  contactSection(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ContactSectionParts
  }
}
    ${ContactSectionPartsFragmentDoc}`;
export const ContactSectionConnectionDocument = gql`
    query contactSectionConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ContactSectionFilter) {
  contactSectionConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ContactSectionParts
      }
    }
  }
}
    ${ContactSectionPartsFragmentDoc}`;
export const FinalCtaDocument = gql`
    query finalCTA($relativePath: String!) {
  finalCTA(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...FinalCTAParts
  }
}
    ${FinalCtaPartsFragmentDoc}`;
export const FinalCtaConnectionDocument = gql`
    query finalCTAConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: FinalCTAFilter) {
  finalCTAConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...FinalCTAParts
      }
    }
  }
}
    ${FinalCtaPartsFragmentDoc}`;
export const OurStoryDocument = gql`
    query ourStory($relativePath: String!) {
  ourStory(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...OurStoryParts
  }
}
    ${OurStoryPartsFragmentDoc}`;
export const OurStoryConnectionDocument = gql`
    query ourStoryConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: OurStoryFilter) {
  ourStoryConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...OurStoryParts
      }
    }
  }
}
    ${OurStoryPartsFragmentDoc}`;
export const CaseDocumentsDocument = gql`
    query caseDocuments($relativePath: String!) {
  caseDocuments(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...CaseDocumentsParts
  }
}
    ${CaseDocumentsPartsFragmentDoc}`;
export const CaseDocumentsConnectionDocument = gql`
    query caseDocumentsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: CaseDocumentsFilter) {
  caseDocumentsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...CaseDocumentsParts
      }
    }
  }
}
    ${CaseDocumentsPartsFragmentDoc}`;
export const DocumentsDocument = gql`
    query documents($relativePath: String!) {
  documents(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...DocumentsParts
  }
}
    ${DocumentsPartsFragmentDoc}`;
export const DocumentsConnectionDocument = gql`
    query documentsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: DocumentsFilter) {
  documentsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...DocumentsParts
      }
    }
  }
}
    ${DocumentsPartsFragmentDoc}`;
export const DownloadsDocument = gql`
    query downloads($relativePath: String!) {
  downloads(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...DownloadsParts
  }
}
    ${DownloadsPartsFragmentDoc}`;
export const DownloadsConnectionDocument = gql`
    query downloadsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: DownloadsFilter) {
  downloadsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...DownloadsParts
      }
    }
  }
}
    ${DownloadsPartsFragmentDoc}`;
export const PhotosDocument = gql`
    query photos($relativePath: String!) {
  photos(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PhotosParts
  }
}
    ${PhotosPartsFragmentDoc}`;
export const PhotosConnectionDocument = gql`
    query photosConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PhotosFilter) {
  photosConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PhotosParts
      }
    }
  }
}
    ${PhotosPartsFragmentDoc}`;
export const PrivacyDocument = gql`
    query privacy($relativePath: String!) {
  privacy(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PrivacyParts
  }
}
    ${PrivacyPartsFragmentDoc}`;
export const PrivacyConnectionDocument = gql`
    query privacyConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PrivacyFilter) {
  privacyConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PrivacyParts
      }
    }
  }
}
    ${PrivacyPartsFragmentDoc}`;
export const TermsDocument = gql`
    query terms($relativePath: String!) {
  terms(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...TermsParts
  }
}
    ${TermsPartsFragmentDoc}`;
export const TermsConnectionDocument = gql`
    query termsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: TermsFilter) {
  termsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...TermsParts
      }
    }
  }
}
    ${TermsPartsFragmentDoc}`;
export const DisclaimerDocument = gql`
    query disclaimer($relativePath: String!) {
  disclaimer(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...DisclaimerParts
  }
}
    ${DisclaimerPartsFragmentDoc}`;
export const DisclaimerConnectionDocument = gql`
    query disclaimerConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: DisclaimerFilter) {
  disclaimerConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...DisclaimerParts
      }
    }
  }
}
    ${DisclaimerPartsFragmentDoc}`;
export const ContactDocument = gql`
    query contact($relativePath: String!) {
  contact(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ContactParts
  }
}
    ${ContactPartsFragmentDoc}`;
export const ContactConnectionDocument = gql`
    query contactConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ContactFilter) {
  contactConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ContactParts
      }
    }
  }
}
    ${ContactPartsFragmentDoc}`;
export const CaseProgressDocument = gql`
    query caseProgress($relativePath: String!) {
  caseProgress(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...CaseProgressParts
  }
}
    ${CaseProgressPartsFragmentDoc}`;
export const CaseProgressConnectionDocument = gql`
    query caseProgressConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: CaseProgressFilter) {
  caseProgressConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...CaseProgressParts
      }
    }
  }
}
    ${CaseProgressPartsFragmentDoc}`;
export const UpdatesPageDocument = gql`
    query updatesPage($relativePath: String!) {
  updatesPage(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...UpdatesPageParts
  }
}
    ${UpdatesPagePartsFragmentDoc}`;
export const UpdatesPageConnectionDocument = gql`
    query updatesPageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: UpdatesPageFilter) {
  updatesPageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...UpdatesPageParts
      }
    }
  }
}
    ${UpdatesPagePartsFragmentDoc}`;
export const SiteSettingsDocument = gql`
    query siteSettings($relativePath: String!) {
  siteSettings(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...SiteSettingsParts
  }
}
    ${SiteSettingsPartsFragmentDoc}`;
export const SiteSettingsConnectionDocument = gql`
    query siteSettingsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SiteSettingsFilter) {
  siteSettingsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...SiteSettingsParts
      }
    }
  }
}
    ${SiteSettingsPartsFragmentDoc}`;
export const NavbarDocument = gql`
    query navbar($relativePath: String!) {
  navbar(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...NavbarParts
  }
}
    ${NavbarPartsFragmentDoc}`;
export const NavbarConnectionDocument = gql`
    query navbarConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: NavbarFilter) {
  navbarConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...NavbarParts
      }
    }
  }
}
    ${NavbarPartsFragmentDoc}`;
export const FooterDocument = gql`
    query footer($relativePath: String!) {
  footer(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...FooterParts
  }
}
    ${FooterPartsFragmentDoc}`;
export const FooterConnectionDocument = gql`
    query footerConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: FooterFilter) {
  footerConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...FooterParts
      }
    }
  }
}
    ${FooterPartsFragmentDoc}`;
export const UpdatesDocument = gql`
    query updates($relativePath: String!) {
  updates(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...UpdatesParts
  }
}
    ${UpdatesPartsFragmentDoc}`;
export const UpdatesConnectionDocument = gql`
    query updatesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: UpdatesFilter) {
  updatesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...UpdatesParts
      }
    }
  }
}
    ${UpdatesPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    hero(variables, options) {
      return requester(HeroDocument, variables, options);
    },
    heroConnection(variables, options) {
      return requester(HeroConnectionDocument, variables, options);
    },
    storySnapshot(variables, options) {
      return requester(StorySnapshotDocument, variables, options);
    },
    storySnapshotConnection(variables, options) {
      return requester(StorySnapshotConnectionDocument, variables, options);
    },
    casePage(variables, options) {
      return requester(CasePageDocument, variables, options);
    },
    casePageConnection(variables, options) {
      return requester(CasePageConnectionDocument, variables, options);
    },
    caseDetails(variables, options) {
      return requester(CaseDetailsDocument, variables, options);
    },
    caseDetailsConnection(variables, options) {
      return requester(CaseDetailsConnectionDocument, variables, options);
    },
    evidenceGallery(variables, options) {
      return requester(EvidenceGalleryDocument, variables, options);
    },
    evidenceGalleryConnection(variables, options) {
      return requester(EvidenceGalleryConnectionDocument, variables, options);
    },
    press(variables, options) {
      return requester(PressDocument, variables, options);
    },
    pressConnection(variables, options) {
      return requester(PressConnectionDocument, variables, options);
    },
    videos(variables, options) {
      return requester(VideosDocument, variables, options);
    },
    videosConnection(variables, options) {
      return requester(VideosConnectionDocument, variables, options);
    },
    videosPreview(variables, options) {
      return requester(VideosPreviewDocument, variables, options);
    },
    videosPreviewConnection(variables, options) {
      return requester(VideosPreviewConnectionDocument, variables, options);
    },
    photosPreview(variables, options) {
      return requester(PhotosPreviewDocument, variables, options);
    },
    photosPreviewConnection(variables, options) {
      return requester(PhotosPreviewConnectionDocument, variables, options);
    },
    documentsPreview(variables, options) {
      return requester(DocumentsPreviewDocument, variables, options);
    },
    documentsPreviewConnection(variables, options) {
      return requester(DocumentsPreviewConnectionDocument, variables, options);
    },
    downloadsPreview(variables, options) {
      return requester(DownloadsPreviewDocument, variables, options);
    },
    downloadsPreviewConnection(variables, options) {
      return requester(DownloadsPreviewConnectionDocument, variables, options);
    },
    impactProgress(variables, options) {
      return requester(ImpactProgressDocument, variables, options);
    },
    impactProgressConnection(variables, options) {
      return requester(ImpactProgressConnectionDocument, variables, options);
    },
    updatesPreview(variables, options) {
      return requester(UpdatesPreviewDocument, variables, options);
    },
    updatesPreviewConnection(variables, options) {
      return requester(UpdatesPreviewConnectionDocument, variables, options);
    },
    supportersPreview(variables, options) {
      return requester(SupportersPreviewDocument, variables, options);
    },
    supportersPreviewConnection(variables, options) {
      return requester(SupportersPreviewConnectionDocument, variables, options);
    },
    contactSection(variables, options) {
      return requester(ContactSectionDocument, variables, options);
    },
    contactSectionConnection(variables, options) {
      return requester(ContactSectionConnectionDocument, variables, options);
    },
    finalCTA(variables, options) {
      return requester(FinalCtaDocument, variables, options);
    },
    finalCTAConnection(variables, options) {
      return requester(FinalCtaConnectionDocument, variables, options);
    },
    ourStory(variables, options) {
      return requester(OurStoryDocument, variables, options);
    },
    ourStoryConnection(variables, options) {
      return requester(OurStoryConnectionDocument, variables, options);
    },
    caseDocuments(variables, options) {
      return requester(CaseDocumentsDocument, variables, options);
    },
    caseDocumentsConnection(variables, options) {
      return requester(CaseDocumentsConnectionDocument, variables, options);
    },
    documents(variables, options) {
      return requester(DocumentsDocument, variables, options);
    },
    documentsConnection(variables, options) {
      return requester(DocumentsConnectionDocument, variables, options);
    },
    downloads(variables, options) {
      return requester(DownloadsDocument, variables, options);
    },
    downloadsConnection(variables, options) {
      return requester(DownloadsConnectionDocument, variables, options);
    },
    photos(variables, options) {
      return requester(PhotosDocument, variables, options);
    },
    photosConnection(variables, options) {
      return requester(PhotosConnectionDocument, variables, options);
    },
    privacy(variables, options) {
      return requester(PrivacyDocument, variables, options);
    },
    privacyConnection(variables, options) {
      return requester(PrivacyConnectionDocument, variables, options);
    },
    terms(variables, options) {
      return requester(TermsDocument, variables, options);
    },
    termsConnection(variables, options) {
      return requester(TermsConnectionDocument, variables, options);
    },
    disclaimer(variables, options) {
      return requester(DisclaimerDocument, variables, options);
    },
    disclaimerConnection(variables, options) {
      return requester(DisclaimerConnectionDocument, variables, options);
    },
    contact(variables, options) {
      return requester(ContactDocument, variables, options);
    },
    contactConnection(variables, options) {
      return requester(ContactConnectionDocument, variables, options);
    },
    caseProgress(variables, options) {
      return requester(CaseProgressDocument, variables, options);
    },
    caseProgressConnection(variables, options) {
      return requester(CaseProgressConnectionDocument, variables, options);
    },
    updatesPage(variables, options) {
      return requester(UpdatesPageDocument, variables, options);
    },
    updatesPageConnection(variables, options) {
      return requester(UpdatesPageConnectionDocument, variables, options);
    },
    siteSettings(variables, options) {
      return requester(SiteSettingsDocument, variables, options);
    },
    siteSettingsConnection(variables, options) {
      return requester(SiteSettingsConnectionDocument, variables, options);
    },
    navbar(variables, options) {
      return requester(NavbarDocument, variables, options);
    },
    navbarConnection(variables, options) {
      return requester(NavbarConnectionDocument, variables, options);
    },
    footer(variables, options) {
      return requester(FooterDocument, variables, options);
    },
    footerConnection(variables, options) {
      return requester(FooterConnectionDocument, variables, options);
    },
    updates(variables, options) {
      return requester(UpdatesDocument, variables, options);
    },
    updatesConnection(variables, options) {
      return requester(UpdatesConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "https://content.tinajs.io/2.4/content/67b63e24-2bc1-4bca-9aaf-06e5355670b5/github/main",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
