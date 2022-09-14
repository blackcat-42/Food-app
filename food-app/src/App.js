import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Suspense } from 'react'
import { Fragment } from 'react'

import publicRoutes from '../src/routes/Routes'
import Loading from './Loading/Loading'
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout'

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <div className='App'>
          <Routes>
            {publicRoutes.map((route, index) =>{

              const Page = route.component
              let Layout = DefaultLayout

              if(route.layout){
                Layout = route.layout
              }else if(route.layout === null){
                Layout = Fragment
              }
              return (
                      <Route 
                        key={index} 
                        path={route.path} 
                        element={
                          <Layout>
                            <Page />
                          </Layout>
                        } />
              )
            })}
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
