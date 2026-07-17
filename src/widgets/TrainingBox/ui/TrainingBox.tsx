import { TrainingCard, type Training } from "#entities/Training"
import { TrainerHeader } from "#entities/Training/ui/TrainerHeader"
import "../style.scss"

export function TrainingBox({ training }: { training: Training }) {
    return (
        <article className="trainingBox">
            <TrainerHeader trainer={training.trainer} station={training.station} />
            <TrainingCard key={training.id} training={training} />
        </article>
    )
}