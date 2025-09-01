import { Flex, Box } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Flex
      height={"10dvh"}
      width={"100%"}
      bg={"teal.900"}
      align={"center"}
      justify={"space-between"}
      direction={"row"}
      color="orange.50"
      p={2}
    >
      <Box>
        CelularesStore</Box>
      <Flex maxW={"fit-content"}>
        <ul className="linksContainer">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Productos</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
          <li>
            <a href="#">Nosotros</a>
          </li>
        </ul>
      </Flex>
    </Flex>
  );
}


export default Header