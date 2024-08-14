import { useState } from "react"

const Form: React.FC = () => {
    const [name, setName] = useState<string>('');
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(name);
        
    }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder="enter your name" value={name}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
