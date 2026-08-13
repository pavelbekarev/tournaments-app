import '../style.scss'

export function TrainerHeaderSkeleton() {
    return (
        <div className="trainerHeader ">
            <img className="trainerHeader__avatar skeleton " alt="" />
            <div className="trainerHeader__text skeleton">
                <h2 className="trainerHeader__trainerName skeleton" />
                <span className="trainerHeader__station skeleton" />
            </div>
        </div>
    )
}