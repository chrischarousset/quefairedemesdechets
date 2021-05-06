import React from 'react'
import styled from 'styled-components'

const Text = styled.p`
  padding: 1.5rem;
  font-size: 1.125rem;
  border-top: 0.125rem solid ${(props) => props.theme.colors.text};

  ${(props) => props.theme.mq.small} {
    margin-bottom: 2rem;
    font-size: 1rem;
  }
`
export default function Avoid(props) {
  return props.product[`Comment_les_Ã©viter_?`] && props.open ? (
    <>
      <Text
        dangerouslySetInnerHTML={{
          __html: props.product[`Comment_les_Ã©viter_?`],
        }}
      />
    </>
  ) : null
}
