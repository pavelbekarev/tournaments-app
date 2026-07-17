import type { Trainer } from "#entities/Trainer";
import avatar from "../../../../public/avatar.webp"
import "../style.scss"

export function TrainerHeader({ trainer, station }: {trainer: Trainer, station: string}) {
    return (
        <div className="trainerHeader">
            <img className="trainerHeader__avatar" src={avatar} alt="Аватар" />
            <div className="trainerHeader__text">
                <h2 className="trainerHeader__trainerName">{ trainer.fullName }</h2>
                <span className="trainerHeader__station">{station}</span>
            </div>
        </div>
    )
}