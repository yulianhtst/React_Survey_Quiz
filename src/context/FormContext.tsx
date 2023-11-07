import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const FormContext = createContext({});


export const FormProvider = ({
    children,
    paths,
}: any) => {
    const [form, setForm] = useState<any>({})
    const navigate = useNavigate();
    const { pathname } = useLocation()

    const nullifyForm = () => {
        setForm({})
    }


    const setMultipleAnswers = (e, buttonIndex) => {
        const answer = e.target.textContent;
        const clickedValue = form?.[pathname]?.[buttonIndex]?.answers;

        const buttonAtr = e.currentTarget.getAttribute('data-value');
        const enchancedAnswer = buttonAtr.concat(answer.toLowerCase().slice(3))

        if (clickedValue === answer) {
            setForm((prevForm) => ({
                ...prevForm,
                [pathname]: {
                    ...(prevForm[pathname] || {}), // Get the existing object at the index or create an empty object
                    [buttonIndex]: { clicked: false, answers: '' }, // Set the answer at the sub-index i
                },
            }));
        } else {
            setForm((prevForm) => ({
                ...prevForm,
                [pathname]: {
                    ...(prevForm[pathname] || {}), // Get the existing object at the index or create an empty object
                    [buttonIndex]: {
                        clicked: true, ...(enchancedAnswer
                            ? { answers: enchancedAnswer }
                            : { answers: answer })
                    }, // Set the answer at the sub-index i
                },
            }));
        }
    };
    const setSingleAnswer = (e: any, buttonIndex) => {
        const clickedValue = form?.[pathname]?.[buttonIndex]?.answers;

        const answer = e.target.textContent;
        const buttonAtr = e.currentTarget.getAttribute('data-value');
        const enchancedAnswer = buttonAtr.concat(answer.toLowerCase().slice(3))

        if (clickedValue === answer) {
            setForm((prevForm) => ({
                ...prevForm,
                [pathname]: {
                    [buttonIndex]: { clicked: false, answers: '' }, // Set the answer at the sub-index i
                },
            }));
        } else {
            setForm((prevForm) => ({
                ...prevForm,
                [pathname]: {
                    [buttonIndex]: {
                        clicked: true, ...(enchancedAnswer
                            ? { answers: enchancedAnswer }
                            : { answers: answer })
                    }, // Set the answer at the sub-index i
                },
            }));
        }
    };

    const onClickNavigate = () => {
        const a = paths.indexOf(pathname)
        if (a == 4) {
            navigate('/result')
            return
        }
        navigate(paths[a + 1])
    }



    return (
        <FormContext.Provider value={{
            setSingleAnswer,
            setMultipleAnswers,
            onClickNavigate,
            nullifyForm,
            form
        }}>
            {children}
        </FormContext.Provider>
    )
}