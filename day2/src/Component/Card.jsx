import React from 'react'
import data from "../data.json"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import ActionButton from './Actionbutton.jsx';


export default function InfoCard() {
    console.log(data.post)
  return (
    <div className="App row">
      <div className='total-ct'>
        Total count:{data.posts.length}
      </div>
    {
      data.posts.map((item)=>{
        return (
          <div className='col-lg-4 mb-3'> 
         <div >
            <Card style={{ width: '22rem' ,height:'400px'}} className='container'>
     
     <Card.Body>
       <Card.Title>{item.title}</Card.Title>
       <Card.Text>
        {item.body}
       </Card.Text>
       <Card.Text>
        <b>Likes</b> {item.reactions.likes}
        <br/>

        <b>Dislikes</b> {item.reactions.dislikes}
       </Card.Text>
        {item.userId==123 ?  <ActionButton/>:<p></p>}
     </Card.Body>
   </Card>
      </div>
          </div>
     
        )
      })
    }
      
    </div>
  )
}
