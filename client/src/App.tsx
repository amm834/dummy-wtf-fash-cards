import {FormEvent, useState} from 'react'

function App() {
    const [name, setName] = useState('')


    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        console.log('hello')

        await fetch(`${import.meta.env.VITE_API_URL}/decks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name})
        })
    };
    return (
        <form className="grid place-items-center min-h-screen" onSubmit={onSubmit}>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text hidden">Deck Name</span>
                </label>
                <input
                    type="text"
                    placeholder="Type deck name here"
                    onChange={(e) => setName(e.target.value)}
                    className="input w-full max-w-xs"
                    style={{outline: 'none'}}
                />
            </div>
        </form>
    )
}

export default App
