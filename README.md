# 📱 ABPApp

ABPApp is a mobile news feed application built with React Native. It features a modular architecture, secure storage, Redux Toolkit for state management, and Axios for API communication.

---

## 📦 Tech Stack

- **React Native**: `0.80.1`
- **React**: `19.1.0`
- **Redux Toolkit** & **React Redux**
- **React Navigation** (Native Stack)
- **Axios** for API requests
- **Secure Storage** via `rn-secure-storage`
- **Environment Config** using `react-native-dotenv`

---

## 🗂️ Project Structure

```
src/
├── API/config         # Axios config and endpoint definitions
├── assets/common      # Static images (e.g., logo, banners)
├── components         # Reusable UI components
├── redux              # Redux store and slices
├── screens            # App screens (e.g., NewsFeed)
├── utils              # Utilities (constants, metrics, storage)
└── Nav.jsx            # App navigation setup
```

---

## 🔧 Environment Variables

Add a `.env` file in the root:

> Use `react-native-dotenv` to securely load env vars.

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run on Android

```bash
npm run android
```

### 3. Run on iOS

```bash
npm run ios
```

### 4. Start Metro Bundler

```bash
npm start
```

---

## 🧪 Testing

Run unit tests with:

```bash
npm test
```

Test runner: **Jest**  
Renderer: **react-test-renderer**

---

## 🧹 Linting

```bash
npm run lint
```

ESLint config: `@react-native/eslint-config`  
Code formatter: **Prettier**

---

## 📱 Key Features

- News feed via Redux state (`feedSlice`)
- Centralized API config (`API.js`, `urls.js`)
- Theming and safe area handling
- Reusable UI components (e.g., `NewsCard`, `Snack`)
- Responsive design utilities (`Metrices.ts`)
- Secure token handling (`SecureSturageUtility.js`)

---

## 📸 Assets

Located in `src/assets/common/`:

- `banner.png`
- `logo.png`

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙋‍♂️ Author

**Partha Sarathi Mondal**

For issues or contributions, feel free to open an issue or pull request.
