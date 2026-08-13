import { TrainingBoxSkeleton } from "#widgets/TrainingBox";

export function TrainingListSkeleton() {
    const trainingSkeletonCount = 5;
    return (
        <div className="trainingList container">
            {
                [Array.from({ length: trainingSkeletonCount }).map((_, index) => (
                    <TrainingBoxSkeleton key={index} />
                ))]
            }
        </div>
    )
}