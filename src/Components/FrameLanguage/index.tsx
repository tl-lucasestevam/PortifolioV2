import { Translate, X } from 'phosphor-react'
import {
  CloseButton,
  FrameLanguageContainer,
  LanguageContent,
  LanguageLink,
  LanguageOverlay,
} from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'

import BrFlag from '../../assets/brazil_flag.png'
import EuaFlag from '../../assets/united_states_flag.png'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'

export function FrameLanguage() {
  const [open, setOpen] = useState(false)
  const { t: translate } = useTranslation('common')

  function handleCloseModal() {
    setOpen(false)
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <FrameLanguageContainer>
          <Translate size={24} />
          {translate('change language')}
        </FrameLanguageContainer>
      </Dialog.Trigger>

      <Dialog.Portal>
        <LanguageOverlay />
        <LanguageContent>
          <CloseButton asChild>
            <X size={24} weight="bold" />
          </CloseButton>

          <LanguageLink href={`/`} locale={'pt-BR'} onClick={handleCloseModal}>
            <Image src={BrFlag} width={120} alt="" />
            <h5>Portuguese</h5>
          </LanguageLink>

          <LanguageLink href={`/`} locale={'en'} onClick={handleCloseModal}>
            <Image src={EuaFlag} width={120} alt="" />
            <h5>English</h5>
          </LanguageLink>
        </LanguageContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
