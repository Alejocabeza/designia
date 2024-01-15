import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  IconButton,
  PlacementWithLogical,
  Tooltip,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

interface Props {
  placement: PlacementWithLogical | undefined
}

export const ToggleChangeTheme = ({ placement }: Props): JSX.Element => {
  const { t } = useTranslation()
  const { toggleColorMode } = useColorMode()
  return (
    <Tooltip label={t('general.change_theme')} placement={placement}>
      <IconButton aria-label="toggle theme">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            style={{ display: 'inline-block' }}
            key={useColorModeValue('light', 'dark')}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <IconButton
              aria-label="Toggle theme"
              colorScheme={useColorModeValue('purple', 'orange')}
              icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
              onClick={toggleColorMode}
            ></IconButton>
          </motion.div>
        </AnimatePresence>
      </IconButton>
    </Tooltip>
  )
}
