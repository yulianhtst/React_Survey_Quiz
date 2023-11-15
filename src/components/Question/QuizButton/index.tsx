import { useContext, useRef, useState, useEffect, ReactNode, MouseEvent, CSSProperties } from "react";
import styles from "./Button.module.scss"
import { FormContext } from "../../../context/FormContext";
import { useLocation } from "react-router-dom";

type QuizButtonProps = {
    content: ReactNode;
    style: React.CSSProperties;
    index?: number;
    multiple?: boolean;
    navigation?: boolean;
    value?: string;
}
type FormContextProps = {
    setSingleAnswer: (e: MouseEvent<HTMLDivElement>, buttonIndex: number) => void;
    setMultipleAnswers: (e: MouseEvent<HTMLDivElement>, buttonIndex: number) => void;
    onClickNavigate: () => void;
    nullifyForm?: () => void;
    form: any;
}

const quizButtonStyles: CSSProperties = {
    boxSizing: 'border-box',
    fontSize: '16px',
    lineHeight: '16px',
    minWidth: '189px',
    border: '1px solid #5BC1ED',
    borderRadius: '8px',
}

export const QuizButton = ({
    content,
    style,
    index,
    multiple,
    navigation,
    value
}: QuizButtonProps) => {
    const { pathname } = useLocation()
    const { setMultipleAnswers, setSingleAnswer, onClickNavigate, form } = useContext<FormContextProps>(FormContext)

    const visualiseClick = form?.[pathname]?.[index]?.clicked


    return (
        <>
            <div
                className={styles.hover}
                onClick={(e) => {
                    navigation
                        ? (onClickNavigate())
                        : (multiple
                            ? setMultipleAnswers(e, index)

                            : setSingleAnswer(e, index)
                        )
                }}
                data-value={value || ""}
                style={{
                    ...quizButtonStyles,
                    ...(visualiseClick && { backgroundColor: '#EDFFC3' }),
                    ...style,
                }}
            >
                <p style={{ margin: '0' }}>{content}</p>
            </div >
        </>
    );
};