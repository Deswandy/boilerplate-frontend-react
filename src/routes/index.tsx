import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [clicks, setClicks] = useState(0);


  return <div>
    <h1>The reason I made this boilerplate</h1>
    <p>I have done these steps mutliple times, for multiple projects, and I'm too lazy to repeat the same thing over and over and over again.</p>
    <Button onClick={()=>{setClicks(clicks+1)}}>
      Click me! {clicks}
    </Button>
  </div>
}
