import { Dimensions } from "react-native";
// import type { DeepPartial, Theme } from "stream-chat-expo";

const { width } = Dimensions.get("window");
const vw = (percent: number) => (width * percent) / 100;

// these colors are matching tailwind.config.js
export const COLORS = {
  primary: "#6C5CE7",
  primaryDark: "#5A4BD1",
  primaryLight: "#A29BFE",
  primaryTransparent: "rgba(108, 92, 231, 0.5)",

  background: "#0F0E17",
  surface: "#1A1A2E",
  surfaceDark: "#0F0E17",
  surfaceLight: "#16213E",

  text: "#FFFFFE",
  textMuted: "#A7A9BE",
  textSubtle: "#72757E",

  border: "#232946",
  borderLight: "#2E3354",

  success: "#00B894",
  warning: "#FDCB6E",
  danger: "#FF6B6B",

  active: "#6C5CE7",

  outgoingBubble: "#3D3580",
  incomingBubble: "#1A1A2E",
  chatBackground: "#0F0E17",

  accent: "#FF6B6B",
  accentSecondary: "#00B894",
};

// export const studyBuddyTheme: DeepPartial<Theme> = {
//   colors: {
//     targetedMessageBackground: "transparent",
//     grey_dark: colors.text,
//     accent_blue: colors.primary,
//     white: colors.text,
//     black: colors.background,
//   },
//   audioAttachment: {
//     container: {
//       backgroundColor: colors.surfaceDark,
//       borderRadius: 12,
//       paddingHorizontal: 12,
//       paddingVertical: 8,
//       width: 300,
//       overflow: "hidden",
//     },
//     leftContainer: {
//       marginRight: 8,
//     },
//     playPauseButton: {
//       backgroundColor: colors.primary,
//       borderRadius: 20,
//     },
//     progressControlContainer: {
//       flex: 1,
//     },
//     progressDurationText: {
//       color: colors.textMuted,
//       fontSize: 12,
//     },
//     rightContainer: {
//       marginLeft: 8,
//     },
//     speedChangeButton: {
//       backgroundColor: colors.surface,
//       borderRadius: 4,
//       paddingHorizontal: 6,
//       paddingVertical: 2,
//     },
//     speedChangeButtonText: {
//       color: colors.text,
//       fontSize: 12,
//     },
//   },
//   imageGallery: {
//     backgroundColor: colors.background,
//     slide: {
//       backgroundColor: colors.background,
//     },
//     grid: {
//       contentContainer: {
//         backgroundColor: colors.background,
//       },
//       handle: {
//         backgroundColor: colors.background,
//       },
//       handleText: {
//         color: colors.textMuted,
//       },
//     },
//     header: {
//       container: {
//         backgroundColor: colors.surface,
//       },
//       usernameText: {
//         color: colors.text,
//       },
//       dateText: {
//         color: colors.textMuted,
//       },
//     },
//     footer: {
//       container: {
//         backgroundColor: colors.surface,
//       },
//       imageCountText: {
//         color: colors.textMuted,
//       },
//     },
//   },
//   channelListMessenger: {
//     flatList: {
//       backgroundColor: colors.background,
//     },
//     flatListContent: {},
//   },
//   loadingIndicator: {
//     container: {
//       backgroundColor: colors.background,
//     },
//     loadingText: {
//       color: colors.textMuted,
//     },
//   },
//   channelListFooterLoadingIndicator: {
//     container: {
//       backgroundColor: colors.background,
//     },
//   },
//   channelListLoadingIndicator: {
//     container: {
//       backgroundColor: colors.background,
//     },
//   },
//   channelListSkeleton: {
//     background: { backgroundColor: colors.surfaceLight },
//     maskFillColor: colors.background,
//   },
//   channelPreview: {
//     container: {
//       backgroundColor: colors.background,
//     },
//     contentContainer: {
//       backgroundColor: colors.background,
//     },
//     title: {
//       color: colors.text,
//       fontSize: 16,
//       fontWeight: "600",
//     },
//     unreadContainer: {
//       backgroundColor: colors.primary,
//     },
//   },
//   messageList: {
//     scrollToBottomButton: {
//       chevronColor: colors.text,
//       container: {
//         backgroundColor: colors.surface,
//         borderColor: colors.border,
//       },
//     },
//     container: {
//       backgroundColor: colors.surfaceLight,
//     },
//     contentContainer: {
//       backgroundColor: colors.surfaceLight,
//     },

//     inlineUnreadIndicator: {
//       container: {
//         backgroundColor: colors.primary,
//       },
//       text: {
//         color: colors.text,
//       },
//     },
//     listContainer: {
//       backgroundColor: colors.surfaceLight,
//     },
//   },

