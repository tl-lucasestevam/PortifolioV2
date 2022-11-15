import { keyframes, styled } from '../../styles'
import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'

const contentShow = keyframes({
  from: {
    opacity: 0,
    transform: 'translate(-50%, -48%) scale(0.96)',
  },
  to: {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
  },
})

export const FrameLanguageContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,

  position: 'absolute',
  bottom: '1.5rem',
  right: '1.5rem',
  padding: '0.75rem',

  backgroundColor: '$gray500',
  borderRadius: 10,
  border: 'none',

  color: '$gray300',
  fontSize: '$md',
  fontWeight: '500',
})

export const LanguageContent = styled(Dialog.Content, {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '$gray600',
  borderRadius: '6px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: '25px',
  animation: `${contentShow} 170ms cubic-bezier(0.16, 1, 0.3, 1)`,

  '@media (max-width: 768px)': {
    width: '75vw',
    height: '30vh',
    alignItems: 'center',

    button: {
      padding: '0.8rem',
    },
  },
})

export const LanguageLink = styled(Link, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  padding: '3rem',
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  fontSize: '$md',

  '&:hover': {
    backgroundColor: '$gray700',
    borderRadius: 10,
  },

  '@media (max-width: 768px)': {
    padding: '0.8rem',
  },
})

export const CloseButton = styled(Dialog.Close, {
  cursor: 'pointer',
  position: 'absolute',
  right: '1.5rem',
  top: '1.5rem',
})
