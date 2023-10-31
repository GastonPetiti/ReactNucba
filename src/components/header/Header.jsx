import { Flex, Box } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Flex height={'10vh'} width={'100%'} bg={'tomato'} align={'center'} justify={'space-between'} direction={'row'}>
      <Box ml={6}>
        Name
      </Box>
      <Flex mr={6}>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
        <li>Nosotros</li>
      </Flex>
    </Flex>
    )
}


export default Header