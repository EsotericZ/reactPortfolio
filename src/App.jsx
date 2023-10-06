import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css'

import { Profile } from './components/profile/Profile';

export const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Profile />} />
        )
    )

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}