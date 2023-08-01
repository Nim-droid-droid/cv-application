import { useState } from "react"

export default function Education(){
  // when hovering over section, show add btn & add Experience (user input) to page
  const [hover, setHover] = useState({display: 'none'});

  return(
    <>
        <h1>Education</h1>
        <hr />
        <form action="">
{/* Hidden Button in the box. Move mouse in the box */}
        <div style={{border: '1px solid gray', width: 300, height: 300, padding: 10, margin: 100}}
                 onMouseEnter={e => {
                     setHover({display: 'block'});
                 }}
                 onMouseLeave={e => {
                     setHover({display: 'none'})
                 }}
            >
                <button style={hover}>Click</button>
            </div>
        </form>
    </>
  )
}