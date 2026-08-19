import { useState } from 'react'
import './App.css'

function App() {
  const [answer, setAnswer] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const submission = {
      name: formData.get('name'),
      question: 'How many times do you...?',
      answer: Number(formData.get('answer')),
      dateTime: new Date().toISOString(),
    }

    JSON.stringify(submission)
    setAnswer(submission.answer)
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required />

        <p>How many times do you...?</p>
        <input id="answer" name="answer" type="number" min="0" step="1" required />

        <button type="submit">Submit</button>
      </form>
      {answer !== '' && <p>{answer} times a week</p>}
    </main>
  )
}

export default App
