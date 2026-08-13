import { TrainerHeaderSkeleton, TrainingCardSkeleton } from "#entities/Training"
import "../style.scss"

export function TrainingBoxSkeleton() {
    return (
        <article className="trainingBox ">
            <TrainerHeaderSkeleton />
            <TrainingCardSkeleton />
        </article>
    )
}
