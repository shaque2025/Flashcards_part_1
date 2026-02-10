import './App.css';
import { useState } from 'react';

const App = () => {
  const flashcards = [
    { question: "Start!", answer: "Press the arrow to begin", difficulty: "start" },
    { 
      question: "What is the capital of France?", 
      answer: "Paris", 
      difficulty: "easy", 
      image: "https://choosewhere.com/public/images/fQpK5xb/945_630/shutterstock_710380270.webp" 
    },
    { question: "Which planet is known as the Red Planet?", answer: "Mars", difficulty: "easy" },
    { question: "What is the largest ocean on Earth?", answer: "Pacific Ocean", difficulty: "medium" },
    { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci", difficulty: "medium" },
    { question: "What is the hardest natural substance?", answer: "Diamond", difficulty: "hard" },
    { question: "How many continents are there?", answer: "7", difficulty: "easy" },
    { question: "What is the symbol for Gold?", answer: "Au", difficulty: "hard" },
    { question: "What is the capital of Japan?", answer: "Tokyo", difficulty: "easy" },
    { question: "Which gas do plants absorb?", answer: "Carbon Dioxide", difficulty: "medium" },
  ];

  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Logic to go forward (Randomized per project requirements)
  const handleNextCard = () => {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentIndex(randomIndex);
    setIsFlipped(false); 
  };

  // Logic to go backward (Sequential for better UX)
  const handlePrevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(flashcards.length - 1); // Loop to end
    }
    setIsFlipped(false);
  };

  return (
    <div className="App">
      {/* Centered Header Section */}
      <div className="header">
        <h1>The Ultimate Trivia Challenge!</h1>
        <h3>Test your general knowledge with these flashcards.</h3>
        <h5>Number of cards: {flashcards.length}</h5>
      </div>

      <div className="card-container">
        <div 
          className={`card ${isFlipped ? 'back' : 'front'} ${flashcards[currentIndex].difficulty}`} 
          onClick={handleFlip}
        >
          {isFlipped ? (
            <p>{flashcards[currentIndex].answer}</p>
          ) : (
            <div className="card-content">
              <p>{flashcards[currentIndex].question}</p>
              {flashcards[currentIndex].image && (
                <img 
                  src={flashcards[currentIndex].image} 
                  alt="hint" 
                  className="card-image" 
                />
              )}
            </div>
          )}
        </div>
      </div>

      {/* Navigation with both Back and Forward buttons */}
      <div className="navigation">
        <button className="nav-button" onClick={handlePrevCard}>⭠</button>
        <button className="nav-button" onClick={handleNextCard}>⭢</button>
      </div>
    </div>
  );
}

export default App;