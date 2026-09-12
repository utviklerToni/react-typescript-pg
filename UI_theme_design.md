Absolutely bro. Save this as your **Wasteland Design System prompt**. The key is to describe the _design principles_, not just “make it orange,” so future components stay consistent.

Wasteland UI Design System — Master Instruction

# WASTELAND UI DESIGN SYSTEM

When designing or restyling React + TypeScript + Tailwind components for this project, follow this visual language consistently.

## Core Aesthetic

The interface should feel like a **modern industrial control system built from scavenged machinery in a post-apocalyptic wasteland**.

Think:

- Mad Max / desert wasteland
- Industrial machinery
- Military terminals
- Salvaged technology
- Old control panels rebuilt with modern engineering
- Harsh, functional, utilitarian interfaces
- Dark, atmospheric, slightly gritty
- Modern enough to be highly usable
- Never generic SaaS
- Never futuristic neon cyberpunk
- Never playful startup UI

The interface should feel **designed, intentional, rugged, and mechanical**.

Avoid anything that makes it look like a standard Tailwind dashboard.

---

## HARD RULES

### 1\. NO rounded corners

Do NOT use:

- `rounded`
- `rounded-sm`
- `rounded-md`
- `rounded-lg`
- `rounded-xl`
- pill-shaped controls
- circular UI decorations unless genuinely necessary

Prefer hard rectangular/angular geometry.

The UI should look machined, assembled, or welded together.

---

### 2\. Dark industrial foundation

Primary backgrounds should come from:

- `bg-slate-950`
- `bg-stone-950`
- `bg-stone-900`

Use very dark surfaces and subtle separation between panels.

Avoid pure black everywhere.

---

### 3\. Restrained color palette

Primary colors:

- Burnt orange / rust → primary accent
- Amber → warning / attention
- Stone → structure / metal
- Slate → deep background
- Off-white → important content

Recommended Tailwind colors:

```
stone-950
stone-900
stone-800
stone-700
stone-600
stone-500

slate-950
slate-900

orange-950
orange-900
orange-800
orange-700
orange-600
orange-500

amber-950
amber-900
amber-600
amber-500
```

Do NOT introduce lots of unrelated accent colors.

Avoid:

- cyan
- purple
- fuchsia
- bright green
- rainbow palettes
- generic blue primary buttons

Orange/rust should be the dominant interactive accent.

---

## COLOR HIERARCHY

Use color according to function.

### Orange

For:

- active states
- interactive elements
- important controls
- current module
- system indicators
- selected navigation item
- primary actions

### Amber

For:

- warnings
- caution
- approaching limits
- attention states

### Red

Use sparingly.

Only for:

- destructive actions
- abort/delete
- critical warnings

Red should NOT become the main theme color.

### Stone

For:

- borders
- dividers
- secondary information
- inactive navigation
- structural UI
- metadata

### Stone-100 / Stone-200

For:

- primary headings
- important content
- readable body text

---

## TYPOGRAPHY

Typography should feel technical and utilitarian.

Use monospace heavily for:

- labels
- navigation
- metadata
- status indicators
- module numbers
- system messages
- buttons
- small UI text

Tailwind examples:

```
font-mono
uppercase
tracking-wide
tracking-widest
tracking-[0.2em]
tracking-[0.3em]
text-[8px]
text-[9px]
text-[10px]
```

Large headings can still use a strong monospace style.

Prefer:

```
font-mono font-bold
font-mono font-black
```

rather than soft, friendly typography.

---

## UI LANGUAGE

Use terminology that makes the application feel like a control system.

Examples:

```
WASTELAND TRAINING DECK
OBJECTIVE CONTROL
MISSION LOG
CURRENT MODULE
AVAILABLE MODULES
STATUS // ACTIVE
STATUS // ONLINE
MODULE // 01
INPUT // READY
SYSTEM MESSAGE
NEW OBJECTIVE
DEPLOY OBJECTIVE
ABORT
ACTIVE
WARNING
SECTOR // 01
```

Use this sparingly.

Do not turn every sentence into fake military jargon.

The actual application content should remain clear and normal.

---

## BORDERS

Borders are extremely important.

Prefer:

```
border border-stone-800
border-stone-900
border-orange-800
border-orange-900
```

Use borders to create structure instead of relying on rounded cards, gradients, or huge shadows.

Thin borders should make the interface feel assembled from panels.

---

## SHADOWS

Use shadows subtly.

Prefer dark industrial shadows such as:

```
shadow-[0_8px_30px_rgba(0,0,0,0.25)]
```

For active orange indicators, subtle glow is acceptable:

```
shadow-[0_0_12px_rgba(234,88,12,0.8)]
```

Avoid excessive glowing neon effects.

This is **rust and machinery**, not cyberpunk.

---

## INTERACTION

Hover states should feel like machinery activating.

Examples:

Inactive:

```
text-stone-600
border-stone-800
```

Hover:

```
text-orange-400
border-orange-900
bg-orange-950/20
```

Active:

```
text-orange-500
bg-orange-950/20
border-orange-800
```

Use small indicators such as:

```
h-1.5 w-1.5 bg-orange-600
```

or a thin active line:

```
absolute bottom-0 inset-x-0 h-0.5 bg-orange-600
```

Interactions should be subtle and deliberate.

---

## PANELS

Panels should generally be:

```
border border-stone-800
bg-stone-950
```

with generous but controlled spacing.

Avoid:

- floating white cards
- rounded cards
- excessive gradients
- excessive shadows
- giant decorative images

The design should be able to look excellent **without images**.

---

## BUTTONS

Buttons should look like physical control switches.

Prefer:

