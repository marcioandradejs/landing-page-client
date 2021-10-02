import React from 'react'

import Container from 'components/Container'

import * as S from './styles'
import { SectionFooterProps } from 'types/api'

const Footer = ({ description }: SectionFooterProps) => (
  <S.Wrapper>
    <Container>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </Container>
  </S.Wrapper>
)

export default Footer
