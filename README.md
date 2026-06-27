# Gaucho Glow Site

Gaucho Glow Site is a premium, conversion-centric web platform engineered specifically for the hospitality and high-end restaurant industry. As showcased in the production preview (`chrome-capture-2026-06-27 (3).jpg`), the application balances highly polished visual aesthetics with strict performance optimizations, fluid responsive layouts, and a robust client-side reservation engine.

### 🏗️ Key Architectural Highlights
* **Robust Form & Booking Validation:** Orchestrates complex customer booking flows ("Reservá Tu Mesa") using `react-hook-form` paired with `zod` for real-time, schema-driven runtime validation.
* **Fluid Asset & Layout Delivery:** Tailored for fast Core Web Vitals and SEO performance utilizing Vite's optimized bundling, custom Tailwind CSS utility tokens, and smooth hardware-accelerated transitions via `embla-carousel-react`.
* **State-Driven Interactive UI Elements:** Leverages headless UI primitives from Radix UI (such as Accordions for the FAQ section and accessible Dialogs/Drawers) to ensure full screen-reader compliance and seamless interactive states.
* **Data & Date Orchestration:** Integrates `react-day-picker` and `date-fns` to manage complex localization, availability scheduling, and date parsing directly within the reservation subsystem.

---

### 🚀 Key Features

* **High-Conversion Showcase Modules:** Fluid item carousels and dynamic testimonial sections tailored to maximize user engagement and highlight signature culinary dishes.
* **End-to-End Reservation Engine:** Fully interactive table booking form featuring real-time input validation, responsive step flows, and accessible date selection.
* **Mobile-First Interactive Components:** Seamless mobile experience utilizing `vaul` to present sleek, native-feeling bottom sheets for menus and booking drawers on small viewports.
* **Optimized Accordion Systems:** Clean and scannable Frequently Asked Questions (FAQ) module built to handle multi-panel toggles without performance degradation.

---

### 🛠️ Tech Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Core Engine** | React 18 & TypeScript | Strict type safety across UI components and booking payloads. |
| **Build Pipeline** | Vite | Next-generation tooling for instant HMR and lightweight builds. |
| **Scheduling Core** | React Day Picker & Date-fns | Modular date arithmetic and scheduling UI components. |
| **Form Management** | React Hook Form & Zod | Asynchronous validation mechanics for secure client data capture. |
| **Layout & Carousels**| Embla Carousel React | Extensible, touch-responsive carousel components. |
| **UI Architecture** | Radix UI Primitives & Shadcn | Primitive design tokens optimized for styling flexibility. |
| **Styling Suite** | Tailwind CSS & Lucide Icons | Utility-first styling workflow combined with crisp vector iconography. |