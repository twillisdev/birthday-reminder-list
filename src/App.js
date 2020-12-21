import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  return (
  <main>
    <section className='container'>
      <h3> Let's Celebrate Today's Birthdays! ({people.length})</h3>
      <List people={people} />
      <button onClick={() => setPeople([])}>clear the list</button>
    </section>
  </main>
  );
}

export default App;
