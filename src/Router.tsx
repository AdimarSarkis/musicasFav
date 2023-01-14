import { Routes, Route } from 'react-router-dom';
import { Event } from './pages/Event';
import { Home } from './pages/Home';

export function Router(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/music" element={<Event />} />
      <Route path="/music/:slug" element={<Event />} />
    </Routes>
  );
}