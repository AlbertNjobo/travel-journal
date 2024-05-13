import './App.css'
import CardList from './components/cardlist/Cardlist'
import Header from './components/header/Header'
import data from './data.js'


function App() {


  const cards = data.map((item) => {
    return <CardList key={item.key} {...item} />;
  });

  return (
    <>
      <Header/>
      <section className='card-container'>{cards}</section>
      
    </>
  )
}

export default App
