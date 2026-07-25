export interface CaseDocument {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  file: string;
}

export const documents: CaseDocument[] = [
  {
    id: "lease-2010",
    title: "Lease-to-Own Agreement (2010)",
    description:
      "The original agreement establishing the lease-to-own terms, purchase option, and obligations of the parties.",
    category: "Contract",
    date: "July 2010",
    file: "/documents/lease-to-own-agreement-2010.pdf",
  },

  {
    id: "complaint",
    title: "Court Complaint",
    description:
      "The initial complaint filed with the court outlining the claims and legal basis of the case.",
    category: "Court Filing",
    date: "2014",
    file: "/documents/court-complaint.pdf",
  },

  {
    id: "orders",
    title: "Court Orders",
    description:
      "Orders issued by the court during the proceedings of the case.",
    category: "Court Order",
    date: "2014–Present",
    file: "/documents/court-orders.pdf",
  },

  {
    id: "docket",
    title: "Case Docket",
    description:
      "A chronological record of filings, hearings, and court activity throughout the litigation.",
    category: "Court Record",
    date: "2014–Present",
    file: "/documents/case-docket.pdf",
  },

  {
    id: "llc",
    title: "Eclectic Synergy LLC Formation Documents",
    description:
      "Corporate records relating to the formation of Eclectic Synergy LLC.",
    category: "Corporate Record",
    date: "2010",
    file: "/documents/eclectic-synergy-llc.pdf",
  },
];