import { useContext } from "react";
import Banner from "./Banner";
import AddTask from "../task/addTask/AddTask";
import TaskBoard from "../task/taskBoard/TaskBoard";
import { AuthContext } from "../provider/AuthProvider";

const Home = () => {
    const { user } = useContext(AuthContext); 

    return (
        <div>
            <Banner />
            
            {/* Show tasks only if user is logged in */}
            {user && (
                <>
                    <AddTask />
                    <TaskBoard />
                </>
            )}
        </div>
    );
};

export default Home;
