# React + TypeScript — Frontend Practice Playground

A personal playground for practicing **React, TypeScript, and modern frontend development**.

This repository follows along with Maximilian Schwarzmüller's React + TypeScript course/tutorial. It is primarily a learning and experimentation space rather than a production application.

## 🎯 Goals

The purpose of this repository is to:

- Practice React fundamentals and patterns
- Learn and apply TypeScript with React
- Experiment with components, props, state, events, forms, and hooks
- Practice managing and structuring frontend applications
- Build small features and exercises while learning
- Experiment with different approaches and refactor as I learn
- Keep a history of my progress and experiments

## 🛠️ Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **ESLint**
- **CSS**

## 📚 What I'm Practicing

This repository will evolve as I work through the course. Topics may include:

- React components
- JSX / TSX
- Props
- State
- Event handling
- Forms and user input
- TypeScript types and interfaces
- Generic types
- React Hooks
- `useState`
- `useEffect`
- Custom Hooks
- Context API
- Refs
- Component composition
- Conditional rendering
- Lists and keys
- API requests
- Error handling
- Forms and validation
- Advanced TypeScript patterns
- React performance
- Project structure and best practices

## 🚀 Getting Started

Clone the repository:

```
git clone <your-repository-url>
cd <your-repository-name>
```

Install dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

Then open the local URL shown by Vite in your browser.

## 🌱 Branching & Practice Workflow

The `master` branch contains the main learning progress.

For individual exercises or experiments, I use separate branches:

```
master
  │
  ├── feature/form-add-delete
  ├── feature/react-hooks
  ├── feature/forms
  └── feature/other-experiment
```

Changes are merged into `master` through Pull Requests so I can practice a proper Git/GitHub workflow alongside frontend development.

## 🧪 This Is a Playground

Not everything in this repository is intended to be production-ready.

Some code may be:

- Experimental
- Refactored multiple times
- Intentionally simple for learning purposes
- Based on course exercises
- Used to test an idea or React/TypeScript feature

The goal is **learning and experimentation**, not perfection.

## 📈 Progress

I'll continue adding exercises, experiments, and projects as I progress through the course.

> Learn → Build → Break → Debug → Refactor → Repeat.

---

**React + TypeScript + Vite**

Built as a personal frontend learning playground.

I particularly like the **"This Is a Playground"** section for your use case. It gives you permission to have ugly/experimental code without making the repo look abandoned or poorly maintained.

One small Git recommendation too: since you're using `master` as your protected default branch, I'd keep your feature branches named consistently:

```
git switch -c feature/form-add-delete
```

rather than just:

```
git switch -c form-add-delete
```

Then your GitHub history starts looking really clean:

```
master
│
├── feature/forms
├── feature/react-hooks
├── feature/typescript-generics
├── feature/context
└── feature/api-practice
```
