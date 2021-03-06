import styled from "@emotion/styled"
import { withSpacing } from "../utils/withSpacing"

export const Flex = withSpacing()(
  styled.div(props => {
    const styles = { display: "flex" }

    if (props.basis) {
      styles.flexBasis = props.basis
    }
    if (props.wrap) {
      styles.flexWrap = props.wrap
    }
    if (props.alignItems) {
      styles.alignItems = props.alignItems
    }
    if (props.justifyContent) {
      styles.justifyContent = props.justifyContent
    }

    if (props.flexDirection) {
      styles.flexDirection = props.flexDirection
    }

    if (props.grow) {
      styles.flexGrow = props.grow
    }
    if (props.shrink) {
      styles.flexShrink = props.shrink
    }

    return styles
  })
)
