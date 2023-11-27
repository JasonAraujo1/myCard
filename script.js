const repositories = document.querySelector('.content-main');

function getApiGitHub(){
    fetch('https://api.github.com/users/JasonAraujo1/repos')
    .then(async res => {
        if( !res.ok){
            throw new Error(res.status);
        }
    let data = await res.json();
    console.log(data)
    data.map(item =>{
        let project = document.createElement('div');

        project.innerHTML = `
        <div class="img-photo">
               ${ item.followers_url}
        </div>

        <div class="apis">

        </div>
                
        
        
        `




        repositories.appendChild(project)
    })
  })
}

getApiGitHub()