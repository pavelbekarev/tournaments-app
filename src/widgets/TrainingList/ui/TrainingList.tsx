import { trainings } from '#entities/Training/model/mock'
import TrainingBox from '#widgets/TrainingBox'
import '../style.scss'

export function TrainingList() {
    return (
        <div className="trainingList">
            {
                trainings.map((item) => (
                    <TrainingBox key={item.id} training={item} />
                ))
            }
        </div>
    ) 
}
