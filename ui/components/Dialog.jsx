/* TODO: Make UI component based on reach-ui */
import React from "react"
import "@reach/dialog/styles.css"
import styled from "@emotion/styled"
import { useTransition, animated } from "react-spring"

import {
  DialogOverlay as ReachDialogOverlay,
  DialogContent as ReachDialogContent,
} from "@reach/dialog"

import { ThemeProvider } from "../theme"

export const DialogOverlay = styled(ReachDialogOverlay)`
  &[data-reach-dialog-overlay] {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0;
    overflow: auto;

    z-index: 22;

    background: ${({ theme }) => theme.colors.dialogContentBackground};

    @media screen and (min-width: 45em) {
      background: ${({ theme }) => theme.colors.dialogOverlayBackground};
    }
  }
`

export const DialogContent = styled(ReachDialogContent)`
  &[data-reach-dialog-content] {
    width: 100%;
    margin: 0 auto;

    background: ${({ theme }) => theme.colors.dialogContentBackground};
    padding: 2rem;
    border-radius: 4px;
    outline: none;

    @media screen and (min-width: 45em) {
      margin: 10vh auto;
      max-width: 35rem;
    }
  }
`

const noOp = () => {}

const AnimatedDialogOverlay = animated(DialogOverlay)
const AnimatedDialogContent = animated(DialogContent)

export const Dialog = ({
  isOpen,
  onDismiss = noOp,
  initialFocusRef,
  ...restProps
}) => {
  const transitions = useTransition(isOpen, null, {
    from: { opacity: 0, y: "translate3d(0, 2rem, 0)" },
    enter: { opacity: 1, y: "translate3d(0, 0rem, 0)" },
    leave: { opacity: 0, y: "translate3d(0, 2rem, 0)" },
    config: {
      duration: 150,
    },
  })

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <AnimatedDialogOverlay
          isOpen={item}
          key={key}
          onDismiss={onDismiss}
          initialFocusRef={initialFocusRef}
          style={{ opacity: props.opacity }}
        >
          <ThemeProvider theme="light">
            <AnimatedDialogContent
              style={{ transform: props.y }}
              {...restProps}
            />
          </ThemeProvider>
        </AnimatedDialogOverlay>
      )
  )
}
