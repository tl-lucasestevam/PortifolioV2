import { styled } from '../../styles'

import * as ToggleGroup from '@radix-ui/react-toggle-group'
import Image from 'next/image'

export const AboutContainer = styled('section', {
  width: '100%',
  marginTop: '5.625rem',
  backgroundColor: '$gray700',
  padding: '5rem 0',
})

export const AboutContent = styled('div', {
  display: 'flex',

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '5rem',
  },
})

export const ImageSide = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flex: 1,
})

export const ImageBanner = styled(Image, {
  maxWidth: '381px',
  width: '100%',

  '@media (max-width: 1366px)': {
    width: 351,
    height: 452,
  },
})

export const DescriptionSide = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  flex: 1.3,
})

export const ToggleGroupContainer = styled(ToggleGroup.Root, {
  display: 'flex',
  gap: '1.5rem',
})

export const ToggleItem = styled(ToggleGroup.Item, {
  border: 'none',
  backgroundColor: 'transparent',
  minWidth: 50,
  padding: '0 1rem',
  minHeight: 30,
  borderRadius: 5,
  color: '$gray300',
  fontWeight: 600,
  transition: 'all 0.3s ease-out',

  "&[data-state='on']": {
    backgroundColor: 'rgba(52,255,122,0.18)',
    color: '$green300',
  },

  "&[data-state='off']:hover": {
    backgroundColor: '$gray600',
    color: '$gray300',
  },
})

export const DescriptionArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})
