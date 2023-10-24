import Meal from "./Meal";

const dummy_meals = [
    {
        id: "m1",
        name: 'Ролл "Наоми"',
        description:
            "Сыр Филадельфия, куриное филе, масаго, помидор, огурец, кунжут",
        price: 11.99,
    },
    {
        id: "m2",
        name: "Спайси в лососе",
        description: "Рис, лосось, соус спайси",
        price: 3.99,
    },
    {
        id: "m3",
        name: "Суши с угрем",
        description: "Угорь копченый, соус унаги, кунжут",
        price: 4.99,
    },
    {
        id: "m4",
        name: 'Салат "Поке с лососем"',
        description:
            "Рис, лосось, огурец, чука, нори, стружка тунца, соус ореховый",
        price: 7.99,
    },
];

const MealList = () => {

    let meals = dummy_meals.map((meal) => (
        <Meal
            key={meal.key}
            name={meal.name}
            desc={meal.description}
            price={meal.price}
        />
    ));

    return (
        <section className="max-w-3xl w-9/10 my-4 mx-auto">
            <div className="space-y-5">
                {meals}
            </div>
        </section>
    );
}
export default MealList;