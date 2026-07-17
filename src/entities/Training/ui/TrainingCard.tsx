import type { TrainingCard } from "#entities/Training/model/types"
import TrainingSlots from "#features/TrainingSlots";
import DateBadge from "#shared/DateBadge";
import LocationIcon from "#shared/LocationIcon";
import "../style.scss"

export function TrainingCard({training}: {training: TrainingCard}) {
    const { title, duration, freeSlots, maxSlots, station, time, date } = training;
    return (
        <div className="trainingCard">
            <h2 className="trainingCard__title">{title}</h2>
            <div className="trainingCard__item">
                <p className="trainingCard__text">
                    {time} / {duration}
                </p>
            </div>
            <div className="trainingCard__item">
                <LocationIcon />
                <p className="trainingCard__text">{ station }</p>
            </div>
            <div className="trainingCard__dateBadge">
                <DateBadge date={date} />
            </div>
            <div className="trainingCard__slots">
                <TrainingSlots trainingSlots={{ freeSlots, maxSlots }} />
            </div>
            <div className="trainingCard__footer">
                <button type="button" className="trainingCard__button">Открыть</button>
            </div>
        </div>
    )
}
