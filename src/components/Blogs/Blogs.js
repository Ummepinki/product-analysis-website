import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='m-3 font-semibold mt-4'>1.What is context API?</h1>
            <p>
                Ans:The React Context API is a way for a React app. To effectively produce global variables that can be passed around.
                A method to pass props from parent to child component(s), by storing the props in a store(similar in Redux) and using these props from the store by child component(s) without actually passing them manually at each level of the component tree.
                Context is also touted as an easier, lighter approach to state management using Redux.

            </p>
            <h1 className='m-3 font-semibold'>2.What semantic Tag? </h1>
            <p> Ans: A semantic element clearly describes its meaning to both the browser and the developer.
                It's  UI is a UI component framework for theming websites. Treats words and classes as exchangeable concepts.
                It is a semantic element. Common examples of the nav elements are menus, tables, contents, and indexes.
            </p>
        </div>
    );
};

export default Blogs;