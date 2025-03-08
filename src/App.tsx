import Display from "./components/Display";
import Option from "./components/Option";
const App = () => {
  const questions= [
    {
      questionText: "Scratch is divided into how many sections?",
      option1: "3",
      option2: "2",
      option3: "1",
      option4: "4",
    },
    {
      questionText: "Is bread a class of carbohydrate?",
      option1: "Yes",
      option2: "I don't know",
      option3: "No",
      option4: "I guess",
    },
    {
      questionText: "Is this a Lion?",
      option1: "1",
      option2: "2",
      option3: "3",
      option4: "4",
    },
    {
      questionText: "What is this called?",
      option1: "3",
      option2: "2",
      option3: "1",
      option4: "4",
    },
  ];
  return (
    <>
      <h1>Quiz Application</h1>
      {questions.map((question) => (
        <>
          <Display question={question.questionText} />
          <Option option={question.option1} />
          <Option option={question.option2} />
          <Option option={question.option3} />
          <Option option={question.option4} />

        </>
      ))}
    </>
  );
};

export default App;
