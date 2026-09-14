// Author: Salomon Uwimana Masasu
// Updated by: Victor (Tasks 13, 20)
// Updated by: Samuel Dushimimana (Tasks 31-40)
// Updated by: Salomon Uwimana Masasu (Tasks 41-50)
import { useState } from 'react'
import type { ChangeEvent, FormEvent, JSX } from 'react'
import MemberCard, { type Member } from './MemberCard'
import './TeamDashboard.css'

type StatusFilter = 'all' | 'active' | 'inactive'

const initialMembers: Member[] = [
  {
    id: '1',
    name: 'Salomon Uwimana Masasu',
    role: 'Frontend Developer',
    tasksCompleted: 10,
    isActive: true,
    bio: 'Passionate about building clean user interfaces with React.',
  },
  {
    id: '2',
    name: 'Victor',
    role: 'Backend Developer',
    tasksCompleted: 5,
    isActive: true,
  },
  {
    id: '3',
    name: 'Alice Johnson',
    role: 'UI/UX Designer',
    tasksCompleted: 3,
    isActive: false,
    bio: 'Loves creating intuitive and accessible designs.',
  },
]

function TeamDashboard(): JSX.Element {
  const [teamScore, setTeamScore] = useState<number>(0)
  const [newMemberName, setNewMemberName] = useState<string>('')
  const [members, setMembers] = useState<Member[]>(initialMembers)
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const increaseScore = () => setTeamScore((score) => score + 1)
  const decreaseScore = () => setTeamScore((score) => Math.max(0, score - 1))

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewMemberName(event.target.value)
  }

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmedName = newMemberName.trim()
    console.log('New member submitted:', trimmedName)

    if (!trimmedName) {
      return
    }

    const newMember: Member = {
      id: crypto.randomUUID(),
      name: trimmedName,
      role: 'Team Member',
      tasksCompleted: 0,
      isActive: true,
    }

    setMembers((currentMembers) => [...currentMembers, newMember])
    setNewMemberName('')
  }

  const handleRemove = (id: string) => {
    setMembers((currentMembers) =>
      currentMembers.filter((member) => member.id !== id),
    )
  }

  const handleToggleStatus = (id: string) => {
    setMembers((currentMembers) =>
      currentMembers.map((member) =>
        member.id === id ? { ...member, isActive: !member.isActive } : member,
      ),
    )
  }

  const visibleMembers = members.filter((member) => {
    const matchesStatus =
      statusFilter === 'all' ||
      (statusFilter === 'active' ? member.isActive : !member.isActive)
    const matchesSearch = member.name
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase())
    return matchesStatus && matchesSearch
  })

  return (
    <>
      <h1>Group 2 Team Dashboard</h1>
      <p>
        This application helps Group 2 organize members, track progress, and
        collaborate as we build our React and TypeScript project together.
      </p>

      <section className="team-score">
        <p>Team Score: {teamScore}</p>
        <button type="button" onClick={increaseScore}>
          Increase Score
        </button>
        <button type="button" onClick={decreaseScore}>
          Decrease Score
        </button>
      </section>

      <form className="add-member-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMemberName}
          onChange={handleNameChange}
          placeholder="Enter new member name"
        />
        <button type="submit">Add Member</button>
      </form>

      <section className="member-controls" aria-label="Member filters">
        <div className="status-filters">
          <button
            type="button"
            className={statusFilter === 'all' ? 'selected' : ''}
            onClick={() => setStatusFilter('all')}
          >
            All
          </button>
          <button
            type="button"
            className={statusFilter === 'active' ? 'selected' : ''}
            onClick={() => setStatusFilter('active')}
          >
            Active
          </button>
          <button
            type="button"
            className={statusFilter === 'inactive' ? 'selected' : ''}
            onClick={() => setStatusFilter('inactive')}
          >
            Inactive
          </button>
        </div>
        <input
          type="search"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search members by name"
          aria-label="Search members by name"
        />
      </section>

      {visibleMembers.length === 0 ? (
        <p className="empty-state">No members match your filters.</p>
      ) : (
        <section className="member-grid">
          {visibleMembers.map((member) => (
            <MemberCard
              key={member.id}
              {...member}
              onRemove={handleRemove}
              onToggleStatus={handleToggleStatus}
            />
          ))}
        </section>
      )}
    </>
  )
}

export default TeamDashboard
