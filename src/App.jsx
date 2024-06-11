import { useState } from "react"

const FaqItem = () => {
  const[show,setShow] = useState(false);
  const toggleShowAnswer= ()=>{
    setShow(!show)
  }
  return (
    <div className={`FaqItem-container ${show ? "active" : ""}`}>
      <div className="que-box" onClick={toggleShowAnswer}>
          Sample Question ?
      </div>
      <div className="Ans-Container">
        <div className="Ans">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis vitae quisquam aut quas odit quae quo corrupti laudantium, ad impedit.
        </div>
      </div>
    </div>
  )
}
const Faq = () => {
  return (
    <div className="Faq-container">
      <h1>FAQs</h1>
      <FaqItem />
      <FaqItem />
      <FaqItem />
      <FaqItem />
      <FaqItem />
    </div>
  )
}
const App = () => {
  return (
    <>
      <div className="container">
        <Faq />
      </div>
    </>
  );
}

export default App;