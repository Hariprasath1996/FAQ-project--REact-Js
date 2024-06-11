import { useState } from "react"

const FaqItem = ({ question, Answer }) => {
  const [show, setShow] = useState(false);
  const toggleShowAnswer = () => {
    setShow(!show)
  }
  return (
    <div className={`FaqItem-container ${show ? "active" : ""}`}>
      <div className="que-box" onClick={toggleShowAnswer}>
        {question}
      </div>
      <div className="Ans-Container">
        <div className="Ans">
          {Answer}
        </div>
      </div>
    </div>
  )
}
const Faq = ({ data }) => {
  return (
    <div className="Faq-container">
      <h1>FAQs</h1>
      {data.map((item) => (
        <FaqItem key={item.id} question={question} Answer={Answer}
        />
      ))}
    </div>
  )
}
const data = [
  {
    id: 1, question: "SampleQuestion ?", Answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis vitae quisquam aut quas odit quae quo corrupti laudantium, ad impedit."
  },
  {
    id: 2, question: "SampleQuestion ?", Answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis vitae quisquam aut quas odit quae quo corrupti laudantium, ad impedit."
  },
  {
    id: 3, question: "SampleQuestion ?", Answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis vitae quisquam aut quas odit quae quo corrupti laudantium, ad impedit."
  },
  {
    id: 3, question: "SampleQuestion ?", Answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis vitae quisquam aut quas odit quae quo corrupti laudantium, ad impedit."
  }
]
const App = () => {
  return (
    <>
      <div className="container">
        <Faq data={data} />
      </div>
    </>
  );
}

export default App;