import { CSSProperties } from "react"

export const ProgressBar = ({ index }: { index: number }) => {
    const progress = index + 1

    const visualiseProgress = (progress: number) => {
        const bg = {
            1: `conic-gradient( #AADDF3 0% 20%, #EEF7FB 20% 40%, #EEF7FB 40% 60%, #EEF7FB 60% 80%,#EEF7FB 80% 100%)`,//20%
            2: `conic-gradient(#AADDF3 0% 20%, #AADDF3 20% 40%, #EEF7FB 40% 60%, #EEF7FB 60% 80%,#EEF7FB 80% 100%)`,//40&
            3: `conic-gradient(#AADDF3 0% 20%,#AADDF3 20% 40%, #AADDF3 40% 60%, #EEF7FB 60% 80%,#EEF7FB 80% 100%)`,//60&
            4: `conic-gradient(#AADDF3 0% 20%,#AADDF3 20% 40%,#AADDF3 40% 60%, #AADDF3 60% 80%,#EEF7FB 80% 100%)`,//80%
            5: `conic-gradient(#AADDF3 0% 20%,#AADDF3 20% 40%,#AADDF3 40% 60%,#AADDF3 60% 80%, #AADDF3 80% 100%)`,//100%
        }

        return (
            {
                right: '-120px',
                top: '0',
                position: 'absolute' as const,
                width: '101px',
                height: '101px',
                borderRadius: "50%",
                background: bg[progress],

            }
        )
    }

    return (
        <div
            style={visualiseProgress(progress)}
        >
            <div style={{
                position: 'absolute',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                top: '6px',
                left: '6px',
                right: '6px',
                bottom: '6px',
                backgroundColor: 'white',
                borderRadius: '50%',
            } as CSSProperties}>
                <a>
                    {progress}/5
                </a>
                </div>
        </div >
    )
}