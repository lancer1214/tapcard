# TapCard Publishing Guide

This guide provides step-by-step instructions for publishing the TapCard app to the Google Play Store.

## Preparing for Submission

### 1. Generate a Production Build

1. Make sure your app.json is properly configured:

```json
{
  "expo": {
    "name": "TapCard",
    "slug": "tapcard",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#106B77"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.yourcompany.tapcard"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#106B77"
      },
      "package": "com.yourcompany.tapcard",
      "versionCode": 1,
      "permissions": [
        "NFC",
        "CAMERA"
      ]
    },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  }
}
```

2. Generate a keystore file (if you don't already have one):

```bash
keytool -genkeypair -v -keystore tapcard.keystore -alias tapcard -keyalg RSA -keysize 2048 -validity 10000
```

3. Configure EAS Build:

```bash
eas build:configure
```

4. Create a build profile in eas.json:

```json
{
  "build": {
    "production": {
      "android": {
        "buildType": "app-bundle"
      }
    }
  }
}
```

5. Build the app bundle:

```bash
eas build --platform android --profile production
```

6. Wait for the build to complete and download the AAB file.

### 2. Create Required Assets

#### App Icon
- Create a high-resolution app icon (512 x 512 px)
- Make sure it follows Google Play Store guidelines

#### Feature Graphic
- Create a feature graphic (1024 x 500 px)
- This appears at the top of your app listing
- Should showcase your app's brand and functionality

#### Screenshots
- Create at least 8 high-quality screenshots
- Phone screenshots: 16:9 aspect ratio (1920 x 1080 px recommended)
- Include screenshots of:
  - Home screen with business card
  - Edit profile screen
  - Share options screen
  - QR code display
  - Contacts list
  - Contact details
  - Settings screen
  - NFC sharing in action

#### Promotional Video (Optional but Recommended)
- Create a 30-second promotional video
- Showcase key features and benefits
- Upload to YouTube or directly to Google Play Console

### 3. Prepare Store Listing Content

#### App Title
- TapCard - Digital Business Card

#### Short Description (80 characters max)
- Share your professional info instantly with NFC tap and QR code technology.

#### Full Description (4000 characters max)
```
TapCard: Your Professional Identity, One Tap Away

TapCard transforms your smartphone into a powerful digital business card that you can share instantly with a simple tap or QR code scan. No more carrying stacks of paper cards or running out at important networking events!

KEY FEATURES:

✓ INSTANT SHARING
Share your contact information instantly via NFC tap, QR code, email, text message, or social media.

✓ COMPREHENSIVE PROFILE
Create a complete professional profile with your name, title, company, contact details, social media links, and photo.

✓ NFC TAP-TO-SHARE
Simply tap your phone against another NFC-enabled device to share your business card instantly.

✓ QR CODE GENERATION
Generate a QR code that others can scan to instantly save your contact information.

✓ CONTACT MANAGEMENT
Save and organize contacts you receive, add notes, and tag them for easy reference.

✓ MULTIPLE SHARING OPTIONS
Share your card via email, SMS, social media, or any other sharing method on your device.

✓ PRIVACY CONTROLS
Control exactly which information is visible on your shared card.

✓ PROFESSIONAL DESIGN
Make a lasting impression with a sleek, professional digital business card design.

WHY CHOOSE TAPCARD?

• ENVIRONMENTALLY FRIENDLY: Reduce paper waste by going digital.
• ALWAYS UPDATED: Change jobs or phone numbers? Update once, and everyone gets your latest info.
• NEVER RUN OUT: No more "I just gave away my last card" moments.
• TRACK NETWORKING: See when and how your card is viewed.
• SAVE TIME: No more manually entering contact information.

TapCard is perfect for:
• Professionals at networking events
• Sales representatives
• Real estate agents
• Freelancers and consultants
• Small business owners
• Job seekers
• Anyone who wants to make a modern, professional impression

Download TapCard today and transform how you network!
```

#### Categorization
- Primary Category: Business
- Secondary Category: Productivity

### 4. Create Privacy Policy

Create a privacy policy document that covers:
- What information your app collects
- How the information is used
- Data storage and security practices
- Third-party services used
- User rights regarding their data

You can use a privacy policy generator or consult with a legal professional.

## Publishing to Google Play Store

### 1. Create a Google Play Developer Account

1. Go to [Google Play Developer Console](https://play.google.com/console/signup)
2. Sign in with your Google account
3. Pay the one-time $25 registration fee
4. Complete the account details

### 2. Create a New Application

1. In the Google Play Console, click "Create app"
2. Enter the app name: "TapCard"
3. Select default language: English (United States)
4. Choose app or game: App
5. Select whether it's free or paid: Paid
6. Select price: $0.99
7. Confirm the app is not directed primarily at children
8. Click "Create app"

### 3. Set Up Your Store Listing

1. Navigate to "Store presence" > "Store listing"
2. Fill in all required fields:
   - App name
   - Short description
   - Full description
   - Upload screenshots
   - Upload feature graphic
   - Upload app icon
   - Add promotional video (optional)
   - Add content rating
   - Select category
   - Add contact details

### 4. Content Rating

1. Go to "Content rating" section
2. Complete the questionnaire about your app's content
3. Submit for rating

### 5. Pricing & Distribution

1. Go to "Pricing & distribution"
2. Select countries where you want to distribute the app
3. Set the price to $0.99 for all countries (or use country-specific pricing)
4. Confirm the app contains ads (No)
5. Confirm the app contains in-app purchases (No)
6. Select "Contains ads: No"
7. Select "Contains in-app purchases: No"
8. Save your changes

### 6. App Release

1. Go to "Production" under "Release" section
2. Click "Create new release"
3. Upload your AAB file
4. Add release notes
5. Review the release
6. Start rollout to production

### 7. App Content

1. Complete the "App content" section
2. Provide information about your app's target audience
3. Confirm compliance with developer policies

### 8. Store Settings

1. Configure store settings
2. Set up your developer page

### 9. Submit for Review

1. Make sure all sections are completed (they should have green checkmarks)
2. Submit your app for review
3. Wait for Google's review process (typically 1-3 days)

## Post-Publication

### Monitor Performance

1. Use Google Play Console to monitor:
   - Installs and uninstalls
   - Ratings and reviews
   - Crashes and ANRs (Application Not Responding)
   - User acquisition and retention

### Respond to User Feedback

1. Respond to user reviews promptly
2. Address issues and bugs quickly
3. Update the app regularly with improvements

### Plan Updates

1. Collect user feedback for future updates
2. Prioritize new features based on user demand
3. Test thoroughly before releasing updates

## Troubleshooting Common Issues

### Rejection Issues

If your app is rejected, Google will provide reasons. Common issues include:

1. **Metadata Issues**: Inconsistencies between app description and functionality
   - Solution: Ensure your description accurately reflects your app's features

2. **Policy Violations**: Not complying with Google Play policies
   - Solution: Carefully review the rejection reason and make necessary changes

3. **Technical Issues**: Crashes or performance problems
   - Solution: Test thoroughly on multiple devices before resubmitting

4. **Content Issues**: Inappropriate content or copyright violations
   - Solution: Remove or replace problematic content

### Resubmission

1. Address all issues mentioned in the rejection
2. Create a new release with fixes
3. Submit for review again
