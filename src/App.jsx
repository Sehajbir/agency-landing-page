import React, { useState } from 'react'
import "./App.css"
import { LA, NY, pics, models } from './constants';
import { Slide } from 'react-slideshow-image';


function App() {

  const [activeTab, setActiveTab] = useState("home");

  const [loc, setLoc] = useState("LA");

  const [activePic, setActivePic] = useState(null);


  const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover'
  }
  const slideImages = [
    {
      url: models.model0,
      caption: 'Slide 1'
    },
    {
      url: models.model1,
      caption: 'Slide 2'
    },
    {
      url: models.model2,
      caption: 'Slide 3'
    },
    {
      url: models.model3,
      caption: 'Slide 3'
    },
    {
      url: models.model4,
      caption: 'Slide 3'
    },
  ];


  const openArtists = () =>{
    console.log("artists pane")
    setActiveTab("artists");
  }

  const openHome = () =>{
    setActiveTab("home");
  }

  const openAgency = () => {
    setActiveTab("agency");
    console.log("agency");
  }

  const hover = (section, id) => {
    setActivePic(section+id);
    document.getElementById(section+id).classList.add("selected");
    var artistPic = document.getElementById("artistPic");
    artistPic.style.setProperty("background", "url("+pics[section+id]+")");
    artistPic.style.setProperty("background-size", "cover");

  }

  const hoverOut = (section, id) => {
    document.getElementById(section+id).classList.remove("selected");
    var artistPic = document.getElementById("artistPic");
    artistPic.style.setProperty("background", "");
  }

  return (
    <>
      <ul className="cb-slideshow">
            <li><span>Image 01</span></li>
            <li><span>Image 02</span></li>
            <li><span>Image 03</span></li>
            <li><span>Image 04</span></li>
            <li><span>Image 05</span></li>
            <li><span>Image 06</span></li>
            <li><span>Image 07</span></li>
            <li><span>Image 08</span></li>
            <li><span>Image 09</span></li>
            <li><span>Image 10</span></li>
      </ul>

      <div className={activeTab + ' fixed top-0 h-16 bg-transparent w-full flex flex-row justify-center items-center gap-4 Anton text-white text-2xl z-10'}>
        <p className='w-32 text-right'><a className='cursor-pointer' onClick={openArtists}>ARTISTS</a></p>
        <p className='grow justify-center flex'><a className='cursor-pointer' onClick={openHome}>CREATIVE CLICK MEDIA</a></p>
        <p className='w-32'><a className='cursor-pointer' onClick={openAgency}>AGENCY</a></p>
      </div>

      <div id='artistsTab' className={activeTab == "artists" ? 'bg-white h-screen w-full absolute top-0 overflow-hidden artistsTabShown' : 'artistsTabHidden'}>
          <div className='flex flex-row h-full'>
            <div className="w-1/2 ">
              <div className="flex-col gap-2 mt-20 w-full h-full">
                <div>
                  <p className='ml-4 text-lg text-black Anton'>Locations</p>
                  <div className={loc + ' flex-col gap-8 ml-6 text-2xl text-gray-400 Anton'}>
                    <p className='flex'><a className='cursor-pointer' onClick={() => setLoc("LA")}>LA</a></p>
                    <p className='flex'><a className='cursor-pointer' onClick={() => setLoc("NY")}>NY</a></p>
                  </div>
                </div>

                {loc == "LA" ? 
                <div className="grid grid-cols-2 mt-10 mx-8 gap-8">

                  <div className='flex flex-col'>
                    {LA.photographers != undefined ? <p className='text-2xl Anton'>{LA.photographers.title}</p> : ""}
                    {LA.photographers.values.map((v, id) => 
                      <p><a onMouseEnter={() => hover("LAphotographer", id)} onMouseLeave={() => hoverOut("LAphotographer", id)} key={id} id={'LAphotographer'+id} className='ml-4 text-xl text-gray-600 Anton'>{v}</a></p>
                    )}
                  </div>

                  <div>
                    {LA.makeupArtists != undefined ? <p className='text-2xl Anton'>{LA.makeupArtists.title}</p> : ""}
                    {LA.makeupArtists.values.map((v, id) => 
                      <p><a onMouseEnter={() => hover("LAmakeUpArtists", id)} onMouseLeave={() => hoverOut("LAmakeUpArtists", id)} key={id} id={'LAmakeUpArtists'+id} className='ml-4 text-xl text-gray-600 Anton'>{v}</a></p>
                    )}
                  </div>

                  <div>
                    {LA.directors != undefined ? <p className='text-2xl Anton'>{LA.directors.title}</p> : ""}
                    {LA.directors.values.map((v, id) => 
                      <p><a onMouseEnter={() => hover("LAdirectors", id)} onMouseLeave={() => hoverOut("LAdirectors", id)} key={id} id={'LAdirectors'+id} className='ml-4 text-xl text-gray-600 Anton'>{v}</a></p>
                    )}
                  </div>

                  <div>
                    {LA.hairStylists != undefined ? <p className='text-2xl Anton'>{LA.hairStylists.title}</p> : ""}
                    {LA.hairStylists.values.map((v, id) => 
                      <p><a onMouseEnter={() => hover("LAhairStylists", id)} onMouseLeave={() => hoverOut("LAhairStylists", id)} key={id} id={'LAhairStylists'+id} className='ml-4 text-xl text-gray-600 Anton'>{v}</a></p>
                    )}
                  </div>

                  <div>
                    {LA.stylists != undefined ? <p className='text-2xl Anton'>{LA.stylists.title}</p> : ""}
                    {LA.stylists.values.map((v, id) => 
                      <p><a onMouseEnter={() => hover("LAstylists", id)} onMouseLeave={() => hoverOut("LAstylists", id)} key={id} id={'LAstylists'+id} className='ml-4 text-xl text-gray-600 Anton'>{v}</a></p>
                    )}
                  </div>

                </div>
                : 
                <div className="grid grid-cols-2 mt-10 mx-8 gap-8">

                  <div className='flex flex-col'>
                    {NY.photographers != undefined ? <p className='text-2xl Anton'>{NY.photographers.title}</p> : ""}
                    {NY.photographers.values.map((v, id) => 
                      <p><a onMouseEnter={() => hover("NYphotographer", id)} onMouseLeave={() => hoverOut("NYphotographer", id)} key={id} id={'NYphotographer'+id} className='ml-4 text-xl text-gray-600 Anton'>{v}</a></p>
                    )}
                  </div>

                  <div>
                    {NY.makeupArtists != undefined ? <p className='text-2xl Anton'>{NY.makeupArtists.title}</p> : ""}
                    {NY.makeupArtists.values.map((v, id) => 
                      <p><a onMouseEnter={() => hover("NYmakeUpArtists", id)} onMouseLeave={() => hoverOut("NYmakeUpArtists", id)} key={id} id={'NYmakeUpArtists'+id} className='ml-4 text-xl text-gray-600 Anton'>{v}</a></p>
                    )}
                  </div>

                  <div>
                    {NY.directors != undefined ? <p className='text-2xl Anton'>{NY.directors.title}</p> : ""}
                    {NY.directors.values.map((v, id) => 
                      <p><a onMouseEnter={() => hover("NYdirectors", id)} onMouseLeave={() => hoverOut("NYdirectors", id)} key={id} id={'NYdirectors'+id} className='ml-4 text-xl text-gray-600 Anton'>{v}</a></p>
                    )}
                  </div>

                  <div>
                    {NY.hairStylists != undefined ? <p className='text-2xl Anton'>{NY.hairStylists.title}</p> : ""}
                    {NY.hairStylists.values.map((v, id) => 
                      <p><a onMouseEnter={() => hover("NYhairStylists", id)} onMouseLeave={() => hoverOut("NYhairStylists", id)} key={id} id={'NYhairStylists'+id} className='ml-4 text-xl text-gray-600 Anton'>{v}</a></p>
                    )}
                  </div>

                  <div>
                    {NY.stylists != undefined ? <p className='text-2xl Anton'>{NY.stylists.title}</p> : ""}
                    {NY.stylists.values.map((v, id) => 
                      <p><a onMouseEnter={() => hover("NYstylists", id)} onMouseLeave={() => hoverOut("NYstylists", id)} key={id} id={'NYstylists'+id} className='ml-4 text-xl text-gray-600 Anton'>{v}</a></p>
                    )}
                  </div>

                </div>
                }
              </div>
            </div>
            <div className="flex flex-col grow mt-20 relative px-16">
              <div className='w-full h-full ml-32'>
                <div id="artistPic" className='w-3/5 h-3/5 mt-32'></div>
              </div>
            </div>
          </div>

      </div>

      <div id="agencyTab" className={activeTab == "agency" ? "bg-white h-screen w-full absolute top-0 overflow-hidden agencyTabShown" : "agencyTabHidden"}>
         <div className="flex flex-row h-full w-full">
            <div className="w-1/3"></div>
            <div className="w-1/3 flex justify-center items-center">
            <div className="slide-container w-full h-4/5 z-10">
              <Slide>
                {slideImages.map((slideImage, index)=> (
                    <div key={index}>
                      <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})`, 'height' : "80vh" }}>
                      </div>
                    </div>
                  ))} 
              </Slide>
            </div>
            </div>
            <div className="w-1/3">
              <div className="flex flex-col gap-8 mt-20 px-4">
                <p className='NovaSquare text-md'>
                  CreativeClick Media is a premier photography agency boasting offices in both Los Angeles and New York. We specialize in delivering unparalleled visual storytelling through a comprehensive team of talented photographers, makeup artists, hair stylists, directors, and stylists. From high-fashion editorials to commercial campaigns, our collaborative approach and diverse skill set ensure that every project we undertake exceeds expectations and leaves a lasting impression
                </p>

                <div className='flex flex-col gap-2'>
                    <p className='text-lg Anton'>LA</p>
                    <div className="flex flex-row gap-2 NovaSquare">
                      <div className='ml-8 w-1/2 '>
                          <p>3290 Meadowbrook Mall Road</p>
                          <p>Los Angeles, California(CA), 90024</p>
                      </div>
                      <div className="grow ">
                        <p>310-794-4926</p>
                        <p>info@CreativeClick.media</p>
                      </div>
                    </div>
                    <div></div>
                    <div></div>

                    <div className="flex flex-row gap-2 NovaSquare">
                      <div className='ml-8 w-1/2 '>
                          <p>Lakeisha R Henry</p>
                      </div>
                      <div className="grow ">
                        <p>lakeisha@CreativeClick.media</p>
                      </div>
                    </div>

                    <div className="flex flex-row gap-2 NovaSquare">
                      <div className='ml-8 w-1/2 '>
                          <p>Robert C Evans</p>
                      </div>
                      <div className="grow ">
                        <p>robert@CreativeClick.media</p>
                      </div>
                    </div>
                      
                    <div className="flex flex-row gap-2 NovaSquare">
                      <div className='ml-8 w-1/2 '>
                          <p>James M Greenberg</p>
                      </div>
                      <div className="grow ">
                        James@CreativeClick.media
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 NovaSquare">
                      <div className='ml-8 w-1/2 '>
                          <p>Elisa E Morris</p>
                      </div>
                      <div className="grow ">
                        <p>elisa@CreativeClick.media</p>
                      </div>
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <p className='text-lg Anton'>NY</p>
                    <div className="flex flex-row gap-2 NovaSquare">
                      <div className='ml-8 w-1/2 '>
                          <p>174 Oakwood Avenue</p>
                          <p>New York, New York(NY), 10022</p>
                      </div>
                      <div className="grow ">
                        <p>212-610-1620</p>
                      </div>
                    </div>
                    <div></div>
                    <div></div>

                    <div className="flex flex-row gap-2 NovaSquare">
                      <div className='ml-8 w-1/2 '>
                          <p>James S Billingsley</p>
                      </div>
                      <div className="grow ">
                        <p>jamesB@CreativeClick.media</p>
                      </div>
                    </div>

                    <div className="flex flex-row gap-2 NovaSquare">
                      <div className='ml-8 w-1/2 '>
                          <p>Ann M Breunig</p>
                      </div>
                      <div className="grow ">
                        <p>ann@CreativeClick.media</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
         </div>
      </div>


      <div className="fixed bottom-0 bg-transparent h-48 w-full flex justify-center items-center Anton text-9xl text-white">
          <p>CREATIVE CLICK MEDIA</p>
      </div>
    </>
  )
}

export default App