import TrainingBox from '#widgets/TrainingBox'
import { use } from 'react'
import '../style.scss'
import type { Training } from '#entities/Training';

export function TrainingList({promise}: {promise: Promise<Training[]>}) {
    const trainings = use(promise);

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
