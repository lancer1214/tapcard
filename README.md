# TapCard: Digital Business Card App

TapCard is a professional digital business card application that allows users to create, manage, and share their business cards using NFC, QR codes, and other sharing methods.

## Features

- **Profile Creation & Management**: Create and edit your digital business card with personal and professional information
- **NFC Tap-to-Share**: Share your business card by tapping phones together (NFC)
- **QR Code Generation & Scanning**: Generate QR codes for your card and scan others' QR codes
- **Social Media Integration**: Link your social media profiles to your business card
- **Contact Management**: Store and organize contacts you've received
- **Multiple Sharing Options**: Share via email, SMS, social media, and more
- **Privacy Controls**: Control which information is visible on your card
- **Dark Mode Support**: Toggle between light and dark themes

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/tapcard.git
   cd tapcard
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Run on a device or emulator:
   - Press `a` to run on Android emulator/device
   - Press `i` to run on iOS simulator/device (macOS only)
   - Scan the QR code with the Expo Go app on your physical device

## Building for Production

### Android

1. Configure app.json:
   - Update the package name in `android.package`
   - Set version code and version name

2. Generate a keystore file (if you don't have one):
   ```
   keytool -genkeypair -v -keystore tapcard.keystore -alias tapcard -keyalg RSA -keysize 2048 -validity 10000
   ```

3. Create a file `android/key.properties` with your keystore information:
   ```
   storePassword=<your-keystore-password>
   keyPassword=<your-key-password>
   keyAlias=tapcard
   storeFile=<path-to-keystore>
   ```

4. Build the APK/AAB:
   ```
   expo build:android -t app-bundle
   ```
   or
   ```
   expo build:android -t apk
   ```

### iOS (macOS only)

1. Configure app.json:
   - Update the bundle identifier in `ios.bundleIdentifier`
   - Set version and build number

2. Build the IPA:
   ```
   expo build:ios
   ```

## Publishing to Google Play Store

1. Create a Google Play Developer account ($25 one-time fee)
2. Create a new application in the Google Play Console
3. Configure the store listing:
   - Add app title, description, and promotional text
   - Upload screenshots and feature graphic
   - Set up categorization and content rating
4. Set up pricing and distribution:
   - Set price to $0.99
   - Select countries for distribution
   - Configure tax information
5. Upload the AAB file generated from the build process
6. Submit for review

### Required Assets for Google Play Store

- **Feature Graphic** (1024 x 500 px)
- **App Icon** (512 x 512 px)
- **Screenshots** (minimum 2):
  - Phone: 16:9 aspect ratio (1920 x 1080 px recommended)
  - 7-inch tablet: 16:9 aspect ratio
  - 10-inch tablet: 16:9 aspect ratio
- **Short Description** (80 characters max)
- **Full Description** (4000 characters max)
- **Privacy Policy URL**

## Project Structure

```
/src
  /components      # Reusable UI components
  /context         # React Context providers
  /hooks           # Custom React hooks
  /navigation      # Navigation configuration
  /screens         # App screens
  /services        # Business logic services
  /utils           # Utility functions
/assets            # Static assets (images, fonts, etc.)
```

## Technologies Used

- **React Native**: Cross-platform mobile framework
- **Expo**: Development platform for React Native
- **React Navigation**: Navigation library
- **React Native Paper**: Material Design components
- **AsyncStorage**: Local storage solution
- **NFC Manager**: NFC functionality
- **QR Code**: QR code generation and scanning

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Icons by [Material Design Icons](https://materialdesignicons.com/)
- Color palette inspired by [Material Design](https://material.io/design/color/the-color-system.html)
