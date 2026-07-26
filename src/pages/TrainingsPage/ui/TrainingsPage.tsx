import TrainingList from "#widgets/TrainingList"
import { Suspense } from "react"
import "../style.scss"
import Loader from "#shared/Loader"

export function TrainingsPage() {
    return (
        <Suspense fallback={<Loader />}>
            <TrainingList/>
        </Suspense>
    )
}
