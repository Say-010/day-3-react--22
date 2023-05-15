import React from 'react';
import Profilecard from './Card/Profilecard'

const users = [
  {
    image: 'https://tse1.mm.bing.net/th?id=OIP.w4xdC_D4ZatjQpDeBBbaFQAAAA&pid=Api&P=0',

   // image: 'https://media.istockphoto.com/id/1435781294/photo/mid-adult-smiling-latin-businessman-in-office-using-credit-card-to-pay-online.jpg?s=1024x1024&w=is&k=20&c=1ygtn-oV3pmtZ-CseUQ4VE8bVTfzbhEDd8TcWBmki3Q=&h=50',
    designation: 'CEO Microsoft',
    name: 'Bill Gates',
    jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: 'https://kccitallahassee.com/wp-content/uploads/sample-profile-300x300.jpg',
    designation: 'CEO Tesla',
    name: 'Elon musk',
    jobDescription: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
  },
  {
    image: 'https://www.mtg-fl.com/wp-content/uploads/2019/09/sample-profile-pic1.png',
    designation: 'Founder of Amazon ',
    name: 'Jeff Bezos',
    jobDescription: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
  },
];

function App() {
  return (
    <div className="App">
       {users.map((user) => (
        <Profilecard
          // key={user.name}
          name={user.name}
          image={user.image}
          designation={user.designation}
          jobDescription={user.jobDescription}
        />
      ))}
    </div>
  );
}

export default App;





