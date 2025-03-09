import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './routes';
import 'swiper/css';
import 'swiper/css/pagination';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Trazendo as rotas para serem renderizadas
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);