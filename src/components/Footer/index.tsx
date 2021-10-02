import React from 'react'

import Container from 'components/Container'

import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Container>
      <p>
        LandingPage de um curso feito por{' '}
        <a href="https://marcioandradeblog.netlify.app/">Marcio Andrade</a>
      </p>
      <p>
        O Back-End foi feito via <a href="https://strapi.io/">Strapi CMS</a>
      </p>
    </Container>
  </S.Wrapper>
)

export default Footer
