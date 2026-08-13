export function TrainingCardSkeleton() {
    return (
        <div className="trainingCard skeleton">
            <h2 className="trainingCard__title"></h2>
            <div className="trainingCard__item skeleton">
                <p className="trainingCard__text">
                    / 
                </p>
            </div>
            <div className="trainingCard__item">
                
                <p className="trainingCard__text"></p>
            </div>
            <div className="trainingCard__dateBadge">
                
            </div>
            <div className="trainingCard__slots">
                
            </div>
            <div className="trainingCard__footer">
                <button type="button" className="trainingCard__button skeleton " disabled></button>
            </div>
        </div>
    )
}