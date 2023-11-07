const NextSVG = (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Frame">
            <path id="Vector" d="M14.4287 8.02998L6.42371 0.0199776L4.82271 1.62198L11.2267 8.02998L4.82271 14.438L6.42371 16.04L14.4287 8.02998Z" fill="#1C2635" stroke="#1C2635" stroke-width="0.16" />
        </g>
    </svg>
)

export const SlideButton = ({ onClick, right, left }: any) => {
    return (
        <div
            onClick={onClick}
            style={{
                position: 'absolute',
                width: '60px',
                height: '60px',
                backgroundColor: "#EEF7FB",

                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                ...(right && {
                    top: '30%',
                    left: "-70px",
                }),
                ...(left && {
                    top: '30%',
                    right: "-70px",
                })
            }}>
            <div

                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    ...(right && { transform: 'rotate(180deg)' })
                }}>
                {NextSVG}
            </div>
        </div>
    )
}