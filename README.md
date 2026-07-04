# Cordis

Cordis is a React Native Android-first heart health tracker focused on two input paths:

- **Quick Measure** using a camera-based spot check flow
- **Health Connect** integration for reading health data synced from supported devices and apps

The app is currently in active development and the present codebase mainly covers UI, navigation, and early Android integration groundwork.

## Current Scope

This project currently includes:

- Bottom tab navigation for:
  - Home
  - History
  - Connect
  - Settings
- Quick Measure flow screens:
  - In Progress
  - Complete
  - Result
- History screen UI
- Connect screen UI
- Settings screen UI
- Home dashboard UI
- Initial Android manifest changes for Health Connect integration

## Product Direction

Cordis is being designed around this flow:

1. **Home** – overview, latest reading, and entry point to quick measure
2. **Quick Measure** – focused manual heart-rate measurement experience
3. **Result** – latest measurement outcome
4. **History** – past readings and trend visualization
5. **Connect** – Health Connect permission and sync setup
6. **Settings** – reminders, privacy, connected sources, and profile controls

## Tech Stack

- React Native
- TypeScript
- React Navigation
- Lucide React Native
- Android Health Connect integration (in progress)

## Project Status

Current state:

- UI foundation is implemented for the main screens
- Navigation structure is in place
- Health Connect native setup has started
- Real data integration is not fully wired yet
- Quick Measure currently uses placeholder UI/state, not production sensor logic

## Folder Structure

```txt
src/
  navigation/
    MainTabs.tsx
    RootStack.tsx
  screens/
    HomeScreen.tsx
    HistoryScreen.tsx
    ConnectScreen.tsx
    SettingsScreen.tsx
    QuickMeasureInProgressScreen.tsx
    QuickMeasureCompleteScreen.tsx
    ResultScreen.tsx
  theme/
    colors.ts
```

## Getting Started

### Prerequisites

- Node.js
- npm
- React Native development environment
- Android Studio
- A real Android device is recommended for Health Connect testing

### Install dependencies

```bash
npm install
```

### Start Metro

```bash
npm start
```

### Run Android app

```bash
npm run android
```

## Health Connect Notes

Cordis is being built to use **Health Connect** as the Android health data layer.

Expected data flow:

**Wearable / vendor app -> Health Connect -> Cordis**

This means the app is intended to read standardized health records from Health Connect rather than integrating directly with each wearable vendor separately.

## Current Limitations

- Android-first implementation
- Health Connect integration is not fully completed yet
- Camera-based quick measure is still a UI flow, not final measurement logic
- Some displayed health values are mock data
- Settings actions are mostly placeholder UI at this stage

## Roadmap

Planned next steps:

- Finish Health Connect setup and permission flow
- Read heart-rate and step data from Health Connect
- Replace mock history data with real records
- Implement real camera-based quick measure logic
- Add reminder scheduling
- Improve result interpretation and trend insights
- Refine UI polish and state management

## Development Notes

This repository is currently optimized for rapid iteration and feature validation. Expect changes in:

- screen structure
- navigation typing
- native Android setup
- permission handling
- health data models

## Disclaimer

Cordis is a software project under development and is not a medical device. Measurements and insights should not be treated as diagnostic or emergency medical guidance.
