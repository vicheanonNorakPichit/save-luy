# Digilab UI Branding Guideline

This document provides technical design specifications for replicating the Digilab UI/UX across other platforms. The design system follows a **Modern Neubrutalism** aesthetic combined with dynamic interactive elements.

## 1. Core Visual Identity

### Typography

- **Primary Font**: `Kantumruy Pro` (Google Font)
- **Fallback**: Sans-serif
- **Scale**:
  - H1: `2em (32px)` / Bold
  - H2: `1.5em (24px)` / Bold
  - P: `16px` / Line-height: `1.5`

### Color Palette (shadcn Black & White)

| Token            | Hex Code  | HSL         | Usage                           |
| :--------------- | :-------- | :---------- | :------------------------------ |
| **Background**   | `#FFFFFF` | `0 0% 100%` | Page backgrounds                |
| **Foreground**   | `#0A0A0A` | `0 0% 4%`   | Primary text, headings          |
| **Card**         | `#FFFFFF` | `0 0% 100%` | Card backgrounds                |
| **Card-fg**      | `#0A0A0A` | `0 0% 4%`   | Card text                       |
| **Primary**      | `#171717` | `0 0% 9%`   | Main actions, buttons           |
| **Primary-fg**   | `#FAFAFA` | `0 0% 98%`  | Text on primary                 |
| **Secondary**    | `#F5F5F5` | `0 0% 96%`  | Secondary actions, subtle fills |
| **Secondary-fg** | `#171717` | `0 0% 9%`   | Text on secondary               |
| **Muted**        | `#F5F5F5` | `0 0% 96%`  | Muted backgrounds               |
| **Muted-fg**     | `#737373` | `0 0% 45%`  | Muted/placeholder text          |
| **Accent**       | `#F5F5F5` | `0 0% 96%`  | Accent highlights               |
| **Accent-fg**    | `#171717` | `0 0% 9%`   | Text on accent                  |
| **Border**       | `#E5E5E5` | `0 0% 90%`  | Default borders                 |
| **Input**        | `#E5E5E5` | `0 0% 90%`  | Input borders                   |
| **Ring**         | `#0A0A0A` | `0 0% 4%`   | Focus rings                     |

## 2. Neubrutalism Design System

The core UI element in Digilab is the "Neubrutalism Card". It uses heavy borders and hard shadows instead of soft blurs.

### Card & Button Anatomy

| Element                 | Border Radius   | Border Width | Shadow Offset (Hard) | Hover Effect                             |
| :---------------------- | :-------------- | :----------- | :------------------- | :--------------------------------------- |
| **Hero/Selection Card** | `20px` / `16px` | `4px`        | `0px 8px 0px 0px`    | `translate-y-[-4px] shadow-[0_12px_0_0]` |
| **Standard Card**       | `12px`          | `2px`        | `0px 6px 0px 0px`    | `translate-y-[-2px] shadow-[0_8px_0_0]`  |
| **Primary Button**      | `12px`          | `2px`        | `0px 6px 0px 0px`    | `translate-y-[-2px]`                     |
| **Icon/Small Button**   | `12px`          | `2px`        | `0px 4px 0px 0px`    | `translate-y-[-2px]`                     |

### Background Patterns

Cards often feature textured backgrounds to add depth:

- **Grid Layout**: `/squared-background-3.png` or `/squared-background-right.png` (used in selection screens).
- **Subtle Texture**: `/card-bg.png` set to `opacity-30` (used in lab nodes).

### Color Mapping (State-based)

| Level                 | Background | Border/Shadow | Use Case                             |
| :-------------------- | :--------- | :------------ | :----------------------------------- |
| **Primary/Active**    | `#171717`  | `#0A0A0A`     | Selection active state, main buttons |
| **Secondary/Warning** | `#F5F5F5`  | `#D4D4D4`     | "Soon" badges, alternate actions     |
| **Locked/Disabled**   | `#FAFAFA`  | `#E5E5E5`     | Locked labs, coming soon tabs        |
| **Destructive**       | `#EF4444`  | `#DC2626`     | Errors, destructive actions          |
| **Destructive-fg**    | `#FAFAFA`  | —             | Text on destructive                  |

## 3. Component Patterns

### Buttons

- **Default (Primary)**: Background `#171717`, Text `#FAFAFA`.
- **Secondary**: Background `#F5F5F5`, Text `#171717`, Border `#E5E5E5`.
- **Outline**: Background `transparent`, Text `#171717`, Border `#E5E5E5`.
- **Ghost**: Background `transparent`, Text `#171717`, Hover `#F5F5F5`.
- **Destructive**: Background `#EF4444`, Text `#FAFAFA`.

### Badges

- **Shape**: Rounded-full or small rounded-sm (`4px`).
- **Styling**: Often used with `bg-black/30` semi-transparent overlays inside cards.

### Selection UI (Subjects/Chapters)

- **Tabs**: Active tabs use `bg-primary (#171717)`, `text-primary-foreground (#FAFAFA)`, and a `translate-y-[-2px]` lift with shadow.
- **Grids**: Responsive grids (1 col mobile, 3-4 col desktop).
- **Badges**: "Soon" or "Coming Soon" badges use `bg-secondary (#F5F5F5)` with `border` positioned `absolute -top-2 -right-2`.

### Iconography

- **3D Assets**: High-quality 3D renders located in `/public/3dicons/`. Key icons:
  - Chemistry: `lab.png`
  - Physics: `battery.png`
  - Math: `calculator.png` / `notebook.png`
- **Functional Icons**: `Lucide-React` (ChevronLeft, BookOpen, GraduationCap).

## 4. Layout & Navigation

- **Sidebars**: Fixed/Sticky `w-80` with `border-gray-200`. Mobile toggle via `SidebarToggleButton`.
- **Timeline**: Vertical learning journey with alternating `LabNode` positions (Left/Right).
- **Progress**:
  - **Circular**: SVG-based with `stroke-dasharray`.
  - **Bar**: ShadCN Progress with `h-4 bg-gray-200 border-2 border-gray-300`.

---

> [!TIP]
> When implementing cards, always ensure the shadow color matches the darker shade of the background color (`borderColor` in the table above).
