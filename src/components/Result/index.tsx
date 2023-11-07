import { Card } from "./Card"
import { useFetch } from "../../hooks/useFetch"
import { RESULT_BG } from "../../constants";
import { SlideButton } from "./SlideButton";
import { useContext, useEffect, useState } from "react";
import { Button } from "../common/Button";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../context/FormContext";




export const Result = () => {
    const [slide, setSlide] = useState(0)
    const [transition, setTransition] = useState(false)
    const { items, form } = useFetch()
    const navigate = useNavigate()
    const { nullifyForm } = useContext<any>(FormContext)
    console.log(items);
    const arr = [items[0], items[1]]

    useEffect(() => {
        //+1 for the Info card
        const lastSlide = items?.length + 1
        if (slide > lastSlide) {
            setTransition(false)
            setSlide(0)
        }
        if (slide < 0) {
            setTransition(false)
            setSlide(lastSlide)
        }
    }, [slide])

    const onClickSlipeLeft = () => {
        setTransition(true)

        setSlide(slide + 1)
    }
    const onClickSlipeRight = () => {
        setTransition(true)

        setSlide(slide - 1)
    }
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
                <div style={{ gap: '32px', textAlign: 'center', zIndex: '44', color: 'white', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', width: '583px', height: "330px" }}>
                    <h1 style={{
                        margin: "0",
                        fontFamily: 'Grange',
                        fontSize: '40px',
                        fontWeight: '600',
                        lineHeight: '110%'
                    }}>Build you everyday self care routine.</h1>
                    <p style={{
                        margin: "0",
                        fontFamily: 'Proxima Nova',
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '150%',
                    }}>Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day.</p>
                    <Button handler={onClickHandler}>Retake the quiz</Button>
                </div>
            </div>
            <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '50%',
                background: 'rgba(0 0 0 /0.55)',
                zIndex: '1'
            }}>
            </div>
            <div style={{
                position: 'relative',
                display: 'flex',
                width: '100%',
                height: '50%',
                zIndex: '2',
            }}>
                {Boolean(items.length) ?
                    <div style={{
                        margin: '0 auto',
                        position: 'relative',
                        height: '421px',
                    }}>
                        <SlideButton right={true} onClick={onClickSlipeRight} />
                        <SlideButton left={true} onClick={onClickSlipeLeft} />

                        <div style={{
                            position: 'relative',
                            top: "-15%",
                            height: '421px',
                            display: 'flex',
                            overflow: 'hidden',
                        }}>

                            <div style={{
                                width: '1122px',
                                height: '421px',
                                display: 'flex',
                                gap: '36px',
                                transform: `translateX(-${slide * 386}px)`,
                                // transition: ' transform .8s ease-out'
                                ...(transition && { transition: ' transform .8s ease-out' })
                                // transform: `translateX(-390px)`,

                            }}>
                                <Card info={true} />
                                {items.map((x, i) => <Card data={x} key={i} />)}
                                <Card info={true} />
                                {arr.map((x, i) => <Card data={x} key={i} />)}
                            </div>
                        </div>
                    </div>
                    : <div style={{ margin: '0 auto' }}><h1>NO ITEMS AVAILABLE AT THE MOMENT</h1></div>}
            </div>
        </div >

    )
}
