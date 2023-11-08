import { Flex } from "@chakra-ui/react"
import products from "../../../data/products"
import ProductCard from "../product_card/ProductCard"

export const ProductWidget = () => {
  return (
    <Flex justify={'space-around'} align={'center'} wrap={'wrap'}>
      {products.map((cellphone)=> <ProductCard key={cellphone.id} {...cellphone}/>)}
    </Flex>
  )
}
export default ProductWidget