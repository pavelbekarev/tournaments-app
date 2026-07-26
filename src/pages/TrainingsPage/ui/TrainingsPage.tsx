import TrainingList from "#widgets/TrainingList"
import { Suspense } from "react"
import "../style.scss"

export function TrainingsPage() {
    return (
        <Suspense fallback={<div>загрузка...</div>}>
            <TrainingList/>
        </Suspense>
    )
}