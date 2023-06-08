import { MenuList, MenuListItem, Link } from "./styles";
import { arrayOf, shape, string } from "prop-types";
import { Link as RRLink } from "react-router-dom";

export default function Menu({ itemsMenu }) {
  return (
    <nav>
      <MenuList>
        {itemsMenu.map(({ name, route }) => (
          <MenuListItem key={route}>
            <Link to={route} component={RRLink}>
              {name}
            </Link>
          </MenuListItem>
        ))}
      </MenuList>
    </nav>
  );
}

Menu.propTypes = {
  itemsMenu: arrayOf(
    shape({
      name: string,
      route: string,
    })
  ),
};
