import { useContext, useRef, useState, useEffect } from "react";
import styles from "./Button.module.scss"
import { FormContext } from "../../../context/FormContext";
import { useLocation } from "react-router-dom";

export const QuizButton = ({
    content,
    style,
    index,
    multiple,
    navigation,
    value
}: any) => {
    const { pathname } = useLocation()
    const { setMultipleAnswers, setSingleAnswer, onClickNavigate, form } = useContext<any>(FormContext)

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
                // onClick={handleClick}
                data-value={value||""}
                style={{
                    boxSizing: 'border-box',
                    fontSize: '16px',
                    lineHeight: '16px',
                    minWidth: '189px',
                    border: '1px solid #5BC1ED',
                    borderRadius: '8px',
                    ...(visualiseClick && { backgroundColor: '#EDFFC3' }),
                    ...style,
                }}
            >
                <p style={{ margin: '0' }}>{content}</p>
            </div >
        </>
    );
};