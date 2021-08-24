import React from 'react';
import './App.css';

const App = () => (<Personlist/>);

const Personlist = () => {
  const people = [
    {
      img:22, name: 'mark', job:'developer'
    },
    {
      img:25, name: 'john', job:'designer'
    },
    {
      img:26, name: 'luke', job:'artist'
    }
  ] 
return (<section>

  <Person person = {people[0]} />
  <Person person = {people[1]}>
    Lorem ipsum dolor sit, amet consectetur 
    adipisicing elit. Invento
  </Person>
  <Person person = {people[2]}/>
</section>);
};

const Person = (props) => {
  const {img, name, job} = props.person;
  const {children} = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  return <div className = "Person" >
            <img src={url} alt=""/>
            <div>
              <h4>{name}</h4>
              <h4>{job}</h4>
              {children}
            </div>
         </div>
};


export default App;
