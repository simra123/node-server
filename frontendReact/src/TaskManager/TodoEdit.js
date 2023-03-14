import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import { Button } from "react-bootstrap";
import { URL } from "./index";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const TodoEdit = () => {
	const [updateTask, setUpdateTask] = useState("");
	const [completed, setCompleted] = useState(Boolean);
	// const [success, setSuccess] = useState(false);
	// const [error, setError] = useState(false);

	const comp = useRef(null);

	const { id } = useParams();
	const queryClient = useQueryClient();

	const getATask = async () => {
		const { data } = await axios.get(`${URL}/tasks/${id}`);
		try {
			return { name: data.tasks.name, completed: data.tasks.completed };
		} catch (error) {
			return error;
		}
	};
	const { data, isLoading } = useQuery({
		queryKey: ["tasks", id],
		queryFn: getATask,
	});

	const { status, mutate } = useMutation({
		mutationFn: (val) => {
			return axios.patch(`${URL}/tasks/${id}`, val);
		},
		onSuccess: () => {
			queryClient.invalidateQueries(["tasks"], { exact: true });
		},
	});
	const updateEvent = async (e) => {
		e.preventDefault();
		mutate({ name: updateEvent, completed: completed });
	};
	return (
		<div className='main-div'>
			<div className='center-div edit-task'>
				<h1>Edit Task</h1>

				{isLoading ? (
					"Loading........."
				) : (
					<form onSubmit={(e) => updateEvent(e)}>
						<input
							type='text'
							onChange={(e) => {
								setUpdateTask(e.target.value);
							}}
							value={data?.name}
							placeholder='...'
						/>
						<br />
						<div className='completed'>
							<input
								defaultChecked={data.completed}
								id='completed'
								type='checkbox'
								onClick={(e) => setCompleted(e.target.checked)}
							/>
							<label for='completed'> completed</label>
						</div>
						<br />
						<Button
							type='submit'
							variant='dark'>
							Update
						</Button>
					</form>
				)}

				{status == "success" ? (
					<>
						<p className='text-success bg-light p-2 mt-3'>
							successfully updated!
						</p>
						<Link to='/'>
							<Button variant='success'> Back Home?</Button>
						</Link>
					</>
				) : null}
				{status == "error" ? (
					<p className='text-light bg-danger p-2 mt-3'> something went wrong</p>
				) : null}
			</div>
		</div>
	);
};
export default TodoEdit;
