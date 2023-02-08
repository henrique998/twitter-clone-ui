import { PaperPlaneRight } from 'phosphor-react'
import { FormEvent, KeyboardEvent, useState } from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Separator } from '../../components/Separator'
import { Tweet } from '../../components/Tweet'
import { Answer, answersData } from './data'
import { AnswerForm, StatusContainer } from './styles'

export function Status() {
  const [answers, setAnswers] = useState<Answer[]>(answersData)
  const [newAnswer, setnewAnswer] = useState('')

  function createNewAnswer(e: FormEvent) {
    e.preventDefault()

    const answer: Answer = {
      id: Math.random() * 10,
      content: newAnswer,
    }

    setAnswers([answer, ...answers])

    setnewAnswer('')
  }

  function handleHotKeySubmit(e: KeyboardEvent) {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      const answer: Answer = {
        id: Math.random() * 10,
        content: newAnswer,
      }

      setAnswers([answer, ...answers])

      setnewAnswer('')
    }
  }

  return (
    <StatusContainer>
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nobis rerum in, ipsa non deleniti ea adipisci? Ullam quis cum, quae rem aliquam, beatae optio quam iure nisi maiores consequuntur." />

      <AnswerForm onSubmit={createNewAnswer}>
        <label htmlFor="tweet">
          <img
            src="https://github.com/henrique998.png"
            alt="Henrique Monteiro"
          />

          <textarea
            id="tweet"
            placeholder="What's happening?"
            value={newAnswer}
            onChange={(e) => setnewAnswer(e.target.value)}
            onKeyDown={handleHotKeySubmit}
          />
        </label>

        <Button type="submit" variant="small">
          <PaperPlaneRight />
          <span>Answer</span>
        </Button>
      </AnswerForm>

      <Separator />

      {answers.map((answer) => (
        <Tweet key={answer.id} content={answer.content} />
      ))}
    </StatusContainer>
  )
}
