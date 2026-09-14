// Author: Salomon Uwimana Masasu
// Updated by: Victor (Tasks 13, 20)
import type { JSX } from 'react'
import MemberCard from './MemberCard'

// Task 20: Create a typed array of member objects
interface Member {
  name: string;
  role: string;
  tasksCompleted: number;
  isActive: boolean;
  bio?: string;
}

// Task 20: Typed data array of member objects
const members: Member[] = [
  {
    name: "Salomon Uwimana Masasu",
    role: "Frontend Developer",
    tasksCompleted: 10,
    isActive: true,
    bio: "Passionate about building clean user interfaces with React.",
  },
  {
    name: "Victor",
    role: "Backend Developer",
    tasksCompleted: 5,
    isActive: true,
    // bio intentionally omitted to demonstrate Task 18 (optional rendering)
  },
  {
    name: "Alice Johnson",
    role: "UI/UX Designer",
    tasksCompleted: 3,
    isActive: false,
    bio: "Loves creating intuitive and accessible designs.",
  },
];

function TeamDashboard(): JSX.Element {
  return (
    <>
      <h1>Group 2 Team Dashboard</h1>
      <p>
        This application helps Group 2 organize members, track progress, and
        collaborate as we build our React and TypeScript project together.
      </p>
      {/* Task 20: Use .map() to render MemberCard components from the typed array */}
      {members.map((member, index) => (
        <MemberCard
          key={index}
          name={member.name}
          role={member.role}
          tasksCompleted={member.tasksCompleted}
          isActive={member.isActive}
          bio={member.bio}
        />
      ))}
    </>
  )
}

export default TeamDashboard
