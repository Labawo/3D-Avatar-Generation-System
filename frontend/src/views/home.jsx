import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/auth';

const Home = () => {
    const [isLoggedIn, user] = useAuthStore((state) => [
        state.isLoggedIn,
        state.user,
    ]);
    return (
        <div>
            {isLoggedIn() ? <LoggedInView user={user()} /> : <LoggedOutView />}
        </div>
    );
};

const LoggedInView = ({ user }) => {
    return (
        <div>
            <h1>Welcome {user.username}</h1>
            <div className="button-container">
                <Link to="/images">
                    <button>Images</button>
                </Link>
                <Link to="/project">
                    <button>3D Project</button>
                </Link>
                <Link to="/projects">
                    <button>Projects</button>
                </Link>
                <Link to="/logout">
                    <button>Logout</button>
                </Link>
            </div>
            
        </div>
    );
};

export const LoggedOutView = ({ title = '3D Avatar generating system' }) => {
    return (
        <div>
            <h1>{title}</h1>
            <div className="button-container">
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/register">
                    <button>Register</button>
                </Link>
            </div>          
        </div>
    );
};

export default Home;
