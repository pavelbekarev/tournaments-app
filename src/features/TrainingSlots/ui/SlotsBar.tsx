import type { TrainingSlots } from "../model/types";
import "../style.scss"

export function SlotsBar({ maxSlots, freeSlots }: TrainingSlots) {
    return (
        <div className="slotsBar">
            {Array.from({ length: maxSlots }).map((_, index) => {
                const isFree = index >= maxSlots - freeSlots;

                return (
                    <span
                        key={index}
                        className={isFree ? "slot slot--free" : "slot"}
                    />
                )
            })}
        </div>
    );
}