//   messageInput: {
//     container: {
//       backgroundColor: colors.surface,
//       borderTopColor: colors.border,
//       borderTopWidth: 1,
//       paddingVertical: 8,
//       paddingHorizontal: 12,
//     },
//     inputBox: {
//       color: colors.text,
//       backgroundColor: colors.surfaceDark,
//       borderRadius: 8,
//       paddingHorizontal: 12,
//     },
//     inputBoxContainer: {
//       backgroundColor: colors.surfaceDark,
//       borderRadius: 8,
//       borderWidth: 0,
//     },
//     autoCompleteInputContainer: {
//       backgroundColor: colors.surface,
//     },
//     suggestionsListContainer: {
//       container: {
//         backgroundColor: colors.surface,
//       },
//     },
//     audioRecorder: {
//       micIcon: {
//         pathFill: colors.primary,
//       },
//       checkContainer: {
//         backgroundColor: colors.primary,
//       },
//       deleteContainer: {
//         backgroundColor: colors.danger,
//       },
//       deleteIcon: {
//         pathFill: colors.text,
//       },
//       slideToCancelContainer: {
//         backgroundColor: colors.surface,
//       },
//     },
//     audioRecordingInProgress: {
//       container: {
//         backgroundColor: colors.surface,
//       },
//       durationText: {
//         color: colors.text,
//       },
//     },
//     audioRecordingLockIndicator: {
//       container: {
//         backgroundColor: colors.surface,
//       },
//       lockIcon: {
//         pathFill: colors.primary,
//       },
//       arrowUpIcon: {
//         pathFill: colors.textMuted,
//       },
//     },
//     audioRecordingPreview: {
//       container: {
//         backgroundColor: colors.surface,
//       },
//       currentTime: {
//         color: colors.text,
//       },
//       progressBar: {
//         backgroundColor: colors.primary,
//       },
//     },
//     audioRecordingWaveform: {
//       container: {
//         backgroundColor: colors.surface,
//       },
//       waveform: {
//         backgroundColor: colors.primary,
//       },
//     },
//   },
//   messageSimple: {
//     avatarWrapper: {
//       container: {
//         marginRight: 8,
//       },
//     },
//     file: {
//       container: {
//         backgroundColor: colors.surfaceDark,
//         borderColor: colors.border,
//       },
//       fileSize: { color: colors.textMuted },
//       title: { color: colors.text, fontWeight: "normal" },
//     },
//     pinnedHeader: { container: { display: "none" } },
//     content: {
//       textContainer: {
//         maxWidth: vw(80),
//         paddingHorizontal: 12,
//       },
//       replyBorder: {
//         borderColor: colors.primary,
//       },
//       containerInner: {
//         backgroundColor: colors.incomingBubble,
//         borderColor: colors.incomingBubble,
//         borderRadius: 8,
//       },
//       deletedMetaText: {
//         display: "none",
//       },
//       deletedContainerInner: {
//         backgroundColor: colors.surfaceDark,
//         borderColor: colors.surfaceDark,
//       },
//       deletedText: {
//         text: {
//           color: colors.textMuted,
//         },
//       },
//       markdown: {
//         em: {
//           color: colors.textMuted,
//         },
//         text: {
//           color: colors.text,
//         },
//       },
//       metaContainer: {
//         backgroundColor: "transparent",
//       },
//       metaText: {
//         color: colors.textSubtle,
//       },
//     },

//     giphy: {
//       container: {
//         margin: 4,
//         borderRadius: 8,
//       },
//     },
//     card: {
//       container: {
//         width: vw(80),
//         backgroundColor: colors.surface,
//         borderColor: colors.border,
//       },
//       authorNameContainer: {
//         display: "none",
//       },
//       cover: {
//         marginHorizontal: 0,
//         borderRadius: 8,
//         borderBottomLeftRadius: 0,
//         borderBottomRightRadius: 0,
//       },
//       footer: {
//         backgroundColor: colors.surfaceDark,
//         borderBottomLeftRadius: 8,
//         borderBottomRightRadius: 8,
//         padding: 12,
//         title: {
//           marginHorizontal: 4,
//           marginBottom: 4,
//           color: colors.text,
//         },
//         description: {
//           marginHorizontal: 4,
//           color: colors.textMuted,
//         },
//       },
//     },
//     replies: {
//       container: {
//         backgroundColor: colors.surface,
//         borderRadius: 8,
//       },
//       leftCurve: {
//         borderColor: colors.primary,
//       },
//       messageRepliesText: {
//         padding: 4,
//         color: colors.primary,
//       },
//       rightCurve: {
//         borderColor: colors.primary,
//       },
//     },
//     status: {
//       timeIcon: {
//         pathFill: colors.textSubtle,
//       },
//       readByCount: {
//         color: colors.textSubtle,
//       },
//       checkAllIcon: {
//         pathFill: colors.primary,
//       },
//       checkIcon: {
//         pathFill: colors.textSubtle,
//       },
//     },
//   },
//   thread: {
//     newThread: {
//       backgroundGradientStart: colors.surfaceLight,
//       backgroundGradientStop: colors.surfaceLight,
//       text: {
//         color: colors.textMuted,
//       },
//     },
//   },
//   reply: {
//     container: {
//       backgroundColor: colors.surfaceDark,
//       borderColor: colors.border,
//     },
//     textContainer: {
//       backgroundColor: colors.surfaceDark,
//     },
//     markdownStyles: {
//       text: {
//         color: colors.textMuted,
//       },
//     },
//   },
//   typingIndicator: {
//     container: {
//       backgroundColor: colors.surfaceLight,
//     },
//     text: {
//       color: colors.textMuted,
//     },
//   },
//   poll: {
//     button: {
//       text: {
//         color: colors.primary,
//       },
//     },
//     message: {
//       container: {
//         backgroundColor: colors.incomingBubble,
//         borderRadius: 8,
//       },
//       header: {
//         title: {
//           color: colors.primary,
//         },
//         subtitle: {
//           color: colors.textMuted,
//         },
//       },
//       option: {
//         text: {
//           color: colors.text,
//         },
//         progressBar: {
//           backgroundColor: colors.border,
//         },
//         progressBarEmptyFill: colors.border,
//         progressBarVotedFill: colors.primary,
//         progressBarWinnerFill: colors.primaryLight,
//         voteButtonActive: colors.primary,
//         voteButtonInactive: colors.textMuted,
//       },
//     },
//   },
// };
