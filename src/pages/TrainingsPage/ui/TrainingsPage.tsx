import TrainingList from "#widgets/TrainingList"
import { Suspense } from "react"
import "../style.scss"
import { getTrainings } from "#entities/Training/api/getTrainings";

export function TrainingsPage() {
    const trainingsPromise = getTrainings();

    return (
        <Suspense fallback={<div>загрузка...</div>}>
            <TrainingList promise={trainingsPromise} />
        </Suspense>
    )
}