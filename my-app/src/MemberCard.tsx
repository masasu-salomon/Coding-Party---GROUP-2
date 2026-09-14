// Author: Victor
// Updated by: Salomon Uwimana Masasu (Task 27)
// Task 11: Define an interface for MemberCard props with name and role properties
// Task 14: Add a numeric prop called tasksCompleted
// Task 15: Add a boolean prop called isActive
// Task 17: Add an optional bio prop using the ? modifier
import type { CSSProperties } from 'react'
import './MemberCard.css'

export interface Member {
  id: string
  name: string
  role: string
  tasksCompleted: number
  isActive: boolean
  bio?: string
}

interface MemberCardProps extends Member {
  onRemove: (id: string) => void
  onToggleStatus: (id: string) => void
}

// Task 12: Display the name and role values inside MemberCard
// Task 19: Provide a default value for one prop using a default function parameter
function MemberCard({
  id,
  name,
  role,
  tasksCompleted = 0,
  isActive,
  bio,
  onRemove,
  onToggleStatus,
}: MemberCardProps) {
  const tasksStyle: CSSProperties = { marginTop: '8px' }

  return (
    <article className={`member-card ${isActive ? 'active' : 'inactive'}`}>
      <h2 className="member-name">{name}</h2>
      <p className="member-role">Role: {role}</p>
      <p className="member-tasks" style={tasksStyle}>
        Tasks Completed: {tasksCompleted}
      </p>
      {/* Task 16: Display Active or Inactive based on the value of isActive */}
      <p className={`member-status ${isActive ? 'active' : 'inactive'}`}>
        Status: {isActive ? 'Active' : 'Inactive'}
      </p>
      {/* Task 18: Display the bio only when one is provided */}
      {bio && <p className="member-bio">Bio: {bio}</p>}
      <div className="member-actions">
        <button type="button" onClick={() => onToggleStatus(id)}>
          {isActive ? 'Set Inactive' : 'Set Active'}
        </button>
        <button type="button" onClick={() => onRemove(id)}>
          Remove
        </button>
      </div>
    </article>
  )
}

export default MemberCard
