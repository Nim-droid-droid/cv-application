import { useState } from "react"

export default function Experience(){
  // when hovering over section, show add btn & add Experience (user input) to page
  const [hover, setHover] = useState({display: 'none' });

  return(
    <>
      <div>
        {/* when i hover over box outline the box */}
        <h2>Summary</h2>
        <hr />
        <textarea 
        name="postSummary" 
        rows={4} cols={40} 
        />
      </div>
      <div style={{border: '1px solid gray', width: 300, height: 300, padding: 10, margin: 100}}
                 onMouseEnter={e => {
                     setHover({display: 'block'});
                 }}
                 onMouseLeave={e => {
                     setHover({display: 'none'})
                 }}>
        {/* when i hovers over section outline the box & add remove btn & add Experience*/}
        <h1>Experience</h1>
        <hr />

        <div>
          <h2>Job Title</h2>
          <h4>Company</h4>
          <h4>City</h4>
        </div>

        <br />
        <label>From</label>
          {/* when hover above this remove btn appears below */}
          <input type="date" /> To <input type="date" />
        <br />
        <textarea name="postContent" rows={4} cols={40} />
        <button style={hover}>Add Summary</button>
      </div>
    </>
  )
}