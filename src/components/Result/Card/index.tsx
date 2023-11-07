import NextSVG from "../../../public/Next.svg"

const infoCard = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', }}>
        <h1 style={{ margin: '0', fontFamily: 'Grange' }}>Daily routine</h1>
        <p style={{
            margin: '0',
            fontFamily: 'Proxima Nova',
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '150%',

        }}>
            Perfect for if you're looking
            for soft, nourished skin, our moistu
            rizing body washes are
            made with skin-natural nutrien
            ts that work with your skin to replenish m
            oisture. With a light formula, the bubbly lathe
            r leaves your skin feeling cleansed and
            cared for. And by choosing relaxing f
            ragrances you can add a moment of c
            alm to the end of your day.
        </p>
    </div>
)

export const Card = ({ info, data }: any) => {
    return (
        <div>
            <div style={{
                width: '350px',
                height: '421px',
                backgroundColor: "white",
                borderRadius: '8px',
                ...(info && {
                    padding: ' 46px 59px 53px 60px',
                    boxSizing: 'border-box',
                    backgroundColor: '#EEF7FB',
                }),
                ...(data && {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    flexShrink: '0',

                })
            }}>

                {info && infoCard}
                {data &&
                    <>
                        <div style={{
                            position: 'relative',
                            width: '350px',
                            height: '345px',
                            background: `url(${data.images?.[0]?.src})`,
                            backgroundSize: "cover",
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: 'rgba(211 211 211 /0.5)',
                            borderRadius: '8px',
                        }}>

                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            flex: '1 0 0',
                            gap: '6px'
                        }}>
                            <h1 style={{
                                margin: 0,
                                fontSize: '24px',
                                fontWeight: '600',
                                lineHeight: '110%',
                                color: '#1C2635',
                                fontFamily: 'Grange',
                            }}>
                                Milk Body Cleanser
                            </h1>
                            <p style={{
                                margin: 0,
                                fontSize: '18px',
                                fontWeight: '500',
                                lineHeight: '110%',
                                color: '#1C2635',
                                fontFamily: 'Grange',
                            }}>
                                $14.00
                            </p>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}
// color: #1C2635;
// font-family: Proxima Nova;
// font-size: 16px;
// font-style: normal;
// font-weight: 400;
// line-height: 150%; /* 24px */