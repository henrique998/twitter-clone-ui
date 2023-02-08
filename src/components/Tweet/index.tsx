/* eslint-disable prettier/prettier */
import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import {
  TweetContainer,
  TweetContent,
  TweetContentFooter,
  TweetContentHeader
} from './styles'

interface TweetProps {
  content: string
}

export function Tweet({ content }: TweetProps) {
  return (
    <TweetContainer to="/tweet">
      <img src="https://github.com/henrique998.png" alt="henrique" />

      <TweetContent>
        <TweetContentHeader>
          <strong>Henrique Monteiro</strong>
          <span>@henrique998</span>
        </TweetContentHeader>

        <p>{content}</p>

        <TweetContentFooter>
          <button>
            <ChatCircle />
            20
          </button>

          <button>
            <ArrowsClockwise />
            20
          </button>

          <button>
            <Heart />
            20
          </button>
        </TweetContentFooter>
      </TweetContent>
    </TweetContainer>
  )
}
