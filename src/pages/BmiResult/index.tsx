import {SecondSection} from "./SecondSection.tsx";
import {ThirdSection} from "./ThirdSection.tsx";
import curvedLine from "../../assets/images/pattern-curved-line-left.svg"
const BmiResult = () => {
  return(
      <>
          <SecondSection/>
          <img src={curvedLine} alt="leftCurvedLine" />
          <ThirdSection/>
      </>
  )
}
export default BmiResult;