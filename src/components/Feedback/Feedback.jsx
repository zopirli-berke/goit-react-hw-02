export default function Feedback({ good, neutral, bad, total, positive }) {
  return (
    <>
      {total > 0 ? (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive: {positive}%</p>
        </div>
      ) : (
        <p>No feedback yet</p>
      )}
    </>
  );
}
