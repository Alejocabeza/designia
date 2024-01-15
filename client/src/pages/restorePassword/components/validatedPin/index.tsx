import {
  Box,
  Button,
  HStack,
  Heading,
  IconButton,
  PinInput,
  PinInputField,
  Stack,
  Text,
  Tooltip,
  useColorModeValue
} from '@chakra-ui/react'
// import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaArrowLeftLong } from 'react-icons/fa6'
// import { initialStatePin } from './states'

interface Props {
  active: number
  setIsActive: (value: number) => void
}

export const ValidatePin = (props: Props): JSX.Element => {
  // const [formValues, setFormValues] = useState(initialStatePin)
  const { t } = useTranslation()
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
              aria-label="previous step"
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
          display={{ lg: 'flex', sm: 'none' }}
          justifyContent="center"
          alignItems="center"
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
              {t('restore_password.validate_pin_title')}
            </Heading>
            <Text>{t('restore_password.validate_pin_text')}</Text>
          </Box>
          <form className="w-full flex flex-col justify-center items-center gap-8">
            <Box w="full">
              <HStack>
                <PinInput otp size="lg" defaultValue={formValues.pin.value} manageFocus={true}>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </Box>
            <Box w="full">
              <Button
                colorScheme={useColorModeValue('purple', 'orange')}
                w="full"
                type="submit"
                variant="solid"
              >
                {t('restore_password.validate_pin')}
              </Button>
            </Box>
          </form>
        </Box>
      </Stack>
    </Stack>
  )
}
