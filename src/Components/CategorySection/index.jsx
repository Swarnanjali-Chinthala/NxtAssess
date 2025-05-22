import { CategoryElements } from "./index.styles";
const CategorySection=(props)=>{
    const { item } = props;
    return(
        <>
        <CategoryElements>{item}</CategoryElements>
        </>
    )
}
export default CategorySection;