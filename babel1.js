const First = (props) =>{
  return(


<li className='con'>

<div className='container'>
<div className='avatar'>
  <img src={props.src}></img>
  <div className='details'>
<p>
  {props.title}

</p>

<div className='hd'>

	<a  href={props.href}>Download</a>

</div>
</div>
</div>
</div>

</li>
  )
  
}


const App = () => {
  return(
     <span>
                <First src='img/thegrayman.jpg'
         title='The Gray Man (2022) HD 720p Tamil Dubbed Movie Watch Online'  
         href='https://dulink.in/RKcV'
     
          />
          <First src='img/anythingspossible.jpg'
         title='Anything’s Possible (2022) Tamil Dubbed Movie HD 720p Watch Online'  
         href='https://dulink.in/8GbU'
     
          />
          <First src='img/jurassic.jpg'
         title='Jurassic World Dominion (2022) Tamil Dubbed Movie HQ HDRip 720p Watch Online'  
         href='https://dulink.in/HsO59'
     
          />
          <First src='img/shoorveer.jpg'
         title='Shoorveer – S01 (2022) Tamil Dubbed Series HQ HDRip 720p Watch Online'  
         href='https://dulink.in/IPeh'
     
          />
          <First src='img/thorloveandthunder.jpg'
         title='Thor: Love and Thunder (2022) Tamil Dubbed Movie HDCAMRip 720p Watch Online'  
         href='https://dulink.in/MtDz'
     
          />
          <First src='img/persuasion.jpg'
         title='Persuasion (2022) Tamil Dubbed Movie HD 720p Watch Online'  
         href='https://dulink.in/TrhI'
     
          />
          <First src='img/residentevil.jpg'
         title='Resident Evil – S01 (2022) Tamil Dubbed Series HD 720p Watch Online'  
         href='https://dulink.in/1gTEY'
     
          />

    </span>
  )
      }


