import { HeaderContainer } from "./styles";
import { BiCaretDown } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { MdSearch } from "react-icons/md";
import { useDarkMode } from "../../hooks/useDarkMode";
import { ToggleButton } from "../ToggleButton/ToggleButton";

export function Header() {
  const [theme, themeToggler] = useDarkMode();

  return (
    <HeaderContainer>
      <div className="header-top">
        <div className="lang">
          <div>
            <p>PT</p>
            <BiCaretDown size={10} />
          </div>

          <div>
            <p>BRL</p>
            <BiCaretDown size={10} />
          </div>
        </div>

        <div className="menu">
          <div>
            <CgProfile size={20} />
            <p>Meu perfil</p>
          </div>
          <div>
            <FiShoppingCart size={20} />
            <p>Itens</p>
          </div>

          <p>R$0,00</p>
          <MdSearch size={20} />
        </div>
      </div>

      <div className="header-bottom">
        <div>
          <img src="/Icon.png" alt="Logo" width={44} height={44} />
          <p>E-comm</p>
        </div>
        <ul>
          <li>HOME</li>
          <li>SACOLA</li>
          <li>TÊNIS</li>
          <li>BOLSAS</li>
          <li>CONTATO</li>
        </ul>
      </div>
    </HeaderContainer>
  );
}
