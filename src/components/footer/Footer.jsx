import { Flex, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Flex justify={"center"} align={"center"} direction={"column"}>
      <Flex
        height={"10vh"}
        width={"100%"}
        bg={"teal.900"}
        color={"orange.50"}
        justify={"center"}
        align={"center"}
        wrap={"wrap"}
      >
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
      <Text bg={"teal.900"} w={"100%"} textAlign={"center"} color={"orange.50"}>
        Sitio hecho por{" "}
        <a
          href="http://https://www.linkedin.com/in/gastonpetiti/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gastón Petiti
        </a>
      </Text>
    </Flex>
  );
};
export default Footer;
