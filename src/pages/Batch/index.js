import { useState } from "react"

const Dixita = ({ batchmateName, sentGender }) => {
    const [gender, setGender] = useState("Girl")
    return (
        <div>
            Hello my name is {batchmateName}, and I am a {sentGender}
        </div>
    )
}

export default Dixita