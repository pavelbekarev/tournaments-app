import TrainingBox from '#widgets/TrainingBox'
import { useEffect, useState } from 'react'
import '../style.scss'
import { getTrainings } from '#entities/Training/api/getTrainings'
import type { Training } from '#entities/Training'

export function TrainingList() {
    const [trainings, setTrainings] = useState<Training[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchTrainings = async () => {
            setIsLoading(true);
            try {
                const data = await getTrainings();
                setTrainings(data)
            } catch {
                alert("Произошла ошибка при загрузке данных.")
            }
            finally {
                setIsLoading(false);
            }
        }

        fetchTrainings();
    }, [])

    if (!isLoading) {
        return (
            <div className="trainingList container">
                <h2 className='trainingList__loader'>Загрузка<span className='trainingList__loader-dots'></span></h2>
            </div>
        )
    }

    if (trainings.length === 0) {
        return (
            <div className="trainingList container">
                <h2>Нет данных</h2>
            </div>
        )
    }

    return (
        <div className="trainingList container">
            <h1 className='trainingList__title'>Запись на пробные занятия</h1>
            {
                trainings.map((item) => (
                    <TrainingBox key={item.id} training={item} />
                ))
            }
        </div>
    ) 
}
