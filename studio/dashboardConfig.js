export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '626670d84e2f107bd91593d3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4iiaripc',
                  apiId: 'edda7db5-3ab4-4108-9c17-65d8913d87e4'
                },
                {
                  buildHookId: '626670d8dadbc370d19b2e51',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-7wkyc19p',
                  apiId: '7775afa2-2f2a-4656-982d-477a567ad68e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ecl21/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-7wkyc19p.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
