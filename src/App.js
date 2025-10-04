import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase';
import { addUser, removeUser } from './features/userSlice';
import { createBrowserRouter, RouterProvider, useNavigate, Outlet } from 'react-router-dom';
import Login from './components/Login';
import Browse from './components/Browse';
import Header from './components/Header';


const AppLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      navigate('/browse');
    } else {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/browse',
        element: <Browse />,
      },
    ]
  },
]);

function App() {
  return (
      <RouterProvider router={appRouter} />
  );
}

export default App;
