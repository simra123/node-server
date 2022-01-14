import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../App.css';
import { Button } from 'react-bootstrap'
import { URL } from './index'
import axios from 'axios'
const TodoEdit = () => {

    const [updateTask, setUpdateTask] = useState('')
    const [completed, setCompleted] = useState(Boolean)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const comp = useRef(null)

    const { id } = useParams()
    useEffect(() => {
        const getATask = async () => {
            try {
                const { data } = await axios.get(`${ URL }/tasks/${ id }`)
                setUpdateTask(data.tasks.name)
                comp.current.checked = data.tasks.completed

            } catch (error) {
                console.log(error)
            }
        }
        getATask()
    }, [])


    const updateEvent = async (e) => {
        e.preventDefault()
        try {
            await axios.patch(`${ URL }/tasks/${ id }`, {
                name: updateTask,
                completed: completed
            })
            setSuccess(true)
            setError(false)
            setUpdateTask(updateTask)
        } catch (error) {
            setError(true)
            console.log(error)
        }
    }
    return (
        <div className="main-div">
            <div className="center-div edit-task">
                <h1>Edit Task</h1>
                <form onSubmit={ (e) => updateEvent(e) } >
                    <input
                        type="text"
                        onChange={ (e) => {
                            setUpdateTask(e.target.value)
                        } }
                        value={ updateTask }
                        placeholder='...'
                    /> <br />
                    <div className='completed'>

                        <input ref={ comp } id="completed" type='checkbox' onClick={ (e) => setCompleted(e.target.checked) } />
                        <label for="completed"  > completed</label>
                    </div>
                    <br />
                    <Button type="submit" variant="dark"> Update </Button>
                </form>
                { success ? <> <p className='text-success bg-light p-2 mt-3'> successfully updated!</p>
                    <Link to="/"> <Button variant='success'> Back Home?</Button></Link></>
                    : null
                }
                {
                    error ? <p className='text-light bg-danger p-2 mt-3'> something went wrong</p>
                        : null
                }


            </div>
        </div>

    )

}
export default TodoEdit;

