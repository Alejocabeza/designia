import {
  Box,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useColorModeValue
} from '@chakra-ui/react'
import { Layout } from '@renderer/components'
import { SendEmailRestorePassword } from '@renderer/pages/restorePassword/components/SendEmail'
import { ValidatePin } from '@renderer/pages/restorePassword/components/ValidatedPin'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChangePassword } from './components/ChangePassword'

export const RestorePassword = (): JSX.Element => {
  const { t } = useTranslation()
  const [isActive, setIsActive] = useState(0)
  const steps = [
    { title: t('restore_password.send_email') },
    { title: t('restore_password.validated_email') },
    { title: t('restore_password.change_password') }
  ]
  return (
    <Layout
      display="flex"
      justifyContent="center"
      alignItems="start"
      w="100vw"
      h="calc(100vh - 4rem)"
      pt="2rem"
      px="8rem"
      bg={useColorModeValue('blackAlpha.100', 'blackAlpha.600')}
    >
      <Box
        as="section"
        display="flex"
        flexDir="column"
        justifyContent="start"
        alignItems="center"
        w="80%"
        h="100%"
      >
        <Box as="header" w="100%" h="5%">
          <Stepper index={isActive} w="100%">
            {steps.map((step, index) => {
              return (
                <Step key={index}>
                  <StepIndicator>
                    <StepStatus
                      complete={<StepIcon />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>

                  <Box flexShrink="0">
                    <StepTitle>{step.title}</StepTitle>
                  </Box>

                  <StepSeparator />
                </Step>
              )
            })}
          </Stepper>
        </Box>
        <Box w="100%" h="95%" as="main">
          {isActive === 0 && <SendEmailRestorePassword setIsActive={setIsActive} />}
          {isActive === 1 && <ValidatePin setIsActive={setIsActive} active={isActive} />}
          {isActive === 2 && <ChangePassword setIsActive={setIsActive} active={isActive} />}
        </Box>
      </Box>
    </Layout>
  )
}
