/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import { Box, FancyBox, SuperFancyBox } from "../atoms/Boxes"
import { SubTitle, Description } from "../atoms/Typography"
import { CalendarDay } from "../atoms/CalendarDay"

const boxes = [Box, FancyBox, SuperFancyBox]

const cardContent = css`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: stretch;
  justify-content: flex-start;
  flex-wrap: nowrap;
  flex: 1 1 auto;

  cursor: pointer;
  -webkit-user-drag: none;
  user-select: none;
`

const cardLink = css`
  flex-grow: 1;
  padding: 0.7rem 0 0.5rem;
  text-decoration: none;
`

const cardLinkLarge = css`
  flex-grow: 1;
  padding: 1.7rem 1.6rem 1.5rem;
`

const cardLinkLargeFancy = css`
  flex-grow: 1;
  padding: 4.5rem 1.6rem 4.5rem;
`

const calendar = css`
  margin-right: 0.9rem;
  border-right: 1px solid rgba(0, 0, 0, 0.075);
`

const bookmark = css`
  display: block;
  appearance: none;

  flex: 0 0 auto;
  width: 4.2rem;

  font-size: 1.6rem;
  border: none;
  background: transparent;

  color: currentColor;
  opacity: 0.25;

  cursor: pointer;

  &:focus {
    outline: none;
    background: rgba(0, 0, 0, 0.1);
  }

  &:hover {
    opacity: 0.8;
  }

  svg {
    display: inline-block;
    vertical-align: middle;
    width: 1.4rem;
  }
`

export const bookmarkActive = css`
  opacity: 1;
`

export const EventCard = ({
  title,
  description,
  fancyLevel,
  day,
  dayName,
  large,
  bookmarked = false,
  onBookmarkClick,
  ...props
}) => {
  const ActualBox = boxes[fancyLevel] || Box
  const superFancy = fancyLevel === 2
  const linkStyle = [cardLink]

  if (large && superFancy) {
    linkStyle.push(cardLinkLargeFancy)
  } else if (large) {
    linkStyle.push(cardLinkLarge)
  }

  return (
    <ActualBox {...props}>
      <div css={cardContent}>
        {!large && (
          <CalendarDay
            css={calendar}
            day={day}
            dayName={dayName}
            inverted={superFancy}
          />
        )}
        <a css={linkStyle} href="#">
          <SubTitle inverted={superFancy}>{title}</SubTitle>
          <Description inverted={superFancy}>{description}</Description>
        </a>
        <button
          css={[bookmark, bookmarked && bookmarkActive]}
          onClick={onBookmarkClick}
        >
          <svg
            aria-hidden="true"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            {bookmarked ? (
              <path
                fill="currentColor"
                d="M336,0 L48,0 C21.49,0 0,21.49 0,48 L0,512 L192,400 L384,512 L384,48 C384,21.49 362.51,0 336,0 Z"
              />
            ) : (
              <path
                fill="currentColor"
                d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"
              />
            )}
          </svg>
        </button>
      </div>
    </ActualBox>
  )
}