// tina/config.ts
import { defineConfig } from "tinacms";

// src/components/tina/VideoField.tsx
import React from "react";
import { useCMS, wrapFieldsWithMeta } from "tinacms";
var VideoField = wrapFieldsWithMeta(({ input }) => {
  const cms = useCMS();
  const openVideoManager = () => {
    cms.media.open({
      directory: "/videos",
      allowDelete: true,
      onSelect: (media) => {
        input.onChange(media.id);
      }
    });
  };
  return React.createElement(React.Fragment, null, React.createElement("div", { className: "space-y-3" }, React.createElement("div", { className: "flex flex-col gap-2 sm:flex-row" }, React.createElement(
    "input",
    {
      ...input,
      type: "text",
      className: "w-full rounded border border-gray-300 px-3 py-2 text-sm",
      placeholder: "/videos/example.mp4"
    }
  ), React.createElement(
    "button",
    {
      type: "button",
      onClick: openVideoManager,
      className: "shrink-0 rounded bg-gray-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700"
    },
    "Choose Video"
  )), input.value && React.createElement("div", { className: "rounded border border-gray-200 bg-gray-50 p-2" }, React.createElement(
    "video",
    {
      src: input.value,
      controls: true,
      preload: "metadata",
      className: "max-h-40 w-full rounded bg-black"
    }
  ))));
});
var VideoField_default = VideoField;

