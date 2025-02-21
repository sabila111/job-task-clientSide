

const Banner = () => {
    return (
        <div className="flex items-center justify-center gap-10 bg-gradient-to-t from-indigo-700 to-white min-h-[600px]">
            <div>
                <img
                className="h-40 w-40 mb-40" 
                 src="https://i.ibb.co.com/67mkXgJ8/task.png" alt="" />
                </div>

           

            <div className="text-center">
                <h1 className="text-4xl font-bold uppercase">Organize Your Work, Simplify Your Life</h1>
                <p className="text-base font-normal mt-4">Effortlessly manage tasks, track progress, and achieve your goals with Taskify. The task manager that helps you prioritize, track, and complete your task efficiently. Stay organized, stay focused, and achive your goals effortlessly.</p>
                <button className="px-4 py-3 mt-5 rounded-xl bg-blue-800 text-white">Get started</button>
            </div>
            <div>
                <img 
                className="h-40 w-40 mt-60"
                src="https://i.ibb.co.com/rGhh8R9c/5.png" alt="" />
            </div>

           
        </div>
    );
};

export default Banner;