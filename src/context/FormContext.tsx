import { MouseEvent, MouseEventHandler, ReactNode, createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type FormContextProps = {
    setSingleAnswer: (e: MouseEvent<HTMLDivElement>, buttonIndex: number) => void;
    setMultipleAnswers: (e: MouseEvent<HTMLDivElement>, buttonIndex: number) => void;
    onClickNavigate: () => void;
    nullifyForm: () => void;
    form: any;
}

type FormProviderProps = {
    children: ReactNode;
    paths: Array<string>,
}

export const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider = ({
    children,
    paths,
}: FormProviderProps) => {
    const [form, setForm] = useState<any>({});
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const nullifyForm = () => {
        setForm({})
    }


    const setMultipleAnswers = (
        e: MouseEvent<HTMLDivElement>,
        buttonIndex: number
    ) => {
        const button = e.currentTarget
        const answer = button.textContent;

        const clickedValue = form?.[pathname]?.[buttonIndex]?.answers;

        const buttonAtr = e.currentTarget.getAttribute('data-value');
        const enchancedAnswer = buttonAtr.concat(answer.toLowerCase().slice(3))

        if (clickedValue === answer) {
            setForm((prevForm: any) => ({
                ...prevForm,
                [pathname]: {
                    ...(prevForm[pathname] || {}),
                    [buttonIndex]: { clicked: false, answers: '' },
                },
            }));
        } else {
            setForm((prevForm: any) => ({
                ...prevForm,
                [pathname]: {
                    ...(prevForm[pathname] || {}),
                    [buttonIndex]: {
                        clicked: true, ...(enchancedAnswer
                            ? { answers: enchancedAnswer }
                            : { answers: answer })
                    },
                },
            }));
        }
    };
    const setSingleAnswer = (
        e: MouseEvent<HTMLDivElement>,
        buttonIndex: number
    ) => {
        const clickedValue = form?.[pathname]?.[buttonIndex]?.answers;

        const button = e.currentTarget
        const answer = button.textContent;

        const buttonAtr = e.currentTarget.getAttribute('data-value');
        const enchancedAnswer = buttonAtr.concat(answer.toLowerCase().slice(3))

        if (clickedValue === answer) {
            setForm((prevForm: any) => ({
                ...prevForm,
                [pathname]: {
                    [buttonIndex]: { clicked: false, answers: '' },
                },
            }));
        } else {
            setForm((prevForm: any) => ({
                ...prevForm,
                [pathname]: {
                    [buttonIndex]: {
                        clicked: true, ...(enchancedAnswer
                            ? { answers: enchancedAnswer }
                            : { answers: answer })
                    },
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