import { Avatar, Box, Heading, Stack } from '@chakra-ui/react'
import { TextData } from '@renderer/components/ui/TextData'
import ImgProfile from '../../../../assets/pictures/backgroundProfile.jpg'
import { userStore } from '../../store/userStore'

export const HeadProfile = (): JSX.Element => {
  const { name, roles } = userStore()
  return (
    <div className="bg-white h-[25rem] w-full flex flex-col justify-center items-center rounded-sm overflow-hidden relative">
      <div className="w-full h-[75%]">
        <picture>
          <img src={ImgProfile} alt="background profile" className="w-full h-full object-cover" />
        </picture>
      </div>
      <div className="w-full h-[25%] px-8">
        <div>
          <Stack
            justify="center"
            w="7rem"
            h="7rem"
            align="center"
            pos="absolute"
            top="62%"
            bg="#f3f4f6"
            rounded="md"
            boxShadow="lg"
          >
            <Stack
              justify="center"
              align="center"
              rounded="md"
              h="6rem"
              w="6rem"
              bg="white"
              boxShadow="base"
            >
              <Avatar
                size="md"
                name={name}
                w="full"
                h="full"
                sx={{ borderRadius: '.2rem', height: '100%', width: '100%' }}
              />
            </Stack>
          </Stack>
          <Stack w="full" h="full" px="9rem" py=".5rem">
            <Box as="div">
              <Heading color="black" as="h1" fontWeight="semiBold" fontSize="1.8rem">
                {name}
              </Heading>
            </Box>
            <Stack as="div" flexDirection="row">
              {roles &&
                roles.map((role: string, index: number) => <TextData key={index}>{role}</TextData>)}
            </Stack>
          </Stack>
        </div>
      </div>
    </div>
  )
}
