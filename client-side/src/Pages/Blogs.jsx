import React, { useRef } from 'react';
import { FaPrint } from 'react-icons/fa';
import Pdf from 'react-to-pdf';
const Blogs = () => {
  const ref = useRef();
  const options = {
    orientation: 'portrait',
    unit: 'in',
    format: [12,12]
  };
  console.log(ref)
    return (
    <>
    <div className='container'>
      <Pdf targetRef={ref} filename="Blogs.pdf" options={options}>
          {
            ({toPdf})=><button onClick={toPdf} className='btn btn-danger'><FaPrint></FaPrint> Print to Pdf</button>
          }
      </Pdf>
    </div>
    <div className="container py-5" ref={ref}>
        <div className="row" >
        <div className="col-md-8 mx-auto">
          <h1 className="text-center mb-5">React Questions Answered</h1>

          <h2>What are the differences between uncontrolled and controlled components?</h2>
          <p>
            Uncontrolled components are form elements that store their own state.
            Controlled components, on the other hand, have their state managed by
            React. This means that when the user interacts with a controlled
            component, React updates the state and re-renders the component.
            Uncontrolled components are typically used for simple forms, while
            controlled components are used for more complex forms that require
            dynamic behavior.
          </p>

          <h2>How to validate React props using PropTypes</h2>
          <p>
            PropTypes is a library that allows you to define the types of props
            that a React component should receive. You can use PropTypes to
            validate that the props passed to your component are of the correct
            type. Here's an example of how to use PropTypes to validate a prop
            called "name" that should be a string:
          </p>
          
          <h2>What is the difference between Node.js and Express.js?</h2>
          <p>
            Node.js is a server-side JavaScript runtime that allows you to
            execute JavaScript code on the server. It provides a set of core
            modules for building server-side applications. Express.js is a
            framework built on top of Node.js that simplifies the process of
            building web applications. It provides a set of features for
            handling HTTP requests and responses, routing, and middleware
            management. In other words, Node.js is the foundation, and Express.js
            is a tool that makes building web applications on top of Node.js
            easier.
          </p>

          <h2>What is a custom hook, and why would you create a custom hook?</h2>
          <p>
            A custom hook is a function that uses React hooks to encapsulate
            behavior that can be reused across multiple components. By creating a
            custom hook, you can extract common logic from your components and
            reuse it without duplicating code. Custom hooks can also simplify
            complex logic by breaking it down into smaller, more manageable
            pieces. You might create a custom hook to abstract away complex state
            </p>
        </div>
        </div>
        
    </div>
    </>
    
    );
}

export default Blogs;