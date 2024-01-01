import {
  Box,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper
} from '@chakra-ui/react'
import { Layout } from '@renderer/components'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

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
      h="calc(100vh - 6rem)"
      pt="2rem"
      px="8rem"
    >
      <Box
        as="section"
        display="flex"
        flexDir="column"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <Box as="header" w="100%" h="100%">
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
      </Box>
    </Layout>
  )
}
