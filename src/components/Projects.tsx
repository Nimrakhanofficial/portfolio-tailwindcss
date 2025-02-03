import React from 'react'
import Heading from './Heading'  
import Card from './Card'                       
               
const data = [
    {
        id: 0,
        title: "ChessBoard",
        desc: "This is a ChessBoard.",
        img: "/chessboard.png",
        tags: ["HTML", "CSS"],
    },
    {
        id: 1,
        title: "Calculator",
        desc: "Thi is a Calculator.",
        img: "/calculator.png",
        tags: ["HTML", "CSS"],
    },
    {
        id: 2,
        title: "Calendar",
        desc: "This is a Calendar.",
        img: "/calendar.png",
        tags: ["HTML", "CSS"],
    },
    {
        id: 3,
        title: "CV",
        desc: "This is a CV.",
        img: "/cv.png",
        tags: ["HTML", "CSS", "TS", "JS"],
    }
    ]

const Projects = () => {
  return (  
    <div id='projects' className='container pt-32'>
      <Heading title='MY PROJECTS' />
      <div className='grid gap-10 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>   
  ) 
} 

export default Projects  
 