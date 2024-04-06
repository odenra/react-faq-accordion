import Accordion from "./Accordion"

const Faq = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg">
        <Accordion title='Do You Prefer Android or IOS' answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit."/>
        <Accordion title='Do You Prefer Android or IOS' answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit"/>
        <Accordion title='Do You Prefer Android or IOS' answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, dolore! Lorem ipsum dolor sit amet.."/>
    </div>
  )
}

export default Faq