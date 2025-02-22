import Banner from './Banner';
import AddTask from '../task/addTask/AddTask';
import PrivateRoute from '../privateRoute/PrivateRoute';
import TaskBoard from '../task/taskBoard/TaskBoard';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
          
           <PrivateRoute> <AddTask></AddTask></PrivateRoute> 
           <TaskBoard></TaskBoard>
        </div>
    );
};

export default Home;