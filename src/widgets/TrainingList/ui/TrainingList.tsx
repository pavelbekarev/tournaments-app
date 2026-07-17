import { trainings } from "#entities/Training/model/mock"

export function TrainingList() {
    
    return (
        trainings.map((item) => (
            <span>{item.title}</span>
        ))
    )
}