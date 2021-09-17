import React from 'react'

import Logo from 'components/Logo'
import Button from 'components/Button'
import * as S from './styles'

import { gaEvent } from 'utils/ga'
import Container from 'components/Container'
import { LogoProps, sectionHeroProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' })

type Props = {
  logo: LogoProps
  sectionHero: sectionHeroProps
}

const SectionHero = ({ logo, sectionHero }: Props) => (
  <S.Wrapper>
    <Container>
      <Logo {...logo} />

      <S.Content>
        <S.TextBlock>
          <S.Title>{sectionHero.title}</S.Title>
          <S.Description>{sectionHero.description}</S.Description>
          <S.ButtonWrapper>
            <Button href={sectionHero.button.url} onClick={onClick} wide>
              {sectionHero.button.label}
            </Button>
          </S.ButtonWrapper>
        </S.TextBlock>

        <S.Image
          src={getImageUrl(sectionHero.image.url)}
          alt={sectionHero.image.alternativeText}
        />
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default SectionHero
