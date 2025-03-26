import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './components/Form'
import Articles from './components/Articles'

function App() {
  /* Milestone 1**
  Creare una pagina che visualizzi una lista di articoli, mostrandone solo il titolo.
  Milestone 2 Aggiungiamo in pagina un semplice form con un campo input in cui inserire il titolo di un nuovo articolo del blog. Al submit del form, mostrare la lista degli articoli aggiornati.
 */
  const articles = [{
    id: 1,
    titolo: "Come migliorare la produttività",
    text: "Scopri 10 strategie efficaci per aumentare la produttività nel lavoro quotidiano."
  },
  {
    id: 2,
    titolo: "Guida all'alimentazione sana",
    text: "Consigli pratici per seguire una dieta equilibrata e migliorare il tuo benessere."
  },
  {
    id: 3,
    titolo: "Viaggiare low cost: trucchi e consigli",
    text: "Come organizzare viaggi economici senza rinunciare al comfort e alla qualità."
  },
  {
    id: 4,
    titolo: "I benefici della meditazione",
    text: "Scopri come la meditazione può aiutarti a ridurre lo stress e migliorare la concentrazione."
  },
  {
    id: 5,
    titolo: "Sviluppo Web: le tecnologie del futuro",
    text: "Un'analisi delle nuove tendenze nel mondo dello sviluppo web e della programmazione."
  }]
  const [articleList, setArticleList] = useState(articles)
  const [title, setTitle] = useState('')
  const handleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setArticleList([...articleList, { id: articleList.length + 1, titolo: title, text: "" }]);
  }

  return (
    <>
      <Form changeHandler={handleChange} submitHandler={handleSubmit} />
      <Articles articles={articleList} />
    </>
  )
}

export default App
