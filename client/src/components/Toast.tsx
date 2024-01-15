import { Box, useToast } from '@chakra-ui/react'

export const Toast: React.FC = () => {
  const toast = useToast()
  return (
    <Button
      onClick={() =>
        toast({
          position: 'bottom-left',
          render: () => (
            <Box color="white" p={3} bg="blue.500">
              Hello World
            </Box>
          )
        })
      }
    ></Button>
  )
}
