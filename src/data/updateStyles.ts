export const CATEGORY_STYLES = {
  Court: {
    icon: "⚖",
    bg: "#6B3A8F",
    text: "#FFFFFF",
  },

  Website: {
    icon: "🌐",
    bg: "#3B82F6",
    text: "#FFFFFF",
  },

  Campaign: {
    icon: "📣",
    bg: "#D94B8A",
    text: "#FFFFFF",
  },

  Media: {
    icon: "📰",
    bg: "#6B7280",
    text: "#FFFFFF",
  },

  Documents: {
    icon: "📄",
    bg: "#6B7280",
    text: "#FFFFFF",
  },

  Fundraising: {
    icon: "💚",
    bg: "#87CB28",
    text: "#FFFFFF",
  },
} as const;

export const STATUS_STYLES = {
  Active: {
    text: "ACTIVE",
    bg: "#87CB28",
    color: "#FFFFFF",
  },

  New: {
    text: "NEW",
    bg: "#3B82F6",
    color: "#FFFFFF",
  },

  Completed: {
    text: "COMPLETED",
    bg: "#6B7280",
    color: "#FFFFFF",
  },

  Upcoming: {
    text: "UPCOMING",
    bg: "#D94B8A",
    color: "#FFFFFF",
  },
} as const;