import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("savedFeedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("savedFeedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = () => feedback.good + feedback.neutral + feedback.bad;
  const total = totalFeedback();

  const positivePercentage =
    total > 0 ? Math.round((feedback.good / total) * 100) : 0;

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        total={total}
        positive={positivePercentage}
      />
    </>
  );
}

export default App;
