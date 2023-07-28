export default function Experience(){
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
      <div>
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
      </div>
    </>
  )
}