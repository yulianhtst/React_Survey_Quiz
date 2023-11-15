import './App.css';

import { Routes, Route, useLocation } from 'react-router-dom'

import { QuizPage } from './components/Quiz';
import { Question } from './components/Question';
import { Result } from './components/Result';
import { FormProvider } from './context/FormContext';

type Question = {
  question: string;
  answers: Array<string>;
  path: string;
  multiple: boolean;
  value?: string
};

const questions: Array<Question> = [
  {
    question: "What's your hair type or texture?",
    answers: ["a. Straight", "b. Curly", "c. Wavy", "d. Fine"],
    path: '/q1',
    multiple: false,
    value: "type_"
  },
  {
    question: "How often do you wash your hair?",
    answers: ["a. Daily", "b. Every other day", "c. Twice a week", "d. Once a week", "e. Every two weeks"],
    path: '/q2',
    multiple: false,
  },
  {
    question: "What benefit do you look for in your hair products?",
    answers: ["a. Anti-breakage", "b. Hydrate", "c. Soothing dry scalp", "d. Repairs the appearance of damaged hair", "e. Volume", "f. Curl definition"],
    path: '/q3',
    multiple: true,
    value: "goals_"
  },
  {
    question: "Is there anything troubling you about your hair?",
    answers: ["a. Breakage", "b. Frizz", "c. Scalp dryness", "d. Damage", "e. Tangling"],
    path: '/q4',
    multiple: true,
  },
  {
    question: "What is your natural hair color(s) today?",
    answers: ["a. Black", "b. Brown", "c. Blonde", "d. Red/Orange", "e. Silver/Grey"],
    path: '/q5',
    multiple: false,
  },
]

const paths = questions.map((question) => question.path);



function App() {

  return (
    <>
      <FormProvider paths={paths}>
        <Routes>
          <Route path="/" element={<QuizPage />} />

          {questions.map(({ path, answers, question, multiple, value }, index) => (
            <Route key={index} path={path} element={(
              // <FormProvider index={index} paths={paths}>
              <Question
                answers={answers}
                question={question}
                multiple={multiple}
                index={index}
                value={value}
              />
              //  </FormProvider>
            )} />
          ))}

          <Route path="/result" element={<Result />} />
        </Routes>
      </FormProvider>
    </>
  );


}

export default App;
