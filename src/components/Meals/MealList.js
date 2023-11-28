import { useEffect, useState } from "react";

import Meal from "./Meal";

const MealList = () => {

    const [meals, setMeals] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [httpErrorMessage, setHttpErrorMessage] = useState();

    useEffect(() => {
        const fetchMeals = async () => {
            setIsLoading(true);
                const response = await fetch("https://react-http-test-c60e0-default-rtdb.firebaseio.com/meals.json");

                if (!response.ok) {
                    throw new Error("Что-то пошло не так");
                }
                const responseData = await response.json();

                let data  = [];
                for (const key in responseData) {
                    data.push({
                        id: key,
                        name: responseData[key].name,
                        description: responseData[key].desc,
                        price: responseData[key].price,
                    })
                }
                setMeals(data);
                setIsLoading(false);
        }
            fetchMeals().catch(err => {
                setIsLoading(false);
                setHttpErrorMessage(err.message);
            });
    }, []);

    let content;
    if (isLoading) {
        content = <p style={{ textAlign: "center" }}>Данные загружаются ...</p>;
    }

    if (httpErrorMessage) {
        content = <p style={{ textAlign: "center" }}>{httpErrorMessage}</p>
    }

    let mealList = meals?.map((meal, i) => (
        <Meal
            key={meal.id}
            id={meal.id}
            name={meal.name}
            desc={meal.description}
            price={meal.price}
            i={i}
        />
    ));

    return (
        <section className="max-w-3xl w-9/10 my-4 mx-auto">
            <div className="space-y-5">
                {content}
                {mealList}
            </div>
        </section>
    );
}
export default MealList;