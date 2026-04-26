import { useState } from 'react';
import './App.css';

const questions = [
  {
    id: 1,
    question: "Яка команда використовується для створення нового проєкту React.js?",
    options: [
      "create-react-app app_quiz_reactjs",
      "npx create-react-app app_quiz_reactjs",
      "npm create-react-app app_quiz_reactjs"
    ],
    answer: "npx create-react-app app_quiz_reactjs"
  }
];

function App() {
  const [selectedOption, setSelectedOption] = useState('');
  const [currentStep, setCurrentStep] = useState(0);

  const handleConfirm = () => {
    if (!selectedOption) {
      alert("Будь ласка, виберіть варіант!");
      return;
    }
    alert(`Ви обрали: ${selectedOption}`);
  };

  const q = questions[currentStep];

  return (
    <div className="container">
      <div className="quiz-card">
        <h1>Запитання {q.id}</h1>
        <p className="question-text">{q.question}</p>
        
        <div className="options-list">
          {q.options.map((option, index) => (
            <label key={index} className="option-item">
              <input
                type="radio"
                name="quiz"
                value={option}
                checked={selectedOption === option}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              {option}
            </label>
          ))}
        </div>

        <button className="confirm-button" onClick={handleConfirm}>
          Підтвердити
        </button>
      </div>
    </div>
  );
}

export default App;