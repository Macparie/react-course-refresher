import {CORE_CONCEPTS} from './data.js'
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';





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
        
          </ul>
        </section>
        <section id="examples" >

        <h2>ExMPLES</h2>
          <menu>
          <TabButton>Macparie</TabButton>
            <TabButton>Iremide</TabButton>
            <TabButton>Jemie</TabButton>
          </menu>
          
           
        </section>
      </main>
    </div>
  );
}

export default App;
