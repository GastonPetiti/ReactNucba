import { Flex, Image, Text, Divider, Heading } from "@chakra-ui/react"

export const Hero = () => {
  return (
    <Flex
    bg={'teal.400'}
    justifyContent={"space-around"}
    alignItems={'center'}
    wrap={'wrap'}>
      <Flex
      justify={'center'}
      align={'center'}
      flexDir={'column'}
      m={3}
      p={2}
      color={'orange.50'}>
      <Heading>
          Celulares Store
      </Heading>
      <Divider
      h={4}
      borderColor={'teal.400'}/>
        <Text 
        fontSize={'xl'}>
          Somos una tienda que importa los últimos modelos de celulares al mejor precio para Latinoamerica
        </Text>
      </Flex>
        <Flex 
        boxSize='sm' 
        justify={'center'} 
        align={'center'}>
          <Image src='https://static.vecteezy.com/system/resources/previews/008/850/475/original/3d-render-mobile-phone-png.png' alt='Celular 3D'/>
        </Flex>
    </Flex>
  )
}
