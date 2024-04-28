import { useState } from "react";
import NavBarClickHam from "./NavBarClickHam";
function ButtonHam() {
  const [isClickHam, setIsClickHam] = useState(false);

  function handleClickHam() {
    setIsClickHam(!isClickHam);
  }
  return (
    <>
      {isClickHam ? (
        <div>
          <NavBarClickHam />
        </div>
      ) : (
        ""
      )}
      <button className="hamber-z-hide" onClick={handleClickHam}>
        &#9776;
      </button>
    </>
  );
}

export default ButtonHam;
