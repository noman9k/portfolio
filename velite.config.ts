import { defineCollection, defineConfig, s } from 'velite'


const meta = s
  .object({
    title: s.string().optional(),
    description: s.string().optional(),
    keywords: s.array(s.string()).optional()
  })
  .default({})


  const projects = defineCollection({
    name: 'Projects',
    pattern: 'projects/**/**.mdx',
    schema: s
     
        .object({
          id: s.string().max(20),
          title: s.string().max(99),
          date: s.string().max(30),
          featured: s.boolean().default(false),
          meta: meta,

          description: s.string().max(999).optional(),
          screens: s.array(s.string() ).default([]),
          screenShots: s.array(s.string()).default([]),
        
          body: s.mdx()
        })
        .transform(data => ({ ...data, permalink: `projects/${data.id}` }))
    }
  )
    






export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true
  },
  collections: { projects },
  prepare: collections => {
    const {projects} = collections
  }
})
