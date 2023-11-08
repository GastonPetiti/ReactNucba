import { Flex, Box } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Flex height={'10vh'} width={'100%'} bg={'teal.900'} align={'center'} justify={'space-between'} direction={'row'} color='orange.50' m={0}>
      <Box m={3}>
        CelularesStore
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