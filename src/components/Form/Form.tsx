import React, {useState} from 'react';
import css from "./Form.module.css";
import Switch from "react-switch";
import {ClipLoader} from "react-spinners";

const Form = () => {

    const [loading, setLoading] = useState<boolean>(true);

    return (
        <div className={css.container}>
            <form>
                <div className={css.formControl}>
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="e.g. Ibague"
                    />
                </div>
                <div className={css.formSwitch}>
                    <Switch
                        checked={true}
                        onChange={() => console.log("Change switch")}
                        onColor="#197bb3"
                        uncheckedIcon={false}
                    />
                    <label htmlFor="">Celsius</label>
                </div>
                <div className={css.formSwitch}>
                    <Switch
                        checked={false}
                        onChange={() => console.log("Change switch")}
                        onColor="#197bb3"
                        uncheckedIcon={false}
                    />
                    <label htmlFor="">Farenheit</label>
                </div>
                <button type="submit" className={css.button}>
                    { loading ? <ClipLoader color="#EEE" size={25} /> : 'SEARCH' }
                </button>
            </form>
        </div>
    );
};

export default Form;
