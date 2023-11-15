import { CSSProperties } from "react";
import { ProgressBar } from "./ProgressBar";
import { QuizButton } from "./QuizButton";

type QuestionProps = {
    question: string;
    answers: Array<string>;
    index: number;
    multiple: boolean;
    value?: string;
};

const NextButtonStyle = {
    padding: '14px 40px',
    backgroundColor: '#C3EDFF',
};
const AnswerButtonStyle = {
    padding: '14px 40px 14px 20px',
}
const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    maxWidth: '1000px',
    margin: '0 auto',
};

const headingStyle: CSSProperties = {
    textAlign: 'center',
    fontFamily: 'Grange',
    lineHeight: '44px',
    fontWeight: '500',
    fontSize: '40px',
    width: '583px',
    margin: '0 auto',
};

const buttonContainerStyle: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '32px',
};

const navigationContainerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '32px',
    gap: '20px',
};


export const Question = ({
    answers,
    question,
    index,
    multiple,
    value
}: QuestionProps) => {


    return (
        <>
            <div style={containerStyle}>
                <div style={{ position: 'relative' }}>
                    <ProgressBar index={index} />
                    <div>
                        <h1 style={headingStyle}>
                            {question}
                        </h1>
                    </div>
                    <div style={buttonContainerStyle}>
                        {answers.map((answer, i) => (
                            <QuizButton
                                content={answer}
                                style={AnswerButtonStyle}
                                index={i}
                                key={i}
                                multiple={multiple}
                                value={value}
                            />
                        ))}
                    </div>
                    <div style={navigationContainerStyle}>
                        <a style={{ textDecoration: 'underline' }}>
                            Back
                        </a>
                        {index !== 4
                            ? <QuizButton navigation={true} style={NextButtonStyle} content={<a>Next question &rarr;</a>} />
                            : <QuizButton navigation={true} style={NextButtonStyle} content={<a>Discover your results</a>} />
                        }

                    </div>
                </div>

            </div >
        </>
    )
};
