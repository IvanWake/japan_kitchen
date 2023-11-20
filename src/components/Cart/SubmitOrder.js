import { useForm } from "react-hook-form";

const SubmitOrder = (props) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid, isSubmitSuccessful}
    } = useForm({
        mode: 'onBlur',
    })

    const fetchOrder = async (data) => {
        fetch("https://react-http-test-c60e0-default-rtdb.firebaseio.com/orders.json", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify({
                firstName: data.firstName,
                city: data.city,
                address: data.address,
                order: props.items,
            })
        })
            .then(response => response.json())
            .then()
    }

    const formSubmitHandler = (data) => {
        if (isValid) {
            fetchOrder(data);
            reset();
            props.onCleanCart();
        }
    }

    return (
        <form onSubmit={handleSubmit(formSubmitHandler)}>
            <div className="flex flex-col space-x-3 space-y-3 w-1/3">
                <label htmlFor="name">Введите Имя</label>
                <input className="border-[1px] border-purple-500" id="name" type="text" {...register('firstName', {
                    required: "Заполните имя",
                    minLength: {
                        value: 2,
                        message: `Не менее 2-ух символов`,
                    }
                })}/>
                { errors.firstName  && <p className="text-red-700">Имя должно быть длиннее 2-ух символов</p>}
            </div>
            <div className="flex flex-col space-x-3 space-y-3 w-1/3">
                <label htmlFor="city">Город</label>
                <input className="border-[1px] border-purple-500" id="city" type="text"  {...register('city', {
                    required: "Заполните город",
                    minLength: {
                        value: 3,
                        message: `Не менее 3-ёх символов`,
                    }
                })}
                />
                { errors.city  && <p className="text-red-700">Город должен быть не менее 3-ёх символов</p>}
            </div>
            <div className="flex flex-col space-x-3 space-y-3 w-1/3">
                <label htmlFor="address">Адрес</label>
                <input className="border-[1px] border-purple-500" id="address" type="text" {...register('address', {
                    required: "Заполните Адрес",
                    minLength: {
                        value: 7,
                        message: `Не менее 7-ми символов`,
                    }
                })}/>
                { errors.address  && <p className="text-red-700">Адрес должен быть не менее 7-ми символов</p>}
            </div>
            <button className="bg-transparent border-promo-color border rounded-3xl px-8 py-2 hover:bg-purple-950 hover:text-white mt-4"
                    type="submit" disabled={!isValid}>Подтвердить</button>
        </form>
    );
}

export default SubmitOrder;