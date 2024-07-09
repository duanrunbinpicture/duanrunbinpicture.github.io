var gitalk = new Gitalk({  
  clientID: 'Ov23li9SsRi1lAb6UaIh',  
  clientSecret: '451fda6f8550702627826d0c4e47224ebb653563',  
  repo: 'duanrunbinpicture.github.io',  
  owner: 'duanruunbinpicture',  
  admin: ['duanrunbinpicture'], // 可以是数组，包含多个管理员  
  id: location.pathname, // 页面的唯一标识，用于定位GitHub Issues  
  distractionFreeMode: false // 是否启用无干扰模式  
});  
gitalk.render('gitalk-container');
