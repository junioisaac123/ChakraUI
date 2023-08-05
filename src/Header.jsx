import { Box, Heading, Button, Flex, Stack } from '@chakra-ui/react'

function App() {

  return (
    <>
      <Box
        bg='gray'
        bgImage="url('https://wallpapercave.com/uwp/uwp3520887.jpeg')"
        bgSize='cover'
        h="40vh"
      >
        <Flex
          direction="column"
          alignItems="center"
          justify="center"
          h="100%"
          bg="rgb (0 0 0 / 50%)"
          p={['0 10%', null, '0 20%']}
        >
          <Heading
            color='white'
            textAlign='center'
            fontWeight="ligth"
            letterSpacing="5px"
          >
            DOMINA EL TERRENO
          </Heading>
          <Stack
            direction={{
              base: "column",
              md: "row"
            }}
            mt="20px"
            w={["100%", null, "auto"]}
          >
            <Button
              variant='outline'
              size="lg"
              fontWeight="light"
              borderRadius="0"
              color="white"
              _hover={{
                color: "black",
                bg: "white"
              }}
            >VER DETALLES
            </Button>
            <Button
              variant='outline'
              size="lg"
              fontWeight="light"
              borderRadius="0"
              color="white"
              _hover={{
                color: "black",
                bg: "white"
              }}
            >VER VIDEO
            </Button>
          </Stack>
        </Flex>
      </Box>
    </>
  )
}

export default App;