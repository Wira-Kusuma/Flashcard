# Flashcard

A simple web-based Flashcard application to help you study using question and answer cards. This app allows users to create, edit, save, and review flashcards interactively.

## Features

- **Edit Flashcards**
  - Edit up to 10 sets of questions and answers.
  - Changes are instantly reflected on the flashcards after saving.

- **Flashcard Navigation**
  - Navigate between flashcards using **Back** and **Next** buttons.
  - Circular navigation (after the last card, returns to the first, and vice versa).

- **Data Persistence (localStorage)**
  - All questions and answers are saved in the browser's `localStorage`.
  - Your flashcards are preserved even after refreshing or closing the browser.

- **Reset/Clear Data**
  - Easily clear all questions and answers at once.

- **Mode Switching**
  - Switch between edit mode and flashcard mode smoothly without reloading the page.

- **Responsive Display**
  - Cards are displayed using CSS Flex for a smooth and responsive layout.
  - Edit and flashcard modes are dynamically shown or hidden.

## How to Use

1. Click **Edit** to modify questions and answers.
2. Save your changes to update the flashcards.
3. Navigate through the flashcards using **Back** and **Next** buttons.
4. Data is automatically saved in your browser.
5. Use the **Clear** feature to reset all fields if needed.

## Code Structure

- **saveEditCard()**  
  Saves the input values to arrays and to localStorage, and updates the displayed flashcards.

- **clearEditCard()**  
  Clears all input fields for questions and answers.

- **Navigation (Back/Next)**  
  Manages the display and order of active flashcards using arrays and an index.

- **localStorage**  
  Handles saving and loading of questions and answers for persistence.

## Technology

- HTML, CSS, JavaScript (Vanilla)
- Data persistence via browser `localStorage`

## Notes

- Supports up to 10 flashcards per session.
- Data is stored only in your local browser.

---

Contributor: [@Wira-Kusuma](https://github.com/Wira-Kusuma)