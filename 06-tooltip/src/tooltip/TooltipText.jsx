import { Children, useRef, useState } from "react";
import Tooltip from "./Tooltip";

// eslint-disable-next-line react/prop-types
function TooltipText({ tooltip }) {
  let [tooltipDomRect, setTooltipDomRect] = useState();
  let [showTooltip, setShowTooltip] = useState(false);
  // useReff crea un objeto que no cambia cuando se renderiza el componente, mas bien mantiene su valor
  // se utiliza junto a la prop ref={}, esta prop debe estar en la tag que queremos
  let spanElement = useRef();

  function handleMouseOver() {
    let domData = spanElement.current.getBoundingClientRect();
    setTooltipDomRect(domData);
    setShowTooltip(true);
  }
  return (
    <>
      <span
        className="tooltip-text"
        onMouseLeave={(ev) => setShowTooltip(false)}
        onMouseOver={(ev) => handleMouseOver(ev)}
        ref={spanElement}
      >
        {Children}
      </span>
      {showTooltip && <Tooltip domRect={tooltipDomRect} text={tooltip} />}
    </>
  );
}
export default TooltipText;
