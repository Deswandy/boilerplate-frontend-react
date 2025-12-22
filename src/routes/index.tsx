import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <h1>The reason I made this boilerplate</h1>
    <p>I have done these steps mutliple times, for multiple projects, and I'm too lazy to repeat the same thing over and over and over again.</p>
  </div>
}