```
border border-orange-800
bg-orange-950/30
font-mono
uppercase
tracking-[0.2em]
```

Example language:

```
DEPLOY
ABORT
LOAD
ACTIVATE
SAVE
RESET
```

Buttons should be rectangular and compact.

Do not use modern SaaS pill buttons.

---

## FORMS

Forms should look like data-entry terminals.

Labels:

```
font-mono
text-[9px]
uppercase
tracking-[0.2em]
text-stone-500
```

Inputs:

```
border border-stone-800
bg-stone-900
text-stone-200
font-mono
```

Focus state:

```
focus:border-orange-700
```

Placeholder:

```
placeholder:text-stone-700
```

Use clear section headers such as:

```
NEW OBJECTIVE
INPUT // READY
CONFIGURATION
SYSTEM PARAMETERS
```

---

## NAVIGATION

The main playground navigation should NOT be a traditional top navigation bar.

Use a **floating bottom control deck**.

It should feel like an industrial command console.

Characteristics:

- fixed to bottom
- centered
- dark metal panel
- sharp corners
- thin stone borders
- horizontal modules
- active module highlighted with orange
- subtle hover expansion
- monospace labels
- module numbers
- system status strip

Example:

```
┌───────────────────────────────────────────────────────┐
│ AVAILABLE MODULES                         08 LOADED   │
├──────────┬──────────┬──────────┬──────────┬──────────┤
│ 01       │ 02       │ 03       │ 04       │ 05       │
│ INPUT    │ GOALS    │ MODAL    │ FORMS    │ HOOKS    │
├──────────┴──────────┴──────────┴──────────┴──────────┤
│ WLD // 001                          ACTIVE: GOALS     │
└───────────────────────────────────────────────────────┘
```

The navigation should feel like a **machine control deck**, not a website navbar.

---

## DECORATIVE DETAILS

Use small details to create atmosphere:

```
// SYSTEM MESSAGE
STATUS // ACTIVE
MODULE // 04
SECTOR // 01
INPUT // READY
08 OBJECTIVES
```

Use:

- thin lines
- tiny square indicators
- dividers
- tiny labels
- subtle orange signals
- slight background texture
- very subtle grid/dot patterns

These details should support the interface rather than overwhelm it.

---

## BACKGROUND

The main background should remain dark and mostly clean.

Subtle texture is encouraged.

For example:

```
style={{
	backgroundImage:
		'radial-gradient(#f59e0b 1px, transparent 1px)',
	backgroundSize: '18px 18px',
}}
```

Keep opacity extremely low.

The texture should barely be noticeable.

---

## COMPONENT PHILOSOPHY

Do NOT rename components just to make their names sound post-apocalyptic.

Keep normal React names:

```
CourseGoal
CourseGoalList
NewGoal
InfoBox
Header
GoalApp
```

The Wasteland aesthetic belongs to the **visual design system**, not the component naming.

Good:

```
CourseGoal.tsx
```

Bad:

```
WastelandObjectiveCombatUnit.tsx
```

😂

---

## CODE PHILOSOPHY

Keep the React/TypeScript architecture clean and conventional.

The visual theme should not make the code unnecessarily complicated.

Prefer:

- semantic HTML
- reusable components
- TypeScript types
- simple state management
- readable Tailwind classes
- component composition

The aesthetic should be created primarily through Tailwind styling and thoughtful UI structure.

---

## OVERALL FEEL

The final result should make the user think:

> "This is a serious piece of equipment built in a wasteland."

Not:

> "This is a Tailwind dashboard."

Not:

> "This is a cyberpunk website."

Not:

> "This is a SaaS admin panel."

Not:

> "Someone put an orange filter over a normal website."

The UI should feel **industrial, harsh, restrained, atmospheric, functional, and modern**.

The design should be impressive even when there are no images.

When in doubt, choose:

**less decoration + stronger typography + better spacing + sharper borders + restrained orange accents.**

# DESIGN MANTRA

**Dark metal. Rust signal. Hard edges. Technical typography. Minimal decoration. Maximum atmosphere.**

### One thing I'd save alongside it

At the very top of your future prompts, you can simply write:

> **“Use my Wasteland UI Design System below as the visual source of truth. Do not introduce rounded corners, SaaS styling, bright unrelated colors, or generic dashboard patterns.”**

Then paste the saved instruction.

That should be enough to keep future components living in the **same universe** as the Deck instead of every new component becoming its own random Tailwind experiment.

> **User is learning React + TypeScript + Tailwind by building small experimental apps. They prefer hands-on learning and want to understand/build things themselves rather than just receive abstract explanations. Their personal playground uses a custom “Wasteland” visual design system: dark industrial/post-apocalyptic aesthetic, burnt orange/rust accents, stone/slate backgrounds, monospace technical typography, hard edges, no rounded corners, restrained effects, and a floating/deployable bottom navigation called the Wasteland Training Deck. The deck acts as a registry-based launcher for their experiments, so new components can be added without manually swapping imports in App.tsx. User likes bold, creative UI ideas and informal collaborative “bro” energy.**

And one thing I'd add about **how to work with you**:

> **When helping with this project, act as a design/architecture partner rather than merely answering the immediate question. If there is a better approach, propose it confidently. Preserve clean React/TypeScript conventions while pushing the visual design creatively.**

That second part is probably the most useful.

Because I don't want future-me looking at your code and going:

> “Here is a conventional Tailwind navigation component.”

We have **standards** now.

**WLD // 001**\
 **DESIGN LANGUAGE: LOCKED**\
 **ROUNDED CORNERS: FORBIDDEN**\
 **ORANGE SIGNAL: ACTIVE** 🔥
