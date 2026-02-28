# StudyBuddy

A React Native mobile application that lets students find study partners, chat in real-time, and join video calls together. Built with Expo, Clerk, and Stream.

## Features

- **Authentication** - Sign in with Google, Apple, or GitHub via Clerk SSO
- **Real-time messaging** - Study room channels powered by Stream Chat, including thread support
- **Video calls** - One-on-one and group video sessions via Stream Video with an incoming-call ringing UI
- **Explore** - Browse and search all registered users to start a new study session
- **Profile** - View your account details, study stats, and sign out

## Tech Stack

| Area             | Library                                            |
| ---------------- | -------------------------------------------------- |
| Framework        | Expo (expo-router, file-based routing)             |
| Language         | TypeScript                                         |
| Styling          | NativeWind v4 + Tailwind CSS                       |
| Authentication   | Clerk (`@clerk/clerk-expo`)                        |
| Chat             | Stream Chat (`stream-chat-expo`)                   |
| Video            | Stream Video (`@stream-io/video-react-native-sdk`) |
| Error monitoring | Sentry (`@sentry/react-native`)                    |
| Navigation       | Expo Router + React Navigation                     |

## Project Structure

```
src/
  app/
    _layout.tsx          # Root layout – ClerkProvider, ChatWrapper, VideoProvider
    (auth)/              # Unauthenticated screens (sign-in)
    (tabs)/              # Main tab screens: Chats, Explore, Profile
    api/
      sync-user+api.ts   # API route – upserts user into Stream
      token+api.ts       # API route – generates Stream user token
    call/[callId].tsx    # Active video call screen
    channel/[cid]/       # Chat channel screen + thread screen
  components/
    ChatWrapper.tsx      # Stream Chat client initialisation and provider
    VideoProvider.tsx    # Stream Video client initialisation and ringing UI
  contexts/
    AppProvider.tsx      # Shared state for active channel and thread
  hooks/
    useSocialAuth.ts     # OAuth flow via Clerk SSO
    useStartChat.ts      # Creates or opens a direct messaging channel
    useStreamUsers.ts    # Fetches user list from Stream
  lib/
    theme.ts             # Color tokens and Stream Chat theme overrides
    utils.ts             # Utility helpers (e.g. greeting by time of day)
```

## Prerequisites

- [Node.js](https://nodejs.org) 18 or later
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (`npm install -g expo-cli`)
- iOS Simulator (Xcode) or Android Emulator (Android Studio), or a physical device
- A [Clerk](https://clerk.com) project with Google, Apple, and GitHub OAuth configured
- A [Stream](https://getstream.io) project with Chat and Video products enabled

> **Note:** The Stream Video SDK requires native modules and does not run in Expo Go. Use a development build (`expo-dev-client`) for full functionality.

## Environment Variables

A `.env.example` file is included in the repository. Copy it to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

| Variable                            | Where to find it                    | Client / Server |
| ----------------------------------- | ----------------------------------- | --------------- |
| `EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk Dashboard > API Keys          | Client          |
| `EXPO_PUBLIC_STREAM_API_KEY`        | Stream Dashboard > Project Settings | Client          |
| `STREAM_SECRET_KEY`                 | Stream Dashboard > Project Settings | Server only     |

Variables prefixed with `EXPO_PUBLIC_` are bundled into the client build. `STREAM_SECRET_KEY` is only accessed inside the Expo API routes (`src/app/api/`) and must never be exposed to the client.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env.local` and fill in your keys (see [Environment Variables](#environment-variables) above):

   ```bash
   cp .env.example .env.local
   ```

3. Start the development server:

   ```bash
   npx expo start
   ```

4. Press `i` to open the iOS Simulator, `a` for an Android Emulator, or scan the QR code with the Expo Go app. For video call features, use a development build instead of Expo Go.

## Development Build

To run a development build with the Stream Video native module:

```bash
# iOS
npx expo run:ios

# Android
npx expo run:android
```

Or use EAS Build for a shareable development client:

```bash
npx eas build --profile development --platform ios
```

## Building for Production

This project is configured for EAS Build. To trigger a production build:

```bash
npx eas build --profile production --platform all
```

Refer to the [EAS Build documentation](https://docs.expo.dev/build/introduction/) for environment variable configuration in CI/CD and over-the-air update setup.
