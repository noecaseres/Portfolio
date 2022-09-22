import React, {useState} from 'react';
import { useEffect} from 'react';


export const ModalWorks = () => {

  const projects = [
    {
      id: "jvDdBP06yRQ",
      title: "Movies App",
      preview: "images/moviesApp/img1.jpg",
      description: "A web application that allow users to find an specific movie or search by rating.",
      githubURL: "https://github.com/noecaseres/Movies-App",
      techused : [
        {id:"1",tech:"HTML5"},
        {id:"2",tech:"CSS3"},
        {id:"3",tech:"ReactJS"},
        {id:"4",tech:"React-Router-Dom"},
        {id:"5",tech:"Bootstrap"}
      ]
    },
    {
      id: "_SaJls3EzSg",
      title: "Grocery List",
      preview: "images/todoList/img1.jpg",
      description: "A simple, clear, and intuitive grocery list that allows users to check each item as done while they do the groceries.",
      githubURL: "https://github.com/noecaseres/Grocery-List",
      techused : [
        {id:"1",tech:"HTML5"},
        {id:"2",tech:"CSS3"},
        {id:"3",tech:"ReactJS"},
        {id:"4",tech:"React-Router-Dom"},
        {id:"5",tech:"Bootstrap"}
      ]
    },
    {
      id: "aciXC2EQnX0",
      title: "Color Generator",
      preview: "images/colorGenerator/img1.jpg",
      description: "A tint and shades color generator app. Simple and nice user interface design. An application with functionalities that could be useful in other projects.",
      githubURL: "https://github.com/noecaseres/Color-generator",
      techused : [
        {id:"1",tech:"HTML5"},
        {id:"2",tech:"CSS3"},
        {id:"3",tech:"ReactJS"},
        {id:"4",tech:"Sass"},

      ]
    },
    {
      id: "cZ2Dl3k-BPM",
      title: "Restaurant Menu",
      preview: "images/restaurantMenu/img1.jpg",
      description: "This project has fast and clear behaviors that we required in a traditional menu as a user. With a clear UI, easy navigating between sections, and readable layout.",
      githubURL: "https://github.com/noecaseres/Restaurant-Menu",
      techused : [
        {id:"1",tech:"HTML5"},
        {id:"2",tech:"CSS3"},
        {id:"3",tech:"ReactJS"},
      ]
    }
  ]

    const [modal, setModal] = useState(false);
    const [projectSelect, setProjectSelect] = useState();
    const [loading, setLoading] = useState(true);
    const [videoSelected, setVideoSelected] = useState();


    const toggleModal = (project) =>{
      setModal(!modal);
      setProjectSelect(project) //Almaceno el project clickeado para luego usarlo en el modal  
    }

   

    const getById = async () => {
      try{
        const videoURL = `https://www.youtube.com/embed/${projectSelect.id}?playlist=${projectSelect.id}&rel=0&controls=0&autoplay=1&muted=1&loop=1&showinfo=0`
        setVideoSelected(videoURL);
        setLoading(false);  
       
      }catch(error){
        console.log(`Error:${error}`)
      }

    } 
    
    

    useEffect(() => {
      if(projectSelect){
        getById();
      }
    }, [projectSelect])
    

  
    if(modal) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal');
    }

  return (
    <div className='portfolio-container'>
      {
        projects.map((project)=>
          (
            <div className='project-container' key={project.id} onClick={()=>{toggleModal(project)}}>
              <div className='project-overlay'>
                <h3>{project.title}</h3>
              </div>
              <img src={project.preview} className="cover-photo"/>          
            </div>
          )
        )
      }
      {modal && (
                <div className={`modal ${modal && 'modal hide'}`}>
                    <div onClick={toggleModal} className="overlay"></div>
                      <div className="modal-container">
                        <div className='modal-content'>
                          {
                            loading
                            ? <div>Loading</div>
                            : <iframe src={videoSelected} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                          }
                          <div className='modal-text'>
                            <h3>{projectSelect.title}</h3>
                            <p>{projectSelect.description}</p>
                            <h4>Tech used:</h4>
                            <ul>
                              {
                                projectSelect.techused.map((elem)=>
                                  (
                                    <li key={elem.id} className="tech-pill">{elem.tech}</li>
                                  )
                                )
                              }
                            </ul>
                            <button className='github-anchor'>
                              <a href={projectSelect.githubURL} target="_blank"><img src="images/icons/github.png"/><p>View on Github</p></a>
                            </button>
                          </div>
                        </div>
                        <button className="close-modal" onClick={toggleModal}>
                            Close
                        </button>
                    </div>
                </div>
               )
              }
      
    </div>
  )
}