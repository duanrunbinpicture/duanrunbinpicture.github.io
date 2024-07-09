const gitalk = new Gitalk({
  clientID: 'Ov23li9SsRi1lAb6UaIh',
  clientSecret: '451fda6f8550702627826d0c4e47224ebb653563',
  repo: 'duanrunbinpicture.github.io',      // The repository of store comments,
  owner: 'duanrunbinpicture',
  admin: ['GitHub repo owner and collaborators, only these guys can initialize github issues'],
  id: location.pathname,      // Ensure uniqueness and length less than 50
  distractionFreeMode: false  // Facebook-like distraction free mode
})

gitalk.render('gitalk-container')
