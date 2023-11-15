import { RESULT_BG } from "../../constants";
import { useContext } from "react";
import { Button } from "../common/Button";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../context/FormContext";
import { Slider } from "./Slider";


type FormContextType = {
    nullifyForm: () => void
}


export const Result = () => {
    const { nullifyForm } = useContext<FormContextType>(FormContext)
    const navigate = useNavigate()


    const onClickHandler = () => {
        navigate('/')
        nullifyForm()
    }

    return (

        <div style={{ position: 'relative', height: '100vh', width: '100%', }}>
            <div style={{
                width: '100%',
                height: '50%',
                backgroundImage: ` url(${RESULT_BG})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div style={{
                    display: 'inline-flex',
                    textAlign: 'center',
                    zIndex: '44',
                    color: 'white',
                    width: '583px',
                    height: "330px",
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '32px',
                }}>
                    <h1 style={{
                        margin: "0",
                        fontFamily: 'Grange',
                        fontSize: '40px',
                        fontWeight: '600',
                        lineHeight: '110%'

                    }}>
                        Build you everyday self care routine.
                    </h1>
                    <p style={{
                        margin: "0",
                        fontFamily: 'Proxima Nova',
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '150%',
                    }}>
                        Perfect for if you're looking for soft, nourished skin,
                        our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture.
                        With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for.
                        And by choosing relaxing fragrances you can add a moment of calm to the end of your day.
                    </p>
                    <Button handler={onClickHandler}>Retake the quiz</Button>
                </div>
            </div>

            {/* Shader */}
            <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '50%',
                background: 'rgba(0 0 0 /0.55)',
                zIndex: '1'
            }}></div>
            {/* Shader */}
            <Slider />
        </div >

    )
}
