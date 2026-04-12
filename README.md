# Good Morning — From Pixel to Code

> A minimalist **Daily Drop** concept, designed end-to-end in Figma, built in React Native.

---

## The Concept

**Good Morning** is a *curated daily shopping* app: every morning, an exclusive selection of products takes the spotlight — like a drop. No infinite catalog, no noise — only what deserves your attention today.

The concept lives in the tension between scarcity and desire: three brands, a handful of products, a window of time.

---

## From Figma to React Native Component

This project was born from a rigorous design-first process.

I designed all **7 screens** in Figma following **Jonathan Da Costa**'s methodology (Domestika), before writing a single line of code. This forced me to make design decisions upfront — typography, spacing, visual hierarchy, micro-interactions — rather than improvising them in the code.

The Figma → React Native translation was then a high-fidelity integration exercise:

- **Spacing tokens** — every margin and padding maps to a token in `Theme.ts` (`Theme.spacing.sm/md/lg`). No magic numbers.
- **Type scale** — a `t1/t2/t3/t4/bodyLg/bodySm` scale defined once, reused everywhere.
- **Atomic components** — `CollectionCard` and `ProductCard` take flat, explicit props, designed to be instantiated like Figma components.
- **Premium interactions** — press states with `opacity` + `scale`, floating buttons dynamically positioned above the navigation pill using `useSafeAreaInsets`.

---

## Screens

| # | Screen | Description |
|---|--------|-------------|
| 01 | **Loading** | Image grid rotated −30°, 800ms fade-in |
| 02 | **Home** | "Right Now / Coming Soon" tabs, collection list |
| 03 | **Collection Detail** | Full-width image header, 2-column product grid |
| 04 | **Product Detail** | Price, category, description, related items, sticky cart button |
| 05 | **Cart** | Dynamic item list, quantity controls, summary, Checkout / Apple Pay |
| 06 | **Payment** | Simulated Apple Pay sheet, Face ID → Confirmation |
| 07 | **Confirmation** | Coral gradient, Sun icon, automatic cart clear |
| 08 | **Help / Profile** | Navigation menus with emoji icons and chevrons |

---

## Technical Architecture

```
RootNavigator
├── LoadingScreen
└── MainTabs  (custom floating pill)
    ├── HomeTab   → HomeStack
    │   ├── HomeScreen
    │   ├── CollectionDetailScreen
    │   └── ProductDetailScreen
    ├── CartTab   → CartStack
    │   ├── CartScreen
    │   ├── PaymentScreen
    │   └── ConfirmationScreen
    └── Profile   → ProfileStack
        ├── ProfileScreen
        └── HelpScreen
```

**State Management — Context API**

`CartContext` exposes a clean contract: `addToCart`, `removeFromCart`, `updateQuantity`, `clearCart`, `totalPrice`. The `useCart()` hook lives in `src/hooks/useCart.ts` — consumable from any screen without coupling to the provider.

```
src/
├── components/ui/     # ProductCard, CollectionCard
├── constants/         # Theme.ts — colors, typography, spacing
├── context/           # CartContext.tsx
├── hooks/             # useCart.ts
├── navigation/        # RootNavigator, HomeStack, CartStack, ProfileStack
└── screens/           # One file per screen
```

**Tech Stack**

| Tool | Purpose |
|------|---------|
| React Native + Expo SDK 54 | Mobile runtime |
| TypeScript | Strict prop and route typing |
| `@react-navigation/native-stack` | Stack navigation with native transitions |
| `@react-navigation/bottom-tabs` | Tab bar (100% custom render) |
| `expo-linear-gradient` | Coral gradient on ConfirmationScreen |
| `lucide-react-native` | Consistent icons (no @expo/vector-icons) |
| `react-native-safe-area-context` | Dynamic positioning of floating elements |

---

## Challenges

**1. The floating navigation pill**
Keeping the tab bar visible on nested screens (CollectionDetail, ProductDetail, Confirmation) required nesting each stack *inside* the tab navigator — not the root. The "Add to Cart" button is dynamically positioned: `bottom = insets.bottom + TAB_PILL_H + 12`, recalculated per screen.

**2. Minimalism as a technical constraint**
A clean design is harder to implement than a busy one — every misplaced pixel shows. I calibrated `shadowOpacity` values precisely (0.08 for soft ambient shadows, 0.15 for foreground elements), `letterSpacing` to the tenth of a point, and `borderRadius: 100` to guarantee perfect pills regardless of text length.

**3. The responsive 2-column grid**
```ts
const CARD_W = (W - H_PAD * 2 - GAP) / 2;
```
`ProductCard` uses `width: "100%"` — the parent `View` controls the width. The result: perfectly proportioned cards on any screen size, no media query needed.

---

## Running the App

### Prerequisites

- [Node.js 18+](https://nodejs.org/)
- [Expo Go](https://expo.dev/client) installed on your phone (iOS or Android)

### Setup

```bash
git clone https://github.com/your-username/good-morning-frontend.git
cd good-morning-frontend
npm install
npx expo start
```

A **QR code** appears in the terminal.

- **iOS** — scan it with the native camera app.
- **Android** — scan it from inside the Expo Go app.

The app loads in seconds. No Expo account required.

### Note on the Loading Screen

The 3-second startup timer is currently commented out for direct screen previewing during development. To re-enable it, uncomment lines 31–33 in `src/screens/LoadingScreen.tsx`.

---

## What This Project Says About Me

I'm a front-end developer actively transitioning toward **UI/UX design**. Good Morning is proof that these two practices don't compete — they sharpen each other.

Designing my own screens before building them taught me to question every visual decision with mobile runtime constraints in mind. And building what I designed taught me to honor my own specs the way I would honor a senior designer's.

That dual perspective — **a designer who codes, a developer who thinks in interfaces** — is what I bring to a project.

---

*Personal project — 2026. Screens designed in Figma (Jonathan Da Costa method, Domestika). All data is mocked.*
