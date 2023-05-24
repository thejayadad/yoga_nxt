import React from 'react'
import signUp from './api/signup'
import { useRouter } from 'next/navigation'


const signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    
    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signUp(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/dashboard")
    }
  return (
    <div>signup
        <form onSubmit={handleForm}>
        <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
        <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
        <button type="submit">Sign up</button>
        </form>

    </div>
  )
}

export default signup