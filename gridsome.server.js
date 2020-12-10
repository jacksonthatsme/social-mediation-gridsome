const axios = require('axios')
const fs = require('fs')
const siteId = '5c0dde440e5255498a363560'

module.exports = function (api) {
  api.loadSource(async actions => {
    const { data } = await axios.get(`https://api.siteleaf.com/v2/sites/${siteId}/pages`, {
      auth: {
        username: process.env.API_KEY,
        password: process.env.API_SECRET,
      }
    })
    const collection = actions.addCollection({
      typeName: 'Pages'
    })

    for (const item of data) {
      collection.addNode({
        id: item.id,
        title: item.title,
        body: item.body,
        path: item.path
      })
    }
  })
  api.loadSource(async actions => {
    const { data } = await axios.get(`https://api.siteleaf.com/v2/sites/${siteId}/collections/contributors/documents`, {
      auth: {
        username: process.env.API_KEY,
        password: process.env.API_SECRET,
      }
    })
    const collection = actions.addCollection({
      typeName: 'People'
    })

    const allUploads = await axios.get('https://api.github.com/repos/jacksonthatsme/social-mediation/contents/uploads?ref=gh-pages', {
      headers: {
        'Authorization': `token ${process.env.GITHUB_PAT}`
      }
    })

    for (const item of data) {
      let uploadName = item.metadata.image.replace('/uploads/','').replace(/%20| /g,' ');; 
      var imageSHA 

      allUploads.data.forEach(function(image) {
        let imageName = image.path.replace('uploads/','')
        if(imageName == uploadName) {
          imageSHA = image.sha 
        }
      })

      let imageBlob = await axios.get(`https://api.github.com/repos/jacksonthatsme/social-mediation/git/blobs/${imageSHA}`, {
        headers: {
          'Authorization': `token ${process.env.GITHUB_PAT}`
        }
      })

      var imageData = imageBlob.data.content

      let buf = new Buffer.from(imageData, 'base64');
      fs.writeFile(__dirname + `/src/assets/images/${uploadName}`, buf, err => {
          if (err) throw err;
          console.log('Saved!');
      });
      collection.addNode({
        id: item.id,
        name: item.title,
        imgPath: `~/assets/images/${uploadName}`,
        img: uploadName
      })
    }
  })
  api.loadSource(async ({addCollection, getCollection}) => {
    const { data } = await axios.get(`https://api.siteleaf.com/v2/sites/${siteId}/collections/episodes/documents`, {
      auth: {
        username: process.env.API_KEY,
        password: process.env.API_SECRET,
      }
    })
    const collection = addCollection('Episode')
    collection.addReference('panelists', 'People')
    const people = getCollection('People').data()

    for (const item of data) {
      let panelistsArray = []
      await Promise.all(people.map(panelist => {
        for (const contributor of item.metadata.contributors) {
          if (contributor == panelist.name) {
            panelistsArray.push(panelist.id)
          }
        } 
      }))
      collection.addNode({
        id: item.id,
        title: item.title,
        slug: item.path,
        body: item.body,
        date: item.date,
        panelists: panelistsArray
      })
    }
  })
}