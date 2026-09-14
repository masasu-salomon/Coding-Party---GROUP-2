// Author: Salomon Uwimana Masasu
// Updated by: Victor (Tasks 13, 20)
// Updated by: Samuel Dushimimana (Tasks 31-40)
import { useState } from 'react'
import type { ChangeEvent, FormEvent, JSX } from 'react'
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
  const [teamScore, setTeamScore] = useState<number>(0)
  const [newMemberName, setNewMemberName] = useState<string>("")

  const increaseScore = () => setTeamScore((score) => score + 1)
  const decreaseScore = () => setTeamScore((score) => Math.max(0, score - 1))

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewMemberName(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("New member submitted:", newMemberName)
    setNewMemberName("")
  }

  return (
    <>
      <h1>Group 2 Team Dashboard</h1>
      <p>
        This application helps Group 2 organize members, track progress, and
        collaborate as we build our React and TypeScript project together.
      </p>

      <section className="team-score">
        <p>Team Score: {teamScore}</p>
        <button onClick={increaseScore}>Increase Score</button>
        <button onClick={decreaseScore}>Decrease Score</button>
      </section>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMemberName}
          onChange={handleNameChange}
          placeholder="Enter new member name"
        />
        <button type="submit">Add Member</button>
      </form>

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
