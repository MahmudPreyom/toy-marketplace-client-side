import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
    useTitle('Blog')
    return (
        <div className="w-full max-w-xl mx-auto mt-8 mb-8 rounded p-3 bg-sky-300">
            <h1 className="text-center font-semibold mb-5 text-3xl">Blog Question And Answer</h1>
            <h2 className="font-bold bg-sky-200 p-2 rounded-lg">Que: <span className="font-normal"> What is an access token and refresh token? How do they work and where should we store them on the client-side?</span></h2>
            <h3 className="font-bold bg-sky-100 p-2">Ans: <span className="font-normal"> Access token: It contains all the information the server needs to know if the user / device can access the resource you are requesting or not. They are usually expired tokens with a short validity period. Refresh token: The refresh token is used to generate a new access token.</span></h3>
            <h2 className="font-bold bg-sky-200 p-2 rounded">Que: <span className="font-normal"> Compare SQL and NoSQL databases?</span></h2>
            <h3 className="font-bold bg-sky-100 p-2">Ans: <span className="font-normal"> SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</span></h3>
            <h2 className="font-bold bg-sky-200 p-2 rounded">Que: <span className="font-normal"> What is express js? What is Nest JS?</span></h2>
            <h3 className="font-bold bg-sky-100 p-2">Ans: <span className="font-normal"> Express is a node js web application framework that provides broad features for building web and mobile applications. Nest. js is a server-side Node. js framework that's great for building highly testable and maintainable backend applications.</span></h3>
            <h2 className="font-bold bg-sky-200 p-2 rounded">Que: <span className="font-normal"> What is MongoDB aggregate and how does it work?</span></h2>
            <h3 className="font-bold bg-sky-100 p-2">Ans: <span className="font-normal"> Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</span></h3>
        </div>
    );
};

export default Blog;