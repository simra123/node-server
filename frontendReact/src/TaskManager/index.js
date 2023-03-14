import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import { useStore } from "../zustand";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
export const URL = "http://localhost:5000/api/v1";

const Todo = () => {
	const [allTasks, setAllTasks] = useState([]);
	const [addTask, setAddTask] = useState("");
	const [success, setSuccess] = useState(false);
	const [success2, setSuccess2] = useState(false);
	const queryClient = useQueryClient();
	//url
	const { add, inc, dark, toggleDark } = useStore((state) => state);

	const getTasks = async () => {
		try {
			const res = await axios.get(`${URL}/tasks`);
			const { data } = res;
			return data?.tasks;
		} catch (error) {
			return error;
		}
	};
	const useGet = useQuery({
		queryKey: ["tasks"],
		queryFn: getTasks,
	});
	const usePost = useMutation({
		mutationFn: (newTask) => {
			return axios.post(
				`${URL}/tasks`,
				{
					name: newTask,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
		},
		onSuccess: () => {
			queryClient.invalidateQueries(["tasks"], { exact: true });
			setAddTask("");
		},
	});
	const postTask = async (e) => {
		e.preventDefault();
		usePost.mutate(addTask);
	};

	const { data, isLoading, isError, error } = useGet;
	// useEffect(() => {
	//
	//   getTasks();
	// }, [allTasks]);
	const useDelete = useMutation({
		mutationFn: (id) => {
			return axios.delete(`${URL}/tasks/${id}`);
		},
		onSuccess: () => {
			queryClient.invalidateQueries(["tasks"], { exact: true });
		},
	});

	const deleteTask = (id) => {
		useDelete.mutate(id);
		// try {
		// 	axios.delete(`${URL}/tasks/${id}`);
		// 	setSuccess(true);
		// 	setTimeout(() => {
		// 		setSuccess(false);
		// 	}, 1000);
		// } catch (error) {cd
		// 	console.log(error);
		// }
	};

	return (
		<div className={`main-div all-tasks `}>
			<div className='alerts'>
				{useDelete.status == "success" ? (
					<p className='text-light bg-danger p-2 mt-3'>
						{" "}
						deleted successfully!
					</p>
				) : null}
				{usePost.status == "success" ? (
					<p className='text-light bg-success p-2 mt-3'>
						Task Added Successfully!
					</p>
				) : null}
			</div>

			<div className={`center-div ${dark ? "dark-theme" : ""}`}>
				<button onClick={inc}> add</button> {add}
				<button onClick={toggleDark}> switch to dark</button> {dark}
				<h1>ToDo list</h1>
				<form onSubmit={postTask}>
					<input
						type='text'
						onChange={(e) => {
							setAddTask(e.target.value);
						}}
						value={addTask}
						placeholder='add item...'
					/>
					<Button
						disabled={usePost.isLoading}
						type='submit'
						variant='dark'>
						{" "}
						+{" "}
					</Button>
				</form>
				<ol>
					{isLoading && usePost.isLoading && useDelete.isLoading
						? "loading....."
						: data
						? data.reverse().map((val, index) => {
								return (
									<div
										className='todocomp'
										key={index}>
										<input
											type='checkbox'
											checked={val.completed}
										/>
										<p
											style={{
												textDecoration: val.completed ? "line-through" : "none",
											}}>
											{" "}
											{val.name}{" "}
										</p>
										<div className='actions'>
											<span onClick={(e) => deleteTask(val._id)}>
												<AiFillDelete
													size={23}
													color='red'
												/>
											</span>
											<Link to={`/edit/${val._id}`}>
												<span>
													<FaEdit
														size={23}
														color='green'
													/>
												</span>
											</Link>
										</div>
									</div>
								);
						  })
						: null}

					{!data && !isLoading ? "No List Found" : null}
				</ol>
			</div>
		</div>
	);
};
export default Todo;
