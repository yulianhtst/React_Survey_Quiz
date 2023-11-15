import { useFetch } from "../../../hooks/useFetch"
import { Card } from "./Card"
import { useEffect, useState } from "react"
import { SlideButton } from "./SlideButton"

const cardSize = 386

export const Slider = () => {
    const { items } = useFetch()
    const arr = [items[0], items[1]]

    const [slide, setSlide] = useState(0)
    const [transition, setTransition] = useState(false)


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

    return (
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
                            transform: `translateX(-${slide * cardSize}px)`,
                            ...(transition && { transition: ' transform .8s ease-out' })

                        }}>
                            <Card info={true} />
                            {items.map((x, i) => <Card data={x} key={i} />)}
                            <Card info={true} />
                            {arr.map((x, i) => <Card data={x} key={i} />)}
                        </div>
                    </div>
                </div>
                : <div
                    style={{ margin: '0 auto' }}>
                    <h1>NO ITEMS AVAILABLE AT THE MOMENT</h1>
                </div>
            }
        </div>
    )
}
