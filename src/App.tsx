import Count from "./components/Count"
import Form from "./components/Form"
import Test from "./components/Test"


const App : React.FC = () => {
  return (
    <div>
      <Test firstName="Olaitan" job="I am a Software Dev." />
      <Test firstName="Ranju" job="I am a Dog Seller" />
      <Test firstName="Igbekele" job="I am a Cat Seller" />
      <Test firstName="Oscar" job="I buy and sell Alumi condemn" />
      <Count/>
      <Form/>
    </div>
  )
}

export default App
