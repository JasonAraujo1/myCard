const repositories = document.querySelector('.content-main');

function getApiGitHub() {
  fetch('https://api.github.com/users/JasonAraujo1')
    .then(async res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      let data = await res.json();

      // Criação de um elemento para exibir as informações do usuário
      let userInfo = document.createElement('div');
      userInfo.innerHTML = `
        <div class="img-photo">
          <div>
            <img src="${data.avatar_url}" alt="User Avatar">
          </div> 
        </div>
  
        <div class="apis">
          <p>Seguidores: ${data.followers}</p>
          <p>Repositórios públicos: ${data.public_repos}</p>
          <p>Localização: ${data.location}</p>
          <p>Email: ${data.email || 'Não disponível'}</p>
          <p>Link do GitHub: <a href="${data.html_url}" target="_blank">${data.login}</a></p>
        </div>
      `;

      repositories.appendChild(userInfo);
    })
    .catch(error => {
      console.error('Erro ao obter dados da API:', error);
    });
}

getApiGitHub();
