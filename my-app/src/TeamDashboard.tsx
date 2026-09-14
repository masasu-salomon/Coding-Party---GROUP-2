// Author: Salomon Uwimana Masasu
import type { JSX } from 'react'
import MemberCard from './MemberCard'

function TeamDashboard(): JSX.Element {
  return (
    <>
      <h1>Group 2 Team Dashboard</h1>
      <p>
        This application helps Group 2 organize members, track progress, and
        collaborate as we build our React and TypeScript project together.
      </p>
      <MemberCard />
    </>
  )
}

export default TeamDashboard
