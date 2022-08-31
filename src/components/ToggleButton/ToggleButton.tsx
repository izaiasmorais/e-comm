import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import { ToggleContainer } from "../../styles/components/TogglerStyles";

interface ToggleProps {
  theme: string | boolean | (() => void);
  toggleTheme: string | boolean | (() => void);
}

export function ToggleButton({ theme, toggleTheme }: ToggleProps) {
  return (
    <ToggleContainer>
      {/* @ts-ignore */}
      <button onClick={toggleTheme}>
        {theme === "light" ? (
          <MdOutlineNightlight size={20} />
        ) : (
          <MdOutlineLightMode size={20} color="white" />
        )}
      </button>
    </ToggleContainer>
  );
}
