# Helsinki XR Center – Coding Task 2025

This task is intended to evaluate your frontend skills and understanding of interaction design, UI/UX, and code structure in a Three.js + React environment. 
You will enhance an existing Tarot card deck viewer and improve its functionality and feel. 

> **Note:** This task is designed to be completed in **3–5 hours**.  
> It should **not** take a full working day.  
> Please prioritize clarity and interactivity over polish or completeness.


Setup Instructions:
1. Clone the repository: 
	https://gitlab.com/hxrc_public/hxrc_codetask_2025 
2. Install dependencies and run the app locally:
	npm install
	npm run dev
3. You can preview the current application functionality at:  
	https://xrdev.edu.metropolia.fi/hxrc_codetask_2025 

Coding Tasks:
1. Create a better UI for the Tarot card application.
	• Use your preferred styling method (CSS, styled-components, Tailwind, etc).
	• Ensure responsive layout and a user-friendly experience on 
	desktop and mobile
2. Improve the shuffling logic.
	• Ensure that each deal gives a truly randomized result.
	• Avoid predictable orders after shuffling.

3. Add a hover effect for dealt cards only.
	• Implement the logic in: /src/animations/hovercard.js
	• Cards should animate forward when hovered, improving visibility.

4. Enhance the README file:
	• Explain how you would improve the overall user experience.
	• Propose ideas on how to gamify the Tarot app if given a 
	full week to develop.

5. Submit your task: 
	• Upload your code to a repository (GitHub, GitLab, etc).
	• Deploy the final app using a service like Vercel, Netlify, or GitHub Pages.
	• Share both the repository link and the live demo link. 

Questions? If you have any questions about the task, please contact:
Juho Puurunen – juho.puurunen@metropolia.fi



# Tarot Card App

## Improvements to User Experience

To enhance the overall user experience of the Tarot app, the following improvements can be made:

### 1. Streamlined Interface:
- Simplify the control layout and improve accessibility with larger buttons.  
- Make sure it responds well for both desktop and mobile users.  

### 2. Visual Design Improvements:
- Let users choose different background themes, like celestial or mystical environments.  
- Make card designs more attractive and visually engaging.  

### 3. User Feedback:
- Add ambient sound effects and background music to improve immersion.  
- Provide clear interpretations of cards when users hover or click.  
### 4. User Education:
- Offer tutorials on how to use the app.  
- Show card meanings when hovered over.
---

## Ideas for Gamifying the Tarot App

If given a full week to develop, I could introduce a **game-like experience** for users:

### 1. Tarot Challenges:
- **Daily Challenges** that users can complete for rewards.
- **Tarot Quests** with specific card spreads and themes.

### 2. Scoring and Progression:
- Introduce a **leveling system** where users earn points for reading.  
- Award **badges** for achievements, such as completing a specific number of readings.

### 3. Interactive Tarot Games:
- **Tarot Card Guessing Game** where users guess the card that will be drawn.  
- **Fortune Teller Battle** where users compete with friends for the most accurate readings.

### 4. Customization:
- Let users create their own custom decks.  
- Allow users to adjust layouts for a more personalized experience.

### 5. Social & Sharing:
- Let users **share their readings** on social media.

### 6. In-App Store & Currency:
- Implement **Tarot Coins** that users earn and spend to unlock premium features.  
- Offer **in-app purchases** for exclusive decks and readings.
