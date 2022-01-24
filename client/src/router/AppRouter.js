import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import SearchView from '../modules/search';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="search" element={<SearchView />}/>
                <Route path="company" element={<div>bye! </div>}/>
                <Route
                    path="*"
                    element={<Navigate to="search" />}/>
            </Routes>
        </Router>
    )
};

export default AppRouter;
