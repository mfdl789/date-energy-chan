# Energy-chan Game Summary and Structure

## Overview

Energy-chan is a strategic, stage-based game where players make impactful policy decisions to influence key metrics such as economy, energy, and social wellbeing. Players navigate through multiple stages, each comprising distinct phases, manage credits, play cards, and respond to random events to optimize outcomes.

## Core Gameplay Loop

- **Stage-Based Gameplay:**
  - The game is divided into **4 stages**.
  - Each stage consists of **3 phases**:
    1. **Card Drawing Phase:**  
       - Players draw 5 normal cards and 1 bonus card.
       - Up to 2 random events are triggered.
    2. **Playing Phase:**  
       - Players use credits to play cards, making policy decisions.
       - Played cards are recorded for later resolution.
    3. **Dashboard Phase:**  
       - The effects of cards, scenarios, and random events are applied.
       - Metrics are updated and results visualized.
       - Unused credits are halved (rounded down) and carried over.

- **Credits and Cards:**
  - Players manage **credits** which are required to play cards.
  - Cards come in two types:
    - **Policy Cards:** Affect metrics based on success/failure outcomes (using a split chance mechanic).
    - **Bonus Cards:** Provide utility effects (e.g., extra credits, additional card draws).

- **Scenarios and Random Events:**
  - **Scenarios:**  
    - Each game starts with a randomly assigned scenario.
    - Scenarios provide fixed modifiers (e.g., GDP adjustments) and thematic flavor.
  - **Random Events:**  
    - Occur at the beginning of each stage.
    - Affect metrics such as energy mix and social wellbeing with unpredictable outcomes.

## Detailed Mechanics

### Metrics

- **Economy:**  
  - GDP per capita, employment rate, debt-to-GDP ratio, wealth inequality.
- **Energy:**  
  - Energy mix (renewables vs. fossil fuels), electricity generation, per capita energy consumption.
- **Social Wellbeing:**  
  - Composite measure of public satisfaction and healthcare.

### Cards

- **Policy Cards:**  
  - Have a cost (in credits), a success chance (using a random D100 resolution), and specific metric effects based on outcomes.
- **Bonus Cards:**  
  - Offer utility benefits such as extra credits or cost reductions, with a fixed 50/50 success/failure chance.

### Phases

- **Card Drawing Phase:**  
  - Setup phase where players receive their hand and random events are revealed.
- **Playing Phase:**  
  - Active phase where players spend credits to play cards.
- **Dashboard Phase:**  
  - Resolution phase where card effects, scenario modifiers, and random events are applied; metrics are updated; credits are managed.

### Random Events

- Random events are drawn from a predefined deck.
- Examples include:
  - **Natural Disaster:** Reduces renewable energy and public satisfaction.
  - **Green Innovation:** Boosts renewable energy adoption.
  - **Trade Deal:** Increases fossil fuel supply.

### Dashboard

- Displays updated metrics and card outcomes.
- Summarizes the effects of all player actions and random events for the stage.

## Game Structure

### State and Setup

- **Initial State:**  
  - Setup should include:
    - Current stage (1–4) and phase indicator.
    - Player credits.
    - Decks for normal cards, bonus cards, and random events.
    - Player hand and array for played cards.
    - Metrics for economy, energy, and social wellbeing.
    - A randomly selected scenario with specific modifiers.

- **Example Setup Snippet:**
  ```js
  setup: () => ({
    stage: 1,
    phase: 'cardDrawing',
    credits: 10,
    deck: shuffle(initialDeck),
    hand: [],
    playedCards: [],
    randomEventsDeck: shuffle(initialRandomEvents),
    metrics: {
      economy: { gdpPerCapita: 1000, employmentRate: 100, debtToGDP: 0, wealthInequality: 0 },
      energy: { energyMix: { renewables: 50, fossil: 50 }, electricityGeneration: 1000, consumptionPerCapita: 100 },
      socialWellbeing: { publicSatisfaction: 50, healthcare: 50 },
    },
    scenario: selectRandomScenario(),
  }),
