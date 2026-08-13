import {TrainingList, TrainingListSkeleton} from "#widgets/TrainingList"
import { Suspense } from "react"
import "../style.scss"

export function TrainingsPage() {
    return (
        <div className="trainingPage">
            <h1 className='trainingPage__title'>Запись на пробные занятия</h1>
            <Suspense fallback={<TrainingListSkeleton />}>
                <TrainingList/>
            </Suspense>
        </div>
    )
}
