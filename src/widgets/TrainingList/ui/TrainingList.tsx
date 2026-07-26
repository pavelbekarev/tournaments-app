import { useTrainings } from '#entities/Training/model/useTrainings'
import TrainingBox from '#widgets/TrainingBox'
import '../style.scss'

export function TrainingList() {
    const { data: trainings } = useTrainings();

    return (
        <div className="trainingList container">
            <h1 className='trainingList__title'>Запись на пробные занятия</h1>
            {
                trainings.map((item) => (
                    <TrainingBox key={item.id} training={item} />
                ))
            }
        </div>
    ) 
}
