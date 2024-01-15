import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  Heading,
  IconButton,
  Input,
  Link,
  Stack,
  Tooltip,
  useColorModeValue
} from '@chakra-ui/react'
import { UseMutationResult } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { GrPowerReset } from 'react-icons/gr'
import { Navigate } from 'react-router-dom'
import { Label, ToggleChangeLang, ToggleChangeTheme } from '../../components'
import { useLoginUser } from './hooks'
import { LoginDataInterface } from './interface'
import { initialState } from './lib/state'
import { specificHandles } from './utils/specificHandles'

export function SignIn(): JSX.Element {
  const { t } = useTranslation()
  const userLogin = useLoginUser()
  const [formValues, setFormValues] = useState<LoginDataInterface>(initialState)
  const { handleChangePassword, handleChangeEmail, handleSubmit } = specificHandles(
    formValues,
    setFormValues,
    userLogin as UseMutationResult
  )

  useEffect(() => {
    if (userLogin.isSuccess) {
      window.localStorage.setItem('user_logged', JSON.stringify(true))
    }
  }, [userLogin.isSuccess, userLogin.data])

  if (userLogin.isSuccess) {
    return <Navigate to="/dashboard" />
  }

  return (
    <Box
      as="main"
      display="flex"
      flexDirection="column"
      bgColor={useColorModeValue('blackAlpha.100', 'blackAlpha.600')}
    >
      <Stack w="100wh" h="100vh" display="flex" justifyContent="center" alignItems="center">
        <Stack
          w={{ lg: '60%', sm: '70%' }}
          h="70%"
          justifyContent="center"
          alignItems="center"
          bgColor={useColorModeValue('#ffffff90', 'gray.800')}
          rounded="md"
          boxShadow="base"
          flexDirection="row"
          pos="relative"
        >
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="row"
            alignItems="center"
            gap=".5rem"
            pos="absolute"
            top="5%"
            right="5.5%"
          >
            <ToggleChangeTheme placement="left" />
            <ToggleChangeLang placement="right" />
          </Box>
          <Box
            w="50%"
            h="100%"
            display={{ sm: 'none', lg: 'flex' }}
            justifyContent="center"
            alignItems="center"
          >
            Img
          </Box>
          <Box
            w={{ sm: '100%', lg: '50%' }}
            h="100%"
            display="flex"
            justifyContent="center"
            alignItems="start"
            flexDirection="column"
            gap={'2rem'}
            p="4rem"
          >
            <Heading size="xl" color={useColorModeValue('gray.700', '#fcd9b8')}>
              {t('sign_in.title')}
            </Heading>
            <form
              className="w-full flex flex-col justify-center items-center gap-8"
              onSubmit={handleSubmit}
            >
              <Box w="full">
                <FormControl>
                  <Label htmlFor="email" color={useColorModeValue('gray.700', '#fcd9b8')}>
                    {t('sign_in.email')}
                  </Label>
                  <Input
                    bgColor={useColorModeValue('blackAlpha.100', 'blackAlpha.600')}
                    id="email"
                    type="email"
                    placeholder='"Jq0Pv@example.com'
                    name="email"
                    isRequired={formValues.email.required}
                    variant="failled"
                    color={useColorModeValue('gray.700', '#fcd9b8')}
                    onChange={handleChangeEmail}
                  />
                  {formValues.email.error && (
                    <FormHelperText color={useColorModeValue('gray.700', '#fcd9b8')}>
                      {formValues.email.messageError}
                    </FormHelperText>
                  )}
                </FormControl>
              </Box>
              <Box w="full">
                <FormControl>
                  <Box display="flex" justifyContent="space-between" alignItems="center" mb=".5rem">
                    <Label htmlFor="password" color={useColorModeValue('gray.700', '#fcd9b8')}>
                      {t('sign_in.password')}
                    </Label>
                    <Tooltip label={t('general.reset_password')} placement="right">
                      <Link href="/restore_password">
                        <IconButton
                          aria-label="reset password"
                          colorScheme={useColorModeValue('purple', 'orange')}
                        >
                          <GrPowerReset />
                        </IconButton>
                      </Link>
                    </Tooltip>
                  </Box>
                  <Input
                    id="password"
                    type="password"
                    placeholder="********"
                    name="password"
                    bgColor={useColorModeValue('blackAlpha.100', 'blackAlpha.600')}
                    isRequired={formValues.password.required}
                    color={useColorModeValue('gray.700', '#fcd9b8')}
                    variant="failled"
                    onChange={handleChangePassword}
                  />
                  {formValues.password.error && (
                    <FormHelperText color={useColorModeValue('gray.700', '#fcd9b8')}>
                      {formValues.password.messageError}
                    </FormHelperText>
                  )}
                </FormControl>
              </Box>
              <Box w="full">
                <FormControl>
                  <Label
                    htmlFor="confirm_password"
                    color={useColorModeValue('gray.700', '#fcd9b8')}
                  >
                    {t('sign_in.confirm_password')}
                  </Label>
                  <Input
                    id="confirm_password"
                    type="password"
                    name="confirmPassword"
                    bgColor={useColorModeValue('blackAlpha.100', 'blackAlpha.600')}
                    placeholder="********"
                    isRequired={formValues.confirmPassword.required}
                    color={useColorModeValue('gray.700', '#fcd9b8')}
                    variant="failled"
                    onChange={handleChangePassword}
                  />
                  {formValues.confirmPassword.error && (
                    <FormHelperText color={useColorModeValue('gray.700', '#fcd9b8')}>
                      {formValues.confirmPassword.messageError}
                    </FormHelperText>
                  )}
                </FormControl>
              </Box>
              <Box w="full">
                <Button
                  colorScheme={useColorModeValue('purple', 'orange')}
                  w="full"
                  type="submit"
                  variant="solid"
                >
                  {userLogin.status === 'pending' ? (
                    <CircularProgress
                      color={useColorModeValue('gray.700', '#fcd9b8')}
                      size="1.5rem"
                    />
                  ) : (
                    t('sign_in.send')
                  )}
                </Button>
              </Box>
            </form>
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}
