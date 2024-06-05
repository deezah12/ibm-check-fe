import './ThirdSection.css';
import eatingIcon from "../../assets/images/icon-eating.svg"
import iconExercice from "../../assets/images/icon-exercise.svg"
import iconeSleep from "../../assets/images/icon-sleep.svg"
export function ThirdSection() {
	return (
		<section id='thirdSection'>
      <div id='thirdSection-1'>
        <div className="thirdSectionItem">
          <img src={eatingIcon} alt="iconEating" />
          <div>
            <h4>Healthy eating</h4>
            <p>
              Healthy eating promotes weight control,
              disease prevention, better digestion, immunity,
              mental clarity, and mood.
            </p>
          </div>
        </div>
        <div className="thirdSectionItem">
          <img src={iconExercice} alt="iconExercice" />
          <div>
            <h4>Regular exercise</h4>
            <p>
              Exercise improves fitness, aids weight control,
              elevates mood, and reduces disease risk,
              fostering wellness and longevity.
            </p>
          </div>
        </div>
        <div className="thirdSectionItem">
          <img src={iconeSleep} alt="iconeSleep" />
          <div>
            <h4>Adequate sleep</h4>
            <p>
              Sleep enhances mental clarity, emotional
              stability, and physical wellness, promoting
              overall restoration and rejuvenation.
            </p>
          </div>
        </div>
      </div>
    </section>
	)
}
