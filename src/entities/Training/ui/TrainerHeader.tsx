import type { Trainer } from "#entities/Trainer";
import "../style.scss"

export function TrainerHeader({ trainer, station }: {trainer: Trainer, station: string}) {
    return (
        <div className="trainerHeader">
            <img className="trainerHeader__avatar" src={trainer.avatar} alt="Аватар тренера" />
            <div className="trainerHeader__text">
                <h2 className="trainerHeader__trainerName">{ trainer.fullName }</h2>
                <span className="trainerHeader__station">{station}</span>
            </div>
        </div>
    )
}