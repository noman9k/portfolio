import * as runtime from 'react/jsx-runtime'
import Image from 'next/image'

import { Card } from './card'
import {Meteors} from "./meteors";
import {Spotlight} from "./Spotlight";


const sharedComponents = {
  h1: (props: any) => <h1 className="text-2xl sm:text-4xl  font-bold text-slate-100" {...props} />,
  h2: (props: any) => <h2 className="text-2lg sm:text-3xl font-bold text-zinc-100" {...props} />,
  h3: (props: any) => <h3 className="text-base sm:text-2xl font-bold text-zinc-100" {...props} />,
  strong: (props: any) => <strong className="font-bold text-zinc-100" {...props} />,
  p: (props: any) => <p className="text-sm sm:text-lg text-slate-100" {...props} />,
  a: (props: any) => <a className="text-primary" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-4" {...props} />,
  li: (props: any) => <li className="text-slate-100" {...props} />,
    Card,
   Image,
  Meteors,
  Spotlight,


}

const useMDXComponent = (code: string) => {



  const fn = new Function(code)
  return fn({
   
   
     ...runtime }).default
}

interface MDXProps {
  code: string
  components?: Record<string, React.ComponentType>
  [key: string]: any
}

export const MDXContent = ({ code, components, ...props }: MDXProps) => {

  const Component = useMDXComponent(code)

  
  return <Component components={{ ...sharedComponents, ...components }} {...props} />
}