// tina/config.ts
var branch = process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    publicFolder: "public",
    outputFolder: "admin"
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "",
      static: false
    },
    accept: ["image/*", "video/mp4", "video/webm", "application/pdf"]
  },
  schema: {
    collections: [
      {
        name: "hero",
        label: "Home Hero",
        path: "src/content/hero",
        format: "json",
        match: {
          include: "index"
        },
        ui: {
          global: true,
          router: () => "/"
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title"
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "image",
            name: "bannerImage",
            label: "Banner Image"
          },
          {
            type: "string",
            name: "bannerAlt",
            label: "Banner Alt Text"
          },
          {
            type: "string",
            name: "donationUrl",
            label: "Donation URL"
          },
          {
            type: "string",
            name: "donationSwitchLabel",
            label: "Donation Switch Label"
          },
          {
            type: "string",
            name: "donationButtonLabel",
            label: "Donation Button Label"
          }
        ]
      },
      {
        name: "storySnapshot",
        label: "Story Snapshot",
        path: "src/content",
        format: "json",
        match: {
          include: "story-snapshot"
        },
        ui: {
          global: true,
          router: () => "/"
        },
        fields: [
          {
            type: "string",
            name: "badgeText",
            label: "Badge Text"
          },
          {
            type: "string",
            name: "title",
            label: "Title"
          },
          {
            type: "string",
            name: "paragraphs",
            label: "Paragraphs",
            list: true,
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "buttonText",
            label: "Button Text"
          },
          {
            type: "image",
            name: "image",
            label: "Image"
          },
          {
            type: "string",
            name: "imageAlt",
            label: "Image Alt Text"
          }
        ]
      },
      {
        name: "casePage",
        label: "Case Page",
        path: "src/content",
        format: "json",
        match: {
          include: "case-page"
        },
        ui: {
          global: true,
          router: () => "/case"
        },
        fields: [
          {
            type: "string",
            name: "heroTitle",
            label: "Hero Title"
          },
          {
            type: "string",
            name: "heroSubtitle",
            label: "Hero Subtitle",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "overviewBadge",
            label: "Overview Badge"
          },
          {
            type: "string",
            name: "overviewTitle",
            label: "Overview Title"
          },
          {
            type: "string",
            name: "overviewDescription",
            label: "Overview Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "overviewLinkText",
            label: "Overview Link Text"
          },
          {
            type: "string",
            name: "overviewButtonText",
            label: "Overview Button Text"
          },
          {
            type: "object",
            name: "timeline",
            label: "Timeline",
            list: true,
            fields: [
              {
                type: "string",
                name: "date",
                label: "Date"
              },
              {
                type: "string",
                name: "title",
                label: "Title"
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea"
                }
              }
            ]
          },
          {
            type: "string",
            name: "contractTitle",
            label: "Contract Title"
          },
          {
            type: "object",
            name: "contractParagraphs",
            label: "Contract Paragraphs",
            list: true,
            fields: [
              {
                type: "string",
                name: "text",
                label: "Text",
                ui: {
                  component: "textarea"
                }
              }
            ]
          },
          {
            type: "string",
            name: "whyTitle",
            label: "Why This Matters Title"
          },
          {
            type: "string",
            name: "whyText",
            label: "Why This Matters Text",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "caseSummaryLinkText",
            label: "Case Summary Link Text"
          },
          {
            type: "string",
            name: "evidenceBadge",
            label: "Evidence Badge"
          },
          {
            type: "string",
            name: "evidenceTitle",
            label: "Evidence Title"
          },
          {
            type: "string",
            name: "evidenceDescription",
            label: "Evidence Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "evidenceNote",
            label: "Evidence Note",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "object",
            name: "evidenceCards",
            label: "Evidence Cards",
            list: true,
            fields: [
              {
                type: "string",
                name: "route",
                label: "Route"
              },
              {
                type: "image",
                name: "image",
                label: "Image"
              },
              {
                type: "string",
                name: "imageAlt",
                label: "Image Alt Text"
              },
              {
                type: "string",
                name: "navigationLabel",
                label: "Navigation Label"
              },
              {
                type: "string",
                name: "title",
                label: "Title"
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea"
                }
              }
            ]
          }
        ]
      },
      {
        name: "caseDetails",
        label: "Case Details",
        path: "src/content",
        format: "json",
        match: {
          include: "case-details"
        },
        ui: {
          router: () => "/",
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false
          }
        },
        fields: [
          {
            type: "string",
            name: "badgeText",
            label: "Badge Text"
          },
          {
            type: "string",
            name: "title",
            label: "Title"
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "object",
            name: "timeline",
            label: "Timeline",
            list: true,
            fields: [
              {
                type: "string",
                name: "date",
                label: "Date"
              },
              {
                type: "string",
                name: "title",
                label: "Title"
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea"
                }
              }
            ]
          },
          {
            type: "string",
            name: "campaignTitle",
            label: "Campaign Title"
          },
          {
            type: "object",
            name: "campaignParagraphs",
            label: "Campaign Paragraphs",
            list: true,
            fields: [
              {
                type: "string",
                name: "text",
                label: "Text",
                ui: {
                  component: "textarea"
                }
              }
            ]
          },
          {
            type: "string",
            name: "quote",
            label: "Quote",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "quoteNote",
            label: "Quote Note",
            ui: {
              component: "textarea"
            }
          }
        ]
      },
      {
        name: "evidenceGallery",
        label: "Evidence Gallery",
        path: "src/content",
        format: "json",
        match: {
          include: "evidence-gallery"
        },
        ui: {
          router: () => "/",
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false
          }
        },
        fields: [
          {
            type: "string",
            name: "badgeText",
            label: "Badge Text"
          },
          {
            type: "string",
            name: "title",
            label: "Title"
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "object",
            name: "cards",
            label: "Cards",
            list: true,
            fields: [
              {
                type: "string",
                name: "type",
                label: "Type"
              },
              {
                type: "string",
                name: "route",
                label: "Route"
              },
              {
                type: "image",
                name: "image",
                label: "Image"
              },
              {
                type: "string",
                name: "imageAlt",
                label: "Image Alt Text"
              },
              {
                type: "string",
                name: "navigationLabel",
                label: "Navigation Label"
              },
              {
                type: "string",
                name: "title",
                label: "Title"
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea"
                }
              }
            ]
          }
        ]
      },
      {
        name: "press",
        label: "Press & Media",
        path: "src/content",
        format: "json",
        match: {
          include: "press"
        },
        ui: {
          router: () => "/press",
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false
          }
        },
        fields: [
          {
            type: "string",
            name: "pageTitle",
            label: "Page Title"
          },
          {
            type: "string",
            name: "pageDescription",
            label: "Page Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "object",
            name: "heroSection",
            label: "Hero Section",
            fields: [
              {
                type: "string",
                name: "section",
                label: "Section Label"
              },
              {
                type: "string",
                name: "title",
                label: "Title"
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
                ui: {
                  component: "textarea"
                }
              }
            ]
          },
          {
            type: "object",
            name: "introduction",
            label: "Introduction",
            fields: [
              {
                type: "string",
                name: "badge",
                label: "Badge Text"
              },
              {
                type: "string",
                name: "title",
                label: "Title"
              },
              {
                type: "object",
                name: "paragraphs",
                label: "Paragraphs",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Text",
                    ui: {
                      component: "textarea"
                    }
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "caseReference",
            label: "Case Reference",
            fields: [
              {
                type: "string",
                name: "badge",
                label: "Badge Text"
              },
              {
                type: "string",
                name: "title",
                label: "Title"
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "object",
                name: "fields",
                label: "Case Identification Fields",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "key",
                    label: "Key",
                    ui: {
                      component: "hidden"
                    }
                  },
                  {
                    type: "string",
                    name: "label",
                    label: "Label"
                  },
                  {
                    type: "string",
                    name: "value",
                    label: "Value"
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "resources",
            label: "Available Resources",
            fields: [
              {
                type: "string",
                name: "badge",
                label: "Badge Text"
              },
              {
                type: "string",
                name: "title",
                label: "Title"
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "object",
                name: "cards",
                label: "Resource Cards",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "key",
                    label: "Key",
                    ui: {
                      component: "hidden"
                    }
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Title"
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: {
                      component: "textarea"
                    }
                  },
                  {
                    type: "string",
                    name: "linkText",
                    label: "Link Text"
                  },
                  {
                    type: "string",
                    name: "route",
                    label: "Route"
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "editorialNote",
            label: "Editorial Note",
            fields: [
              {
                type: "string",
                name: "badge",
                label: "Badge Text"
              },
              {
                type: "string",
                name: "title",
                label: "Title"
              },
              {
                type: "object",
                name: "paragraphs",
                label: "Paragraphs",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Text",
                    ui: {
                      component: "textarea"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "videos",
        label: "Videos",
        path: "src/content",
        format: "json",
        match: {
          include: "videos"
        },
        ui: {
          router: () => "/videos",
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false
          }
        },
        fields: [
          {
            type: "string",
            name: "pageTitle",
            label: "Page Title"
          },
          {
            type: "string",
            name: "pageDescription",
            label: "Page Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "object",
            name: "intro",
            label: "Page Introduction",
            fields: [
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "caseLinkText",
                label: "Case Link Text"
              },
              {
                type: "string",
                name: "documentsLinkText",
                label: "Documents Link Text"
              },
              {
                type: "string",
                name: "photosLinkText",
                label: "Photos Link Text"
              }
            ]
          },
          {
            type: "object",
            name: "videos",
            label: "Videos",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title"
              },
              {
                type: "string",
                name: "videoSrc",
                label: "Video Source",
                ui: {
                  component: VideoField_default
                }
              },
              {
                type: "image",
                name: "poster",
                label: "Poster Image"
              },
              {
                type: "string",
                name: "videoAlt",
                label: "Video Alt Text"
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "duration",
                label: "Duration"
              }
            ]
          },
          {
            type: "object",
            name: "relatedResources",
            label: "Related Case Resources",
            list: true,
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label"
              },
              {
                type: "string",
                name: "title",
                label: "Title"
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text"
              },
              {
                type: "string",
                name: "route",
                label: "Route"
              }
            ]
          },
          {
            type: "object",
            name: "futureVideos",
            label: "Future Videos",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title"
              },
              {
                type: "string",
                name: "cardTitle",
                label: "Card Title"
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea"
                }
              }
            ]
          }
        ]
      },
      {
        name: "videosPreview",
        label: "Videos Preview",
        path: "src/content",
        format: "json",
        match: {
          include: "videos-preview"
        },
        ui: {
          router: () => "/",
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false
          }
        },
        fields: [
          {
            type: "string",
            name: "badgeText",
            label: "Badge Text"
          },
          {
            type: "string",
            name: "title",
            label: "Title"
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "buttonText",
            label: "Button Text"
          },
          {
            type: "string",
            name: "buttonRoute",
            label: "Button Route"
          },
          {
            type: "image",
            name: "image",
            label: "Image"
          },
          {
            type: "string",
            name: "imageAlt",
            label: "Image Alt Text"
          }
        ]
      },
      {
        name: "photosPreview",
        label: "Photos Preview",
        path: "src/content",
        format: "json",
        match: {
          include: "photos-preview"
        },
        ui: {
          router: () => "/",
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false
          }
        },
        fields: [
          {
            type: "string",
            name: "badgeText",
            label: "Badge Text"
          },
          {
            type: "string",
            name: "title",
            label: "Title"
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "buttonText",
            label: "Button Text"
          },
          {
            type: "string",
            name: "buttonRoute",
            label: "Button Route"
          },
          {
            type: "image",
            name: "image",
            label: "Image"
          },
          {
            type: "string",
            name: "imageAlt",
            label: "Image Alt Text"
          }
        ]
      },
      {
        name: "documentsPreview",
        label: "Documents Preview",
        path: "src/content",
        format: "json",
        match: {
          include: "documents-preview"
        },
        ui: {
          router: () => "/",
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false
          }
        },
        fields: [
          {
            type: "string",
            name: "badgeText",
            label: "Badge Text"
          },
          {
            type: "string",
            name: "title",
            label: "Title"
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "buttonText",
            label: "Button Text"
          },
          {
            type: "string",
            name: "buttonRoute",
            label: "Button Route"
          },
          {
            type: "string",
            name: "cardTitle",
            label: "Card Title"
          },
          {
            type: "string",
            name: "cardSubtitle",
            label: "Card Subtitle",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "cardButtonText",
            label: "Card Button Text"
          },
          {
            type: "string",
            name: "cardLink",
            label: "Card Link"
          }
        ]
      },
      {
        name: "downloadsPreview",
        label: "Downloads Preview",
        path: "src/content",
        format: "json",
        match: {
          include: "downloads-preview"
        },
        ui: {
          router: () => "/",
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false
          }
        },
        fields: [
          {
            type: "string",
            name: "badgeText",
            label: "Badge Text"
          },
          {
            type: "string",
            name: "title",
            label: "Title"
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "buttonText",
            label: "Button Text"
          },
          {
            type: "string",
            name: "buttonRoute",
            label: "Button Route"
          },
          {
            type: "string",
            name: "cardTitle",
            label: "Card Title"
          },
          {
            type: "string",
            name: "cardSubtitle",
            label: "Card Subtitle",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "cardButtonText",
            label: "Card Button Text"
          },
          {
            type: "string",
            name: "cardLink",
            label: "Card Link"
          }
        ]
      },
      {
        name: "impactProgress",
        label: "Impact Progress",
        path: "src/content",
        format: "json",
        match: {
          include: "impact-progress"
        },
        ui: {
          router: () => "/",
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false
          }
        },
        fields: [
          {
            type: "string",
            name: "badgeText",
            label: "Badge Text"
          },
          {
            type: "string",
            name: "title",
            label: "Title"
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "number",
            name: "raisedAmount",
            label: "Raised Amount"
          },
          {
            type: "number",
            name: "goalAmount",
            label: "Goal Amount"
          },
          {
            type: "string",
            name: "totalGoalLabel",
            label: "Total Goal Label"
          },
          {
            type: "string",
            name: "amountRaisedLabel",
            label: "Amount Raised Label"
          },
          {
            type: "object",
            name: "expenses",
            label: "Expense Cards",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title"
              },
              {
                type: "string",
                name: "amount",
                label: "Amount"
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea"
                }
              }
            ]
          }
        ]
      },
      {
        name: "updatesPreview",
        label: "Updates Preview",
        path: "src/content",
        format: "json",
        match: {
          include: "updates-preview"
        },
        ui: {
          router: () => "/",
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false
          }
        },
        fields: [
          {
            type: "string",
            name: "badgeText",
            label: "Badge Text"
          },
          {
            type: "string",
            name: "title",
            label: "Title"
          },
          {
            type: "object",
            name: "cards",
            label: "Update Cards",
            list: true,
            fields: [
              {
                type: "string",
                name: "category",
                label: "Category"
              },
              {
                type: "string",
                name: "date",
                label: "Date"
              },
              {
                type: "string",
                name: "title",
                label: "Title"
              },
              {
                type: "string",
                name: "excerpt",
                label: "Excerpt",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "image",
                name: "image",
                label: "Image"
              },
              {
                type: "string",
                name: "imageAlt",
                label: "Image Alt Text"
              },
              {
                type: "string",
                name: "link",
                label: "Link"
              }
            ]
          },
          {
            type: "string",
            name: "buttonText",
            label: "Button Text"
          },
          {
            type: "string",
            name: "buttonRoute",
            label: "Button Route"
          }
        ]
      },
      {
        name: "supportersPreview",
        label: "Supporters Preview",
        path: "src/content",
        format: "json",
        match: {
          include: "supporters-preview"
        },
        ui: {
          router: () => "/",
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false
          }
        },
        fields: [
          {
            type: "string",
            name: "badgeText",
            label: "Badge Text"
          },
          {
            type: "string",
            name: "title",
            label: "Title"
          },
          {
            type: "object",
            name: "testimonials",
            label: "Testimonials",
            list: true,
            fields: [
              {
                type: "string",
                name: "quote",
                label: "Quote",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "name",
                label: "Name"
              },
              {
                type: "string",
                name: "role",
                label: "Role"
              }
            ]
          }
        ]
      },
      {
        name: "contactSection",
        label: "Contact Section",
        path: "src/content",
        format: "json",
        match: {
          include: "contact-section"
        },
        ui: {
          router: () => "/",
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false
          }
        },
        fields: [
          {
            type: "string",
            name: "badgeText",
            label: "Badge Text"
          },
          {
            type: "string",
            name: "title",
            label: "Title"
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "preferEmailText",
            label: "Prefer Email Text"
          },
          {
            type: "string",
            name: "reachUsText",
            label: "Reach Us Text"
          },
          {
            type: "string",
            name: "email",
            label: "Email Address"
          },
          {
            type: "image",
            name: "image",
            label: "Campaign Image"
          },
          {
            type: "string",
            name: "imageAlt",
            label: "Image Alt Text"
          },
          {
            type: "string",
            name: "donationButtonText",
            label: "Donation Button Text"
          },
          {
            type: "string",
            name: "donationUrl",
            label: "Donation URL"
          }
        ]
      },
      {
        name: "finalCTA",
        label: "Final CTA",
        path: "src/content",
        format: "json",
        match: {
          include: "final-cta"
        },
        ui: {
          router: () => "/",
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title"
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "donationButtonText",
            label: "Donation Button Text"
          },
          {
            type: "string",
            name: "shareButtonText",
            label: "Share Button Text"
          },
          {
            type: "string",
            name: "supportText",
            label: "Support Text",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "shareTitle",
            label: "Share Title"
          },
          {
            type: "string",
            name: "donationUrl",
            label: "Donation URL"
          }
        ]
      },
      {
        name: "ourStory",
        label: "Our Story",
        path: "src/content",
        format: "json",
        match: {
          include: "our-story"
        },
        ui: {
          router: () => "/our-story",
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false
          }
        },
        fields: [
          {
            type: "string",
            name: "heroTitle",
            label: "Hero Title"
          },
          {
            type: "string",
            name: "heroSubtitle",
            label: "Hero Subtitle",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "title",
            label: "Main Title"
          },
          {
            type: "string",
            name: "subtitle",
            label: "Main Subtitle"
          },
          {
            type: "string",
            name: "description",
            label: "Introduction",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "exploreCaseText",
            label: "Explore Case Link Text"
          },
          {
            type: "string",
            name: "propertyPhotosText",
            label: "Property Photos Link Text"
          },
          {
            type: "string",
            name: "documentsText",
            label: "Documents Link Text"
          },
          {
            type: "string",
            name: "videosText",
            label: "Videos Link Text"
          },
          {
            type: "object",
            name: "chapters",
            label: "Story Chapters",
            list: true,
            fields: [
              {
                type: "string",
                name: "heading",
                label: "Chapter Heading"
              },
              {
                type: "object",
                name: "paragraphs",
                label: "Paragraphs",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Paragraph",
                    ui: { component: "textarea" }
                  }
                ]
              },
              {
                type: "image",
                name: "image",
                label: "Chapter Image"
              },
              {
                type: "string",
                name: "imageAlt",
                label: "Image Alt Text"
              }
            ]
          },
          {
            type: "string",
            name: "closingStatement",
            label: "Closing Statement",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "closingSupportingText",
            label: "Closing Supporting Text"
          },
          {
            type: "string",
            name: "closingExploreCaseText",
            label: "Closing Explore Case Button"
          },
          {
            type: "string",
            name: "closingDocumentsText",
            label: "Closing Documents Button"
          },
          {
            type: "string",
            name: "closingPhotosText",
            label: "Closing Photos Button"
          }
        ]
      },
      {
        name: "caseDocuments",
        label: "Case Document Records",
        path: "src/content/case-documents",
        format: "json",
        match: {
          include: "*"
        },
        ui: {
          allowedActions: {
            create: true,
            delete: true,
            createNestedFolder: false
          }
        },
        fields: [
          {
            type: "string",
            name: "slug",
            label: "Document Slug"
          },
          {
            type: "string",
            name: "title",
            label: "Document Title"
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "category",
            label: "Category"
          },
          {
            type: "string",
            name: "date",
            label: "Date"
          },
          {
            type: "image",
            name: "file",
            label: "Document File",
            accept: ["document"]
          }
        ]
      },
      {
        name: "documents",
        label: "Documents",
        path: "src/content",
        format: "json",
        match: {
          include: "documents"
        },
        ui: {
          router: () => "/documents",
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false
          }
        },
        fields: [
          {
            type: "string",
            name: "pageTitle",
            label: "Page Title"
          },
          {
            type: "string",
            name: "pageDescription",
            label: "Page Introduction",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "caseDocumentsTitle",
            label: "Case Documents Heading"
          },
          {
            type: "string",
            name: "emptyStateText",
            label: "No Results Message",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "futureDocumentsTitle",
            label: "Future Documents Title"
          },
          {
            type: "string",
            name: "futureDocumentsCardTitle",
            label: "Future Documents Card Title"
          },
          {
            type: "string",
            name: "futureDocumentsDescription",
            label: "Future Documents Description",
            ui: { component: "textarea" }
          },
          {
            type: "object",
            name: "documents",
            label: "Case Documents",
            list: true,
            fields: [
              {
                type: "string",
                name: "slug",
                label: "Document Slug"
              },
              {
                type: "string",
                name: "title",
                label: "Document Title"
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: { component: "textarea" }
              },
              {
                type: "string",
                name: "category",
                label: "Category"
              },
              {
                type: "string",
                name: "date",
                label: "Date"
              },
              {
                type: "string",
                name: "file",
                label: "Document File"
              }
            ]
          }
        ]
      },
      {
        name: "downloads",
        label: "Downloads",
        path: "src/content",
        format: "json",
        match: {
          include: "downloads"
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false
          }
        },
        fields: [
          {
            type: "string",
            name: "heroTitle",
            label: "Hero Title"
          },
          {
            type: "string",
            name: "heroSubtitle",
            label: "Hero Subtitle",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "contextLabel",
            label: "Context Label"
          },
          {
            type: "string",
            name: "contextTitle",
            label: "Context Heading"
          },
          {
            type: "string",
            name: "contextDescription",
            label: "Context Description",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "documentsLinkText",
            label: "Documents Link Text"
          },
          {
            type: "string",
            name: "caseLinkText",
            label: "Case Link Text"
          },
          // Featured Resource
          {
            type: "string",
            name: "featuredLabel",
            label: "Featured Resource Label"
          },
          {
            type: "string",
            name: "featuredTitle",
            label: "Featured Resource Title"
          },
          {
            type: "string",
            name: "featuredDescription",
            label: "Featured Resource Description",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "featuredFormatLabel",
            label: "Featured Format Label"
          },
          {
            type: "string",
            name: "featuredStatusLabel",
            label: "Featured Status Label"
          },
          {
            type: "string",
            name: "featuredButtonText",
            label: "Featured Button Text"
          },
          {
            type: "reference",
            name: "featuredDocument",
            label: "Featured Document",
            collections: ["caseDocuments"]
          },
          // Download Sections
          {
            type: "object",
            name: "sections",
            label: "Download Sections",
            list: true,
            fields: [
              {
                type: "string",
                name: "key",
                label: "Section Key",
                ui: { component: "hidden" }
              },
              {
                type: "string",
                name: "title",
                label: "Section Title"
              },
              {
                type: "string",
                name: "description",
                label: "Section Description",
                ui: { component: "textarea" }
              },
              {
                type: "object",
                name: "documents",
                label: "Download Items",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "key",
                    label: "Item Key",
                    ui: { component: "hidden" }
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Download Title"
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: { component: "textarea" }
                  },
                  {
                    type: "string",
                    name: "buttonText",
                    label: "Button Text"
                  },
                  {
                    type: "reference",
                    name: "documentReference",
                    label: "Document Record",
                    collections: ["caseDocuments"]
                  }
                ]
              }
            ]
          },
          // Related Resources
          {
            type: "string",
            name: "relatedLabel",
            label: "Related Resources Label"
          },
          {
            type: "string",
            name: "relatedTitle",
            label: "Related Resources Heading"
          },
          {
            type: "string",
            name: "relatedDescription",
            label: "Related Resources Description",
            ui: { component: "textarea" }
          },
          {
            type: "object",
            name: "relatedCards",
            label: "Related Resource Cards",
            list: true,
            fields: [
              {
                type: "string",
                name: "key",
                label: "Card Key",
                ui: { component: "hidden" }
              },
              {
                type: "string",
                name: "label",
                label: "Card Label"
              },
              {
                type: "string",
                name: "title",
                label: "Card Title"
              },
              {
                type: "string",
                name: "description",
                label: "Card Description",
                ui: { component: "textarea" }
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text"
              }
            ]
          }
        ]
      },
      {
        name: "photos",
        label: "Photos",
        path: "src/content",
        format: "json",
        match: {
          include: "photos"
        },
        ui: {
          router: () => "/photos",
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false
          }
        },
        fields: [
          {
            type: "string",
            name: "heroTitle",
            label: "Hero Title"
          },
          {
            type: "string",
            name: "heroSubtitle",
            label: "Hero Subtitle",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "contextLabel",
            label: "Context Label"
          },
          {
            type: "string",
            name: "contextTitle",
            label: "Context Title"
          },
          {
            type: "string",
            name: "contextDescription",
            label: "Context Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "object",
            name: "contextLinks",
            label: "Context Links",
            fields: [
              {
                type: "string",
                name: "story",
                label: "Read Our Story Text"
              },
              {
                type: "string",
                name: "case",
                label: "Explore the Case Text"
              },
              {
                type: "string",
                name: "videos",
                label: "Watch the Videos Text"
              }
            ]
          },
          {
            type: "object",
            name: "highlights",
            label: "Transformation Highlights",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title"
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea"
                }
              }
            ]
          },
          {
            type: "object",
            name: "before",
            label: "Before the Transformation",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title"
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea"
                }
              }
            ]
          },
          {
            type: "object",
            name: "after",
            label: "After the Transformation",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title"
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea"
                }
              }
            ]
          },
          {
            type: "object",
            name: "food",
            label: "Food Gallery",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title"
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle"
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea"
                }
              }
            ]
          },
          {
            type: "object",
            name: "beforePhotos",
            label: "Before Photos",
            list: true,
            fields: [
              { type: "string", name: "id", label: "Photo ID", ui: { component: "hidden" } },
              { type: "image", name: "image", label: "Full-Size Image" },
              { type: "image", name: "thumbnail", label: "Thumbnail Image" },
              { type: "string", name: "alt", label: "Alt Text" },
              { type: "string", name: "caption", label: "Caption" },
              { type: "number", name: "width", label: "Image Width" },
              { type: "number", name: "height", label: "Image Height" }
            ]
          },
          {
            type: "object",
            name: "afterPhotos",
            label: "After Photos",
            list: true,
            fields: [
              { type: "string", name: "id", label: "Photo ID", ui: { component: "hidden" } },
              { type: "image", name: "image", label: "Full-Size Image" },
              { type: "image", name: "thumbnail", label: "Thumbnail Image" },
              { type: "string", name: "alt", label: "Alt Text" },
              { type: "string", name: "caption", label: "Caption" },
              { type: "number", name: "width", label: "Image Width" },
              { type: "number", name: "height", label: "Image Height" }
            ]
          },
          {
            type: "object",
            name: "foodPhotos",
            label: "Food Photos",
            list: true,
            fields: [
              { type: "string", name: "id", label: "Photo ID", ui: { component: "hidden" } },
              { type: "image", name: "image", label: "Full-Size Image" },
              { type: "image", name: "thumbnail", label: "Thumbnail Image" },
              { type: "string", name: "alt", label: "Alt Text" },
              { type: "string", name: "caption", label: "Caption" },
              { type: "number", name: "width", label: "Image Width" },
              { type: "number", name: "height", label: "Image Height" }
            ]
          },
          {
            type: "object",
            name: "resources",
            label: "Related Resources",
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label"
              },
              {
                type: "string",
                name: "title",
                label: "Title"
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "object",
                name: "cards",
                label: "Resource Cards",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "label",
                    label: "Card Label"
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Card Title"
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Card Description",
                    ui: {
                      component: "textarea"
                    }
                  },
                  {
                    type: "string",
                    name: "buttonText",
                    label: "Button Text"
                  },
                  {
                    type: "string",
                    name: "route",
                    label: "Route",
                    ui: { component: "hidden" }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "privacy",
        label: "Privacy Policy",
        path: "src/content",
        format: "json",
        match: {
          include: "privacy"
        },
        ui: {
          router: () => "/privacy",
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false
          }
        },
        fields: [
          {
            type: "string",
            name: "pageTitle",
            label: "Page Title"
          },
          {
            type: "string",
            name: "pageDescription",
            label: "Page Description",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "heroSubtitle",
            label: "Hero Subtitle",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "lastUpdated",
            label: "Last Updated"
          },
          {
            type: "object",
            name: "sections",
            label: "Privacy Policy Sections",
            list: true,
            fields: [
              {
                type: "string",
                name: "id",
                label: "Section ID",
                ui: { component: "hidden" }
              },
              {
                type: "string",
                name: "title",
                label: "Section Title"
              },
              {
                type: "object",
                name: "content",
                label: "Section Content",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Text",
                    ui: { component: "textarea" }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "terms",
        label: "Terms of Service",
        path: "src/content",
        format: "json",
        match: {
          include: "terms"
        },
        ui: {
          router: () => "/terms",
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false
          }
        },
        fields: [
          {
            type: "string",
            name: "pageTitle",
            label: "Page Title"
          },
          {
            type: "string",
            name: "pageDescription",
            label: "Page Description",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "heroSubtitle",
            label: "Hero Subtitle",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "lastUpdated",
            label: "Last Updated"
          },
          {
            type: "object",
            name: "sections",
            label: "Terms of Service Sections",
            list: true,
            fields: [
              {
                type: "string",
                name: "id",
                label: "Section ID",
                ui: { component: "hidden" }
              },
              {
                type: "string",
                name: "title",
                label: "Section Title"
              },
              {
                type: "object",
                name: "content",
                label: "Section Content",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Text",
                    ui: { component: "textarea" }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "disclaimer",
        label: "Disclaimer",
        path: "src/content",
        format: "json",
        match: {
          include: "disclaimer"
        },
        ui: {
          router: () => "/disclaimer",
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false
          }
        },
        fields: [
          {
            type: "string",
            name: "pageTitle",
            label: "Page Title"
          },
          {
            type: "string",
            name: "pageDescription",
            label: "Page Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "heroSubtitle",
            label: "Hero Subtitle",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "lastUpdated",
            label: "Last Updated"
          },
          {
            type: "object",
            name: "sections",
            label: "Disclaimer Sections",
            list: true,
            fields: [
              {
                type: "string",
                name: "id",
                label: "Section ID",
                ui: {
                  component: "hidden"
                }
              },
              {
                type: "string",
                name: "title",
                label: "Section Title"
              },
              {
                type: "object",
                name: "content",
                label: "Section Content",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Text",
                    ui: {
                      component: "textarea"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "contact",
        label: "Contact Page",
        path: "src/content",
        format: "json",
        match: {
          include: "contact"
        },
        ui: {
          router: () => "/contact",
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false
          }
        },
        fields: [
          {
            type: "string",
            name: "pageTitle",
            label: "Page Title"
          },
          {
            type: "string",
            name: "pageDescription",
            label: "Page Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "heroTitle",
            label: "Hero Title"
          },
          {
            type: "string",
            name: "heroSubtitle",
            label: "Hero Subtitle",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "contactContentTitle",
            label: "Contact Content Accessibility Title"
          },
          {
            type: "string",
            name: "contactContentDescription",
            label: "Contact Content Accessibility Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "object",
            name: "form",
            label: "Contact Form",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Form Title"
              },
              {
                type: "string",
                name: "description",
                label: "Form Description",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "fullNameLabel",
                label: "Full Name Label"
              },
              {
                type: "string",
                name: "fullNamePlaceholder",
                label: "Full Name Placeholder"
              },
              {
                type: "string",
                name: "emailLabel",
                label: "Email Address Label"
              },
              {
                type: "string",
                name: "emailPlaceholder",
                label: "Email Address Placeholder"
              },
              {
                type: "string",
                name: "phoneLabel",
                label: "Phone Number Label"
              },
              {
                type: "string",
                name: "phonePlaceholder",
                label: "Phone Number Placeholder"
              },
              {
                type: "string",
                name: "inquiryTypeLabel",
                label: "Inquiry Type Label"
              },
              {
                type: "string",
                name: "inquiryPlaceholder",
                label: "Inquiry Placeholder"
              },
              {
                type: "object",
                name: "inquiryOptions",
                label: "Inquiry Options",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "key",
                    label: "Option Key",
                    ui: {
                      component: "hidden"
                    }
                  },
                  {
                    type: "string",
                    name: "label",
                    label: "Option Label"
                  }
                ]
              },
              {
                type: "string",
                name: "subjectLabel",
                label: "Subject Label"
              },
              {
                type: "string",
                name: "subjectPlaceholder",
                label: "Subject Placeholder"
              },
              {
                type: "string",
                name: "messageLabel",
                label: "Message Label"
              },
              {
                type: "string",
                name: "messagePlaceholder",
                label: "Message Placeholder"
              },
              {
                type: "string",
                name: "submitButtonText",
                label: "Submit Button Text"
              },
              {
                type: "string",
                name: "privacyNotice",
                label: "Privacy Notice",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "successTitle",
                label: "Success Title"
              },
              {
                type: "string",
                name: "successMessage",
                label: "Success Message"
              }
            ]
          },
          {
            type: "object",
            name: "contactInformation",
            label: "Contact Information",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Card Title"
              },
              {
                type: "string",
                name: "emailLabel",
                label: "Email Label"
              },
              {
                type: "string",
                name: "email",
                label: "Email Address"
              },
              {
                type: "string",
                name: "phoneLabel",
                label: "Phone Label"
              },
              {
                type: "string",
                name: "phone",
                label: "Phone Number"
              },
              {
                type: "string",
                name: "campaignLabel",
                label: "Campaign Label"
              },
              {
                type: "string",
                name: "campaignName",
                label: "Campaign Name"
              },
              {
                type: "string",
                name: "campaignSubtitle",
                label: "Campaign Subtitle"
              }
            ]
          },
          {
            type: "object",
            name: "support",
            label: "Support the Campaign",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Card Title"
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "emphasis",
                label: "Emphasis Text",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "gofundmeText",
                label: "GoFundMe Text"
              },
              {
                type: "string",
                name: "caseDocumentsButtonText",
                label: "Case Documents Button Text"
              },
              {
                type: "string",
                name: "caseDocumentsRoute",
                label: "Case Documents Route"
              }
            ]
          },
          {
            type: "object",
            name: "share",
            label: "Share the Campaign",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Card Title"
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "emphasis",
                label: "Emphasis Text"
              },
              {
                type: "object",
                name: "platforms",
                label: "Sharing Platforms",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "key",
                    label: "Platform Key",
                    ui: {
                      component: "hidden"
                    }
                  },
                  {
                    type: "string",
                    name: "label",
                    label: "Platform Label"
                  }
                ]
              },
              {
                type: "string",
                name: "copySuccessText",
                label: "Copy Success Text"
              },
              {
                type: "string",
                name: "instructionText",
                label: "Sharing Instruction"
              }
            ]
          },
          {
            type: "object",
            name: "resources",
            label: "Explore the Campaign",
            fields: [
              {
                type: "string",
                name: "eyebrow",
                label: "Section Eyebrow"
              },
              {
                type: "string",
                name: "title",
                label: "Section Title"
              },
              {
                type: "string",
                name: "description",
                label: "Section Description",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "object",
                name: "cards",
                label: "Resource Cards",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "key",
                    label: "Card Key",
                    ui: {
                      component: "hidden"
                    }
                  },
                  {
                    type: "string",
                    name: "eyebrow",
                    label: "Card Eyebrow"
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Card Title"
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Card Description",
                    ui: {
                      component: "textarea"
                    }
                  },
                  {
                    type: "string",
                    name: "buttonText",
                    label: "Button Text"
                  },
                  {
                    type: "string",
                    name: "route",
                    label: "Route"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "caseProgress",
        label: "Case Progress",
        path: "src/content",
        format: "json",
        match: {
          include: "case-progress"
        },
        ui: {
          router: () => "/updates",
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false
          }
        },
        fields: [
          {
            type: "string",
            name: "badgeText",
            label: "Badge Text"
          },
          {
            type: "string",
            name: "title",
            label: "Title"
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "object",
            name: "timeline",
            label: "Timeline",
            list: true,
            fields: [
              {
                type: "string",
                name: "number",
                label: "Year"
              },
              {
                type: "string",
                name: "title",
                label: "Title"
              }
            ]
          },
          {
            type: "object",
            name: "statistics",
            label: "Statistics",
            list: true,
            fields: [
              {
                type: "string",
                name: "value",
                label: "Value"
              },
              {
                type: "string",
                name: "label",
                label: "Label"
              }
            ]
          }
        ]
      },
      {
        name: "updatesPage",
        label: "Updates Page",
        path: "src/content",
        format: "json",
        match: {
          include: "updates-page"
        },
        ui: {
          router: () => "/updates",
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false
          }
        },
        fields: [
          {
            type: "string",
            name: "pageTitle",
            label: "Page Title"
          },
          {
            type: "string",
            name: "pageDescription",
            label: "Page Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "object",
            name: "caseProgress",
            label: "Case Progress",
            fields: [
              {
                type: "string",
                name: "badgeText",
                label: "Badge Text"
              },
              {
                type: "string",
                name: "title",
                label: "Title"
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "object",
                name: "timeline",
                label: "Timeline",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "number",
                    label: "Year"
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Event"
                  }
                ]
              },
              {
                type: "object",
                name: "statistics",
                label: "Statistics",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "value",
                    label: "Value"
                  },
                  {
                    type: "string",
                    name: "label",
                    label: "Label"
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "relatedResources",
            label: "Related Case Resources",
            list: true,
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label"
              },
              {
                type: "string",
                name: "title",
                label: "Title"
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text"
              },
              {
                type: "string",
                name: "route",
                label: "Route"
              }
            ]
          },
          {
            type: "object",
            name: "futureUpdates",
            label: "Stay Connected",
            fields: [
              {
                type: "string",
                name: "badgeText",
                label: "Badge Text"
              },
              {
                type: "string",
                name: "title",
                label: "Title"
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "object",
                name: "cards",
                label: "Cards",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "type",
                    label: "Card Type",
                    options: ["resource", "support"]
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Title"
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: {
                      component: "textarea"
                    }
                  },
                  {
                    type: "string",
                    name: "buttonText",
                    label: "Button Text"
                  },
                  {
                    type: "string",
                    name: "route",
                    label: "Route / URL"
                  },
                  {
                    type: "boolean",
                    name: "external",
                    label: "External Link"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "siteSettings",
        label: "Site Settings",
        path: "src/content",
        format: "json",
        match: {
          include: "site-settings"
        },
        ui: {
          global: true,
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false
          }
        },
        fields: [
          {
            type: "string",
            name: "canonicalUrl",
            label: "Canonical Website URL"
          },
          {
            type: "string",
            name: "donationUrl",
            label: "GoFundMe URL"
          },
          {
            type: "string",
            name: "petitionUrl",
            label: "Petition URL"
          },
          {
            type: "object",
            name: "socialLinks",
            label: "Social Media Links",
            list: true,
            fields: [
              {
                type: "string",
                name: "platform",
                label: "Platform",
                options: [
                  "Facebook",
                  "Instagram",
                  "TikTok",
                  "YouTube",
                  "Twitter"
                ]
              },
              {
                type: "string",
                name: "url",
                label: "URL"
              }
            ]
          }
        ]
      },
      {
        name: "navbar",
        label: "Navbar",
        path: "src/content",
        format: "json",
        match: {
          include: "navbar"
        },
        ui: {
          router: () => "/",
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false
          }
        },
        fields: [
          {
            type: "object",
            name: "navigation",
            label: "Navigation Links",
            list: true,
            fields: [
              {
                type: "string",
                name: "label",
                label: "Link Label"
              },
              {
                type: "string",
                name: "route",
                label: "Route"
              }
            ]
          },
          {
            type: "object",
            name: "donationButton",
            label: "Donation Button",
            fields: [
              {
                type: "string",
                name: "topText",
                label: "Top Text"
              },
              {
                type: "string",
                name: "bottomText",
                label: "Bottom Text"
              },
              {
                type: "string",
                name: "url",
                label: "GoFundMe URL"
              }
            ]
          },
          {
            type: "string",
            name: "shareLabel",
            label: "Share Label"
          }
        ]
      },
      {
        name: "footer",
        label: "Footer",
        path: "src/content",
        format: "json",
        match: {
          include: "footer"
        },
        ui: {
          router: () => "/",
          allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false
          }
        },
        fields: [
          {
            type: "string",
            name: "brandDescription",
            label: "Brand Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "object",
            name: "navigate",
            label: "Navigate Links",
            list: true,
            fields: [
              {
                type: "string",
                name: "label",
                label: "Link Label"
              },
              {
                type: "string",
                name: "route",
                label: "Route"
              }
            ]
          },
          {
            type: "object",
            name: "takeAction",
            label: "Take Action Links",
            list: true,
            fields: [
              {
                type: "string",
                name: "label",
                label: "Link Label"
              },
              {
                type: "string",
                name: "url",
                label: "URL"
              },
              {
                type: "boolean",
                name: "external",
                label: "External Link"
              }
            ]
          },
          {
            type: "string",
            name: "petitionButtonText",
            label: "Petition Button Text"
          },
          {
            type: "string",
            name: "petitionButtonUrl",
            label: "Petition Button URL"
          },
          {
            type: "object",
            name: "legal",
            label: "Legal Links",
            list: true,
            fields: [
              {
                type: "string",
                name: "label",
                label: "Link Label"
              },
              {
                type: "string",
                name: "route",
                label: "Route"
              }
            ]
          },
          {
            type: "string",
            name: "copyrightText",
            label: "Copyright Text"
          },
          {
            type: "object",
            name: "socialLinks",
            label: "Social Links",
            list: true,
            fields: [
              {
                type: "string",
                name: "platform",
                label: "Platform",
                options: [
                  "Facebook",
                  "Twitter",
                  "Instagram"
                ]
              },
              {
                type: "string",
                name: "url",
                label: "URL"
              }
            ]
          },
          {
            type: "string",
            name: "legalDisclaimer",
            label: "Legal Disclaimer",
            ui: {
              component: "textarea"
            }
          }
        ]
      },
      {
        name: "updates",
        label: "Updates",
        path: "src/content/updates",
        format: "json",
        ui: {
          router: ({ document }) => {
            return `/updates/${document._sys.filename}`;
          },
          allowedActions: {
            createNestedFolder: false
          }
        },
        fields: [
          {
            type: "string",
            name: "slug",
            label: "Slug"
          },
          {
            type: "string",
            name: "title",
            label: "Title"
          },
          {
            type: "string",
            name: "summary",
            label: "Summary",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "object",
            name: "content",
            label: "Content Paragraphs",
            list: true,
            fields: [
              {
                type: "string",
                name: "text",
                label: "Paragraph",
                ui: {
                  component: "textarea"
                }
              }
            ]
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: [
              "Court",
              "Website",
              "Campaign",
              "Media",
              "Documents",
              "Fundraising"
            ]
          },
          {
            type: "string",
            name: "status",
            label: "Status",
            options: [
              "Active",
              "New",
              "Completed",
              "Upcoming"
            ]
          },
          {
            type: "string",
            name: "date",
            label: "Date"
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured Update"
          },
          {
            type: "image",
            name: "image",
            label: "Featured Image"
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
