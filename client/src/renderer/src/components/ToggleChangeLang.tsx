import { IconButton, PlacementWithLogical, Tooltip, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IoLanguageOutline } from 'react-icons/io5'

interface Props {
  placement: PlacementWithLogical | undefined
}

export const ToggleChangeLang = ({ placement }: Props): JSX.Element => {
  const { t, i18n } = useTranslation()
  const [lang, setLang] = useState('es')
  const handleChangeLang = (): void => {
    i18n.changeLanguage(lang)
    if (lang === 'es') {
      setLang('en')
    } else {
      setLang('es')
    }
  }
  return (
    <Tooltip label={t('general.change_lang')} placement={placement}>
      <IconButton
        aria-label="Change Lang"
        colorScheme={useColorModeValue('purple', 'orange')}
        onClick={handleChangeLang}
      >
        <IoLanguageOutline />
      </IconButton>
    </Tooltip>
  )
}
