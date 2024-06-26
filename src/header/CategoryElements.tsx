import {NavDropdown} from "react-bootstrap";
import Category from "../interfaces/categoryInterface.ts";
import {FC, useContext} from "react";
import {ParamContext} from "../context/ParamContext.tsx";
import {useNavigate} from "react-router-dom";

interface CategoryElementsParams {
  data: Category[],
}

const CategoryElements: FC<CategoryElementsParams> = ({data}) => {
  const {setCategory} = useContext(ParamContext)

  const navigate = useNavigate();

  const handleCategoryClick = (category: Category) => {
    navigate('/adverts');
    setCategory(category.id);
  };

  return (
      <>
        {!data.length &&
            <NavDropdown.Item disabled>
                No data
            </NavDropdown.Item>
        }
        {data?.map((category) => (
            <NavDropdown.Item
                key={category.id}
                onClick={() => {
                  handleCategoryClick(category)
                }}
            >
              {category.title}
            </NavDropdown.Item>
        ))}
      </>
  )
}

export default CategoryElements