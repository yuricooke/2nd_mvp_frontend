import React from 'react';


import Hikes from './pages/Hikes'
import HikeDetails from './pages/HikeDetails'
import Home from './pages/Home'

// Para navegar entre páginas de uma aplicação React, criaremos rotas 
// utilizando o https://reactrouter.com/en/main 
// Componentes que usuaremos da lib:
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      {/*BrowserRouter: ele fornece funcionalidade de roteamento de componentes. É a raiz/base.*/}
      <BrowserRouter>
        {/*Deixei essa parte comentada, mas para lembrar que elementos como o <nav> 
        devem ser criados dentro do <BrowserRouter>:         
        <nav style={{ zIndex: '9999', backgroundColor: 'red' }}>
          <Link to='/products'>Clique aqui para ver a lista de produtos</Link>
        </nav> */}


        {/*Routes: componente usado para definir as rotas da sua aplicação.
         Dentro deste componente, você pode especificar as diferentes rotas e
         os componentes que serão renderizados quando essas rotas forem acessadas. */}

        {/* Sempre que a localização/caminho muda, <Routes> examina todas as suas rotas filhas
         para encontrar a melhor correspondência */}
        <Routes>
          {/*Route: componente utilizado para definir uma rota específica na sua aplicação. 
           Ele recebe uma prop path para especificar a URL da rota e uma prop element para
            especificar o componente que será renderizado quando essa rota for acessada.*/}
          <Route path='/' element={<Home />}></Route>
          <Route path='/Hikes' element={<Hikes />}></Route>

          {/*Roteamento aninhado, onde id será o parâmetro do caminho*/}
          <Route path='/Hikes/:id' element={<HikeDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
