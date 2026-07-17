import "../style.scss"
export function DateBadge({ date }: {date: string}) {
    const d = new Date(date);
    const month = d
        .toLocaleString("ru-RU", { month: "short" })
        .replace(".", "")
        .slice(0, 3)
        .toUpperCase();

    return (
        <div className="dateBadge">
            <span className="day">{ d.getDate() }</span>
            <span className="month">{month}</span>
        </div>
    )
}