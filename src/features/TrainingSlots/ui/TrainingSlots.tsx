import type { TrainingSlotsProps } from "#entities/Training/model/types";
import { SlotsBar } from "./SlotsBar";

export function TrainingSlots({ trainingSlots }: { trainingSlots: TrainingSlotsProps }) {
    const { freeSlots, maxSlots } = trainingSlots;
    const places = freeSlots === 1 ? "место" : [2, 3, 4].includes(freeSlots) ? "места" : 'мест'

    return (
        <div className="trainingSlots">
            <SlotsBar freeSlots={freeSlots} maxSlots={maxSlots} />
            <div className="trainingSlots__bottom">
                <p className="trainingSlots__text">
                    {maxSlots - freeSlots}<span className="trainingSlots__text--opacity">/{maxSlots} участников</span>
                </p>
                <p className="trainingSlots__text trainingSlots__text--s">осталось: {freeSlots} {places}</p>
            </div>
        </div>
    )
}
