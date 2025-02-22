import { useState } from "react";
import Swal from "sweetalert2";

const AddTask = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [showForm, setShowForm] = useState(false);

    const handleAddJobs = e => {
        e.preventDefault();
        const form = e.target;
        const category = form.category.value;
        const title = form.title.value;
        const description = form.description.value;
        const timestamp = startDate;
        const addReview = { category, title, description, timestamp };

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addReview)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success',
                    text: 'Added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
                form.reset();
                setShowForm(false);
            }
        })
        .catch(error => {
            console.error("catch error:", error);
        });
    };

    return (
        <div className='mt-10'>
            <h1 className='text-4xl font-bold text-center'>Task Management</h1>
            <div className='w-40 mx-auto my-10'>
                <button 
                    className='px-4 py-3 rounded-lg bg-blue-800 text-white' 
                    onClick={() => setShowForm(!showForm)}
                >
                    {showForm ? "Close Form" : "Add Task"}
                </button>
            </div>
            {showForm && (
                <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleAddJobs}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" name='title' placeholder="text" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Task Description</span>
                            </label>
                            <input type="text" name='description' placeholder="task description" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <input list="dropdown-options" id="options" name="category" placeholder="Category" className="input input-bordered w-full" />
                                <datalist id="dropdown-options">
                                    <option value="To-Do" />
                                    <option value="In Progress" />
                                    <option value="Done" />
                                </datalist>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="px-4 py-3 rounded-xl bg-blue-800 text-white">Add</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AddTask;
