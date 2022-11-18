import Image from 'next/image'
import { styled } from '../../styles'

export const SkillsContainer = styled('section', {
  padding: '5rem 0',
})

export const SkillsContent = styled('div', {
  display: 'flex',

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '5rem',
  },
})

export const DescriptionSide = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  flex: 1,
  paddingRight: '5rem',

  '@media (max-width: 768px)': {
    paddingRight: '0',
  },
})

export const CarrouselSide = styled('div', {
  overflow: 'hidden',
  flex: 2,
})

export const CarrouselViewport = styled('div', {})

export const CarrouselContainer = styled('div', {
  display: 'flex',
  gridColumnGap: '4rem',

  '@media (max-width: 768px)': {
    gridColumnGap: '2rem',
  },
})

export const CarrouselItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  flex: '0 0 25%',
  backgroundColor: '#181818',
  padding: '3.75rem',
  minHeight: '17rem',
  borderRadius: 15,

  '@media (max-width: 768px)': {
    flex: '0 0 50%',
    padding: '3rem',
  },
})

export const Detail = styled('hr', {
  width: '66px',
  height: '4px',
  background: '$gray300',
  marginTop: '2rem',
})

export const LogoTech = styled(Image, {})

export const CarrouselButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 50,
  height: 50,
  backgroundColor: '$gray600',
  border: 0,
  color: '$white',
  borderRadius: 5,
  transition: 'all 0.3s ease',

  '&:hover': {
    opacity: 0.7,
  },
})

export const CarrouselButtonContainer = styled('div', {
  display: 'flex',
  gap: '1rem',
})
