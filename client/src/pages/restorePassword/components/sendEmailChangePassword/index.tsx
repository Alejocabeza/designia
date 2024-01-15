import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { initialState } from './lib'
import { specificHandles } from './utils/specificHandles'
import { useSendEmailRestorePassword } from './hooks'
import { SendEmailDataInterface } from './interface'
import { UseMutationResult } from '@tanstack/react-query'
import { Label } from '../../../../components'

interface Props {
  setIsActive: (value: number) => void
}

export const SendEmailRestorePassword = (props: Props): JSX.Element => {
  const sendEmail = useSendEmailRestorePassword()
  const { t } = useTranslation()
  const [formValues, setFormValues] = useState<SendEmailDataInterface>(initialState)
  const { handleChangeEmail, handleSubmit } = specificHandles(
    formValues,
    setFormValues,
    sendEmail as UseMutationResult
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
          w="50%"
          h="100%"
          justifyContent="center"
          alignItems="center"
          display={{ md: 'none', lg: 'flex' }}
        >
          Img
        </Box>
        <Box
          w={{ sm: '80%', lg: '50%' }}
          h="100%"
          display="flex"
          justifyContent="center"
          alignItems="start"
          flexDirection="column"
          gap={'2rem'}
          p={{ sm: '0%', lg: '4rem' }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="start"
            gap="1rem"
            flexDirection="column"
          >
            <Heading fontSize="1.5rem" color={useColorModeValue('gray.700', '#fcd9b8')}>
              {t('restore_password.send_email_title')}
            </Heading>
            <Text>{t('restore_password.send_email_text')}</Text>
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
                  <Label htmlFor="email" color={useColorModeValue('gray.700', '#fcd9b8')}>
                    {t('sign_in.email')}
                  </Label>
                </Box>
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
              <Button
                colorScheme={useColorModeValue('purple', 'orange')}
                w="full"
                type="submit"
                variant="solid"
              >
                {t('restore_password.send_code')}
              </Button>
            </Box>
          </form>
        </Box>
      </Stack>
    </Stack>
  )
}
