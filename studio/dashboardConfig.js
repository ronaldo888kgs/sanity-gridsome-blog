export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6153649c42035c20641afc68',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-erx2j5js',
                  apiId: '7d4b3027-6a2f-45ec-9176-bbc4d49eadd6'
                },
                {
                  buildHookId: '6153649c9eb8201bf98dba54',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-2tjoayic',
                  apiId: 'ae36bdf3-8cd8-4ffa-8a16-54d3e01f7a40'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ronaldo888kgs/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-2tjoayic.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
