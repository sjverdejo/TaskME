import '../assets/styles/Form.css'

function Form({submitFunc}) {
    function handleSubmit(event) {
        event.preventDefault()

        const form = event.target
        const formData = new FormData(form)
        const formJson = Object.fromEntries(formData.entries())
    }

    return (
        <div className='Form-Container'>
            <form onSubmit={handleSubmit}>
                
                <label>Task Name:</label>
                <input className='text-input' name='name' type='text' />
                
                <label>Task Description:</label>
                <textarea className='text-input' name='description'/>
                <input name='datecreated' type='date' defaultValue={Date.now()} hidden />
                <label>Task Due Date</label>
                <input name='datedue'type='date' />
                <input type='submit' />
            </form>
        </div>
    )
}

export default Form