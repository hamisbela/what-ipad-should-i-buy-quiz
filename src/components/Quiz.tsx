import React, { useState } from 'react';
import { ArrowRight, DollarSign, Tablet, Pen, Brush } from 'lucide-react';
import { recommendiPad, budgetRanges } from '../data/ipadData';

interface QuizStep {
  question: string;
  type: 'single' | 'multiple';
  options: { value: string; label: string; icon?: React.ReactNode }[];
}

const steps: QuizStep[] = [
  {
    question: "What's your budget range?",
    type: 'single',
    options: [
      { value: 'budget', label: 'Budget-Friendly (Under $500)', icon: <DollarSign size={24} /> },
      { value: 'midRange', label: 'Mid-Range ($501-$800)', icon: <DollarSign size={24} /> },
      { value: 'premium', label: 'Premium ($801-$1,200)', icon: <DollarSign size={24} /> },
      { value: 'luxury', label: 'Luxury ($1,200+)', icon: <DollarSign size={24} /> }
    ]
  },
  {
    question: 'What will you primarily use the iPad for?',
    type: 'multiple',
    options: [
      { value: 'students', label: 'School/Studies', icon: <Tablet size={24} /> },
      { value: 'artists', label: 'Digital Art', icon: <Pen size={24} /> },
      { value: 'creators', label: 'Content Creation', icon: <Brush size={24} /> },
      { value: 'professional', label: 'Professional Work', icon: <Tablet size={24} /> }
    ]
  },
  {
    question: 'What features are most important to you?',
    type: 'multiple',
    options: [
      { value: 'portable', label: 'Portability', icon: <Tablet size={24} /> },
      { value: 'power-users', label: 'Performance', icon: <Tablet size={24} /> },
      { value: 'notes', label: 'Note-Taking', icon: <Pen size={24} /> },
      { value: 'everyday', label: 'Entertainment', icon: <Tablet size={24} /> }
    ]
  }
];

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    budget: '',
    usage: [] as string[],
    preferences: [] as string[]
  });
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers };
    if (currentStep === 0) {
      newAnswers.budget = value;
    } else if (currentStep === 1) {
      if (!newAnswers.usage.includes(value)) {
        newAnswers.usage = [...newAnswers.usage, value];
      } else {
        newAnswers.usage = newAnswers.usage.filter(v => v !== value);
      }
    } else if (currentStep === 2) {
      if (!newAnswers.preferences.includes(value)) {
        newAnswers.preferences = [...newAnswers.preferences, value];
      } else {
        newAnswers.preferences = newAnswers.preferences.filter(v => v !== value);
      }
    }
    
    setAnswers(newAnswers);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const recommendations = showResults ? 
    recommendiPad(
      answers.budget as keyof typeof budgetRanges,
      answers.usage,
      answers.preferences
    ) : [];

  if (showResults) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Your Perfect iPad Matches</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {recommendations.map(ipad => (
            <div key={ipad.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
              <img src={ipad.imageUrl} alt={ipad.model} className="w-full h-48 object-cover" />
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2">{ipad.model}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>✓ {ipad.chip} Chip</p>
                  <p>✓ {ipad.display}</p>
                  <p>✓ {ipad.storage} Storage</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {ipad.bestFor.map(feature => (
                    <span key={feature} className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-gray-600">{ipad.description}</p>
              </div>
              <div className="p-6 pt-0">
                <a
                  href={ipad.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg text-center transition-all transform hover:scale-105 shadow-lg"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            setShowResults(false);
            setCurrentStep(0);
            setAnswers({ budget: '', usage: [], preferences: [] });
          }}
          className="mt-8 mx-auto block px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
        >
          Start Over
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex justify-between mb-4">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-2 flex-1 mx-1 rounded-full ${
                index <= currentStep ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-gray-600 text-center">
          Step {currentStep + 1} of {steps.length}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">{steps[currentStep].question}</h2>

        <div className="grid grid-cols-2 gap-4">
          {steps[currentStep].options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              className={`p-4 rounded-lg border-2 transition-all ${
                currentStep === 0
                  ? answers.budget === option.value
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                  : currentStep === 1
                  ? answers.usage.includes(option.value)
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                  : answers.preferences.includes(option.value)
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                {option.icon}
                <span className="font-medium text-center">{option.label}</span>
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={nextStep}
          disabled={
            (currentStep === 0 && !answers.budget) ||
            (currentStep === 1 && answers.usage.length === 0) ||
            (currentStep === 2 && answers.preferences.length === 0)
          }
          className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {currentStep === steps.length - 1 ? 'See Recommendations' : 'Next'}
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}