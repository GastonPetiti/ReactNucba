import { Flex, Heading } from "@chakra-ui/react"
import CategoryCard from "./categoryCard"
import categories from "../../data/categories"

export const CategoryWidget = () => {
  return (
    <Flex direction={'column'}>
    <Heading textAlign={'center'} m={3}>
        Marcas
    </Heading>
    <Flex
    justify={'space-around'}
    align={'center'}
    wrap={'wrap'}
    p={2}
    m={2}>
        {categories.map((brand)=> <CategoryCard key={brand.id} {...brand}/>)}
    </Flex>
    </Flex>
  )
}

export default CategoryWidget