import { useTrainings } from '#entities/Training/model/useTrainings'
import { TrainingBox } from '#widgets/TrainingBox'
import '../style.scss'

export function TrainingList() {
    const { data: trainings } = useTrainings();

    return (
        <div className="trainingList container">
            
            {
                trainings.map((item) => (
                    <TrainingBox key={item.id} training={item} />
                ))
            }
        </div>
    ) 
}
