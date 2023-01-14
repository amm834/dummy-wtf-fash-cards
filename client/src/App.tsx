import {FormEvent, useEffect, useState} from 'react'

interface IDeck {
    _id: number,
    name: string,
}

function App() {
    const [name, setName] = useState('')
    const [decks, setDecks] = useState<IDeck[]>([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/decks`)
            .then(res => res.json())
            .then(res => setDecks(res?.decks))
    }, [name])


    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()

        await fetch(`${import.meta.env.VITE_API_URL}/decks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name})
        })
    };
    return (
        <main className="mx-auto container py-10">

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3">
                {decks && decks?.map(deck => <div
                    className="col-span-1 card w-96 bg-neutral text-neutral-content"
                    key={deck._id}
                >
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{deck?.name}</h2>
                        <p>Description</p>
                    </div>
                </div>)}
            </div>

            <form className="mt-3" onSubmit={onSubmit}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text hidden">Deck Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Type deck name here"
                        onChange={(e) => setName(e.target.value)}
                        className="input w-full max-w-xs"
                    />
                    <button className="mt-3 btn">Create</button>
                </div>
            </form>
        </main>

    )
}

export default App
