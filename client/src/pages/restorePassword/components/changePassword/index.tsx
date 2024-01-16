import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Heading,
  IconButton,
  Input,
  Stack,
  Tooltip,
  useColorModeValue
} from '@chakra-ui/react'
import { UseMutationResult } from '@tanstack/react-query'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Label } from '../../../../components'
import { useChangePassword } from './hooks'
import { changePasswordInterface } from './interface'
import { initialState } from './lib'
import { specificHandles } from './utils/specificHandles'

interface Props {
  active: number
  setIsActive: (value: number) => void
}

export const ChangePassword = (props: Props): JSX.Element => {
  const { t } = useTranslation()
  const changePassword = useChangePassword()
  const [formValues, setFormValues] = useState<changePasswordInterface>(initialState)
  const { handleChangePassword, handleSubmit } = specificHandles(
    formValues,
    setFormValues,
    changePassword as UseMutationResult
  )
  return (
    <Stack w="100%" h="100%" display="flex" justifyContent="center" alignItems="center">
      <Stack
        w="100%"
        h={{ lg: '80%', sm: '70%' }}
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
          left={{ lg: '55.5%', sm: '10%' }}
        >
          <Tooltip label={t('general.previous_step')} placement="right">
            <IconButton
              aria-label="SignIn"
              colorScheme={useColorModeValue('purple', 'orange')}
              onClick={() => props.setIsActive(props.active - 1)}
            >
              <FaArrowLeftLong />
            </IconButton>
          </Tooltip>
        </Box>
        <Box
          w="50%"
          h="100%"
          justifyContent="center"
          alignItems="center"
          display={{ md: 'none', lg: 'flex' }}
        >
          Img
        </Box>
        <Box
          w={{ lg: '50%', sm: '100%' }}
          h="100%"
          display="flex"
          justifyContent="center"
          alignItems="start"
          flexDirection="column"
          gap={'2rem'}
          p="4rem"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="start"
            gap="1rem"
            flexDirection="column"
          >
            <Heading fontSize="1.5rem" color={useColorModeValue('gray.700', '#fcd9b8')}>
              {t('restore_password.change_password')}
            </Heading>
          </Box>
          <form
            className="w-full flex flex-col justify-center items-center gap-8"
            onSubmit={handleSubmit}
          >
            <Box w="full">
              <FormControl
                display="flex"
                justifyContent="center"
                flexDirection="column"
                gap=".8rem"
              >
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Label htmlFor="password" color={useColorModeValue('gray.700', '#fcd9b8')}>
                    {t('sign_in.password')}
                  </Label>
                </Box>
                <Input
                  bgColor={useColorModeValue('blackAlpha.100', 'blackAlpha.600')}
                  id="password"
                  type="password"
                  placeholder="*********"
                  name="password"
                  isRequired={formValues.password.required}
                  variant="failled"
                  color={useColorModeValue('gray.700', '#fcd9b8')}
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
              <FormControl
                display="flex"
                justifyContent="center"
                flexDirection="column"
                gap=".8rem"
              >
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Label htmlFor="confirmPassword" color={useColorModeValue('gray.700', '#fcd9b8')}>
                    {t('sign_in.confirm_password')}
                  </Label>
                </Box>
                <Input
                  bgColor={useColorModeValue('blackAlpha.100', 'blackAlpha.600')}
                  id="confirmPassword"
                  type="password"
                  placeholder="*********"
                  name="confirmPassword"
                  isRequired={formValues.password.required}
                  variant="failled"
                  color={useColorModeValue('gray.700', '#fcd9b8')}
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
              <Button
                colorScheme={useColorModeValue('purple', 'orange')}
                w="full"
                type="submit"
                variant="solid"
              >
                {t('restore_password.change_password')}
              </Button>
            </Box>
          </form>
        </Box>
      </Stack>
    </Stack>
  )
}
