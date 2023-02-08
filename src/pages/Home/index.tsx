import { FormEvent, KeyboardEvent, useState } from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Separator } from '../../components/Separator'
import { Tweet } from '../../components/Tweet'

import { tweetsData } from './data'

import { NewTweetForm } from './styles'

export function Home() {
  const [tweets, setTweets] = useState<string[]>(tweetsData)
  const [newTweet, setNewTweet] = useState('')

  function createNewTweet(e: FormEvent) {
    e.preventDefault()

    setTweets([newTweet, ...tweets])

    setNewTweet('')
  }

  function handleHotKeySubmit(e: KeyboardEvent) {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      setTweets([newTweet, ...tweets])

      setNewTweet('')
    }
  }

  return (
    <main>
      <Header title="Home" />

      <NewTweetForm onSubmit={createNewTweet}>
        <label htmlFor="tweet">
          <img
            src="https://github.com/henrique998.png"
            alt="Henrique Monteiro"
          />

          <textarea
            id="tweet"
            placeholder="What's happening?"
            value={newTweet}
            onChange={(e) => setNewTweet(e.target.value)}
            onKeyDown={handleHotKeySubmit}
          />
        </label>

        <Button type="submit" variant="small">
          Tweet
        </Button>
      </NewTweetForm>

      <Separator />

      {tweets.map((tweet) => (
        <Tweet key={tweet} content={tweet} />
      ))}
    </main>
  )
}
