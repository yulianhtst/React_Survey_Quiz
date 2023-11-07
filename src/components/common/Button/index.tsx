export const Button = ({ children, handler, style }: { children: any, handler: () => void, style?: any }) => {
    return (
        <>
            <div
                onClick={handler}
                style={{
                    boxSizing: 'border-box',
                    fontSize: '16px',
                    lineHeight: '16px',
                    minWidth: '189px',
                    border: '1px solid white',
                    borderRadius: '8px',
                    padding: '14px 40px',
                    width: '238px',
                    ...style
                }}
            >
                <p style={{
                    margin: '0',
                    fontFamily: 'Proxima Nova',
                    fontSize: '16px',
                    fontWeight: '500',
                }}>{children}</p>
            </div >
        </>
    )
}