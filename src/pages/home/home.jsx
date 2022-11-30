export const Home = () => {

    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
   .then(response => response.json())
   .then(data => console.log(data));

   let newData = {...data};
    return(

    <>
        <h1>{newData}</h1>
    
    </>

    );

}