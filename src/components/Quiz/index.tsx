import { useNavigate } from "react-router-dom"
import { QUIZ_BG } from "../../constants"
import { Button } from "../common/Button"

export const QuizPage = () => {
    const navigate = useNavigate()
    const onClickHandler = () => {
        navigate('/q1')
    }
    return (
        <div style={{ position: 'relative', height: '100vh', width: '100%', }}>
            <div style={{
                width: '100%',
                height: '50%',
                backgroundImage: ` url(${QUIZ_BG})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
                    <div style={{ color: 'white', zIndex: "10", display: "flex", flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                        <h1 style={{
                            margin: "0",
                            fontFamily: 'Grange',
                            fontSize: '40px',
                            fontWeight: '600',
                            lineHeight: '110%'
                        }}>Build a self care routine suitable for you</h1>
                        <p style={{
                            margin: "0",
                            fontFamily: 'Proxima Nova',
                            fontSize: '16px',
                            fontWeight: '400',
                            lineHeight: '150%',
                        }}>Take out test to get a personalised self care routine based on your needs.</p>
                    </div>

                    <Button handler={onClickHandler} style={{ backgroundColor: '#C3EDFF', zIndex: '20', textAlign: 'center' }}>Start the quiz</Button>
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
        </div>
    )
}