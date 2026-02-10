# Web Development Project 2 - *Flashcards_Part_1*

Submitted by: **Syeda Haque**

## 🌿 The Ultimate Plant Parent: Trivia Challenge

**The Ultimate Plant Parent** is an interactive flashcard web application built with **React**. Designed to test your botanical and general knowledge, this app provides a sleek, modern interface for studying trivia. Users can navigate a deck of cards, flip them to reveal answers, and see visual hints for challenging questions.

## ✨ Features

* **Interactive Flashcards:** Toggle between question and answer views with a smooth click-to-flip interaction.
* **Dual Navigation:** Includes both "Forward" and "Backward" controls to move through the deck sequentially, preventing the frustration of repetitive random loops.
* **Dynamic Difficulty Themes:** Cards automatically change their background fill colors (Pastel Green, Yellow, or Red) based on the difficulty level (Easy, Medium, Hard).
* **Visual Hints:** Support for embedded images within the cards to provide context or visual trivia.
* **Glassmorphism UI:** A sophisticated "frosted glass" header that uplifts the text and blurs the botanical background for maximum readability.
* **Responsive Design:** A fully centered, flexbox-based layout that looks great on any screen size.

## 🛠️ Tech Stack

* **Frontend:** React (Hooks: `useState`)
* **Styling:** CSS3 (Glassmorphism, Backdrop-filter, Flexbox)
* **Build Tool:** Vite

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:


- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards contain images in addition to or in place of text
  - [x] Some or all cards have images in place of or in addition to text
- [x] Cards have different visual styles such as color based on their category
  - Example categories you can use:
    - Difficulty: Easy/medium/hard
    - Subject: Biology/Chemistry/Physics/Earth science

The following **additional** features are implemented:

* [x] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />


GIF created with LICEcap



## 🧠 Challenges Encountered

* **Navigation Logic:** Transitioned from purely random selection to sequential navigation to prevent card repetition and make the "Backward" button functional.
* **UI Contrast:** Implemented **Glassmorphism** (`backdrop-filter`) to solve readability issues where header text blended into the detailed botanical background.
* **Dynamic Styling:** Developed a system to dynamically apply pastel background fills based on card difficulty, ensuring a clean look compared to standard borders.
* **Responsive Layout:** Managed CSS Flexbox properties to keep the background plants pinned to the bottom of the viewport while keeping the trivia content perfectly centered.

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
