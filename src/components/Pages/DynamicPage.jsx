import React from 'react';
import { useParams ,useSearchParams } from 'react-router-dom';

function DynamicPage() {
  let { category,id} = useParams(); // Destructure the route parameters
  let [searchParams,setSearchParams] = useParams();
  console.log(searchParams)
  console.log(searchParams.get('price'))
  console.log(searchParams.get('sort'))





  return (
    <>
      <h2>Post pages -{category}</h2>
      <h2>Post pages -{id}</h2>

    </>
  );
}

export default DynamicPage;

//use search param == use for parameter query==?price=1000