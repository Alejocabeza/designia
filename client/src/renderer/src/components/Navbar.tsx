import { Box, IconButton, Link, Tooltip, useColorModeValue } from '@chakra-ui/react'
import { ToggleChangeLang } from '@renderer/components/ToggleChangeLang'
import { ToggleChangeTheme } from '@renderer/components/ToggleChangeTheme'
import { t } from 'i18next'
import { FaArrowLeftLong } from 'react-icons/fa6'

export const Navbar = (): JSX.Element => {
  return (
    <Box
      as="header"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      h="4rem"
      bgColor={useColorModeValue('blackAlpha.100', 'blackAlpha.600')}
      px="8rem"
    >
      <Box as="div">
        <Tooltip label={t('sign_in.title')} placement="right">
          <Link href="/">
            <IconButton aria-label="SignIn" colorScheme={useColorModeValue('purple', 'orange')}>
              <FaArrowLeftLong />
            </IconButton>
          </Link>
        </Tooltip>
      </Box>
      <Box as="div" display="flex" justifyContent="center" alignItems="center" gap=".8rem">
        <ToggleChangeTheme placement="bottom" />
        <ToggleChangeLang placement="bottom" />
      </Box>
    </Box>
  )
}
