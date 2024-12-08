import {CORE_CONCEPTS} from './data.js'
import Header from './components/Header.jsx';




function CoreConcept ({image, title, description}) {
  return(
    <div>
      <li>
      <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    </li>
    </div>
  );
}
function App() {
  return (
    <div>
      <Header ></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          <CoreConcept title={CORE_CONCEPTS[0].title}
           description={CORE_CONCEPTS[0].description}
           image={CORE_CONCEPTS[0].image}
           
           />

          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